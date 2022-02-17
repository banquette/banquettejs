import { Injector } from "@banquette/dependency-injection/injector";
import { Exception } from "@banquette/exception/exception";
import { UsageException } from "@banquette/exception/usage.exception";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { TransferProgressEvent } from "@banquette/http/event/transfer-progress.event";
import { HttpRequest } from "@banquette/http/http-request";
import { humanFileSize } from "@banquette/utils-string/format/human-file-size";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { RemoteModule } from "../../misc/module/remote/remote.module";
import { FormViewModel } from "../form-view-model";
import { NoopTransformer } from "../value-transformer/noop-transformer.interface";
import { ValueTransformerInterface } from "../value-transformer/value-transformer.interface";
import { UploadStatus, FileUploadTag } from "./constant";
import { UploadFile } from "./upload-file";

/**
 * The view model logic behind a generic file form control.
 */
export class FileViewModel extends FormViewModel {
    /**
     * The label explaining what the input is about.
     */
    public label: string|null = null;

    /**
     * An optional help text to show to the user.
     */
    public help: string|null = null;

    /**
     * If `true` multiple files can be selected.
     */
    public multiple: boolean = false;

    /**
     * Accepted file types mask.
     */
    public accept: string|null = null;

    /**
     * If `true`, each file will start uploading immediately after being queued.
     */
    public autoStartUpload: boolean = true;

    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    public ignoreNonUploadedFiles: boolean = true;

    /**
     * Files currently selected.
     */
    public files: UploadFile[] = [];

    /**
     * Remote module
     */
    public remote: RemoteModule;

    /**
     * A map between UploadFile instances and their respective http request.
     * The request is not stored in UploadFile to avoid exposing it to the view.
     */
    private uploadRequestsMap = new WeakMap<UploadFile, HttpRequest>();

    public constructor(public control: FormViewControlInterface, valueTransformer: ValueTransformerInterface = NoopTransformer) {
        super(control, valueTransformer);
        this.remote = Injector.Get(RemoteModule);
        this.remote.payloadType = PayloadTypeFormData;
        this.remote.allowMultiple = true;
    }

    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    public onFileSelectionChange(event: Event): void {
        if (event.type !== 'change' || !(event.target instanceof HTMLInputElement) || event.target.type !== 'file') {
            throw new UsageException('`onFileSelectionChange` expect to be called by the `change` event of a file input.');
        }
        const missingFiles = [];
        const newFiles = event.target.files !== null ? Array.from(event.target.files) : [];
        for (const file of this.files) {
            if (newFiles.indexOf(file.file) < 0) {
                missingFiles.push(file);
            }
        }
        for (const missing of missingFiles) {
            this.cancel(missing);
        }
        for (const newFile of newFiles) {
            this.queue(newFile);
        }
        this.updateControlValue();
    }

    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    public cancel(file: UploadFile): void {
        const pos = this.files.indexOf(file);
        if (pos < 0) {
            return ;
        }
        this.pause(file); // To stop the upload
        this.files.splice(pos, 1);
        this.updateControlValue();
    }

    /**
     * Cancel the upload of all files and clear the queue.
     */
    public cancelAll(): void {
        for (const file of this.files) {
            this.cancel(file);
        }
    }

    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    public pause(file: UploadFile): void {
        if (file.status !== UploadStatus.Uploading) {
            return ;
        }
        const request = this.uploadRequestsMap.get(file);
        if (!isNullOrUndefined(request)) {
            request.cancel();
            // Real pause is not supported.
            // The difference between pause() and cancel() is that cancel() also remove the file from the queue, not pause().
            file.progress = 0;
            file.uploadedSize = 0;
            file.uploadedSizeText = humanFileSize(0);
            file.status = UploadStatus.Paused;
            this.uploadRequestsMap.delete(file);
        }
        this.updateControlValue();
    }

    /**
     * Pause the upload of all files in queue.
     */
    public pauseAll(): void {
        for (const file of this.files) {
            this.pause(file);
        }
    }

    /**
     * Start the upload of a file.
     */
    public start(file: UploadFile): void {
        if (file.status === UploadStatus.Uploading || file.status === UploadStatus.Succeeded) {
            return ;
        }
        const existingRequest = this.uploadRequestsMap.get(file);
        if (!isNullOrUndefined(existingRequest)) {
            existingRequest.cancel();
        }
        if (!this.remote.isApplicable) {
            throw new UsageException('You must define an url or endpoint where to upload the file.');
        }
        const response = this.remote.send({file: file.file}, {}, [FileUploadTag]);
        this.uploadRequestsMap.set(file, response.request);
        response.promise.progress((event) => {
            if (event instanceof TransferProgressEvent) {
                file.progress = Math.round(event.percent);
                file.uploadedSize = event.loaded;
                file.uploadedSizeText = humanFileSize(event.loaded);
            }
        }).then(() => {
            file.status = UploadStatus.Succeeded;
        }).catch((reason: Exception) => {
            file.error = reason.message;
            file.status = UploadStatus.Failed;
        }).finally(() => {
            this.uploadRequestsMap.delete(file);
            this.updateControlValue();
        });
        file.status = UploadStatus.Uploading;
        this.updateControlValue();
    }

    /**
     * Add a file to the queue.
     */
    public queue(file: File): void {
        const uploadFile = new UploadFile(file);
        this.files.push(uploadFile);
        if (this.autoStartUpload) {
            this.start(uploadFile);
        }
        this.updateControlValue();
    }

    /**
     * Schedule an update of the value of the FormControl associated with the view model.
     *
     * The actual update is deferred to the next cycle to avoid repeating the update
     * needlessly when doing multiple operations that require an update.
     */
    private updateControlValue = (() => {
        let queued = false;
        return (): void => {
            if (queued) {
                return ;
            }
            queued = true;
            Promise.resolve().then(() => {
                const resolveFileValue = (file: UploadFile) => {
                    // If the file is not uploaded and not uploading, add the blob as is
                    // so it can be send as part of the form.
                    if (file.status === UploadStatus.Paused) {
                        return !this.ignoreNonUploadedFiles ? file.file : null;
                    }
                    // If the file has already been successfully uploaded to the server,
                    // try to set the server's response instead (we don't want to upload it again).
                    // If the server did not return anything, set a generic data structure
                    // and hope the server will know what to do with it...
                    if (file.status === UploadStatus.Succeeded) {
                        return file.serverResponse || {
                            name: file.file.name,
                            size: file.file.size,
                            type: file.file.type
                        };
                    }
                    // Otherwise, if the file is uploading or failed to upload, don't include it at all.
                    return null;
                };
                if (this.multiple) {
                    this.value = this.files.reduce((acc: File[], item: UploadFile) => {
                        const value = resolveFileValue(item);
                        if (value !== null) {
                            acc.push(value);
                        }
                        return acc;
                    }, []);
                } else if (this.files.length > 0) {
                    this.value = resolveFileValue(this.files[0]);
                } else {
                    this.value = null;
                }
                queued = false;
            });
        };
    })();
}

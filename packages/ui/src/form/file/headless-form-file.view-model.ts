import { UsageException } from "@banquette/exception/usage.exception";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { TransferProgressEvent } from "@banquette/http/event/transfer-progress.event";
import { HttpRequest } from "@banquette/http/http-request";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { RemoteModule } from "../../misc/remote/remote.module";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { UploadStatus, FileUploadTag } from "./constant";
import { FormFile } from "./form-file";
import { HeadlessFormFileViewDataInterface } from "./headless-form-file-view-data.interface";

/**
 * The view model logic behind a generic file form control.
 */
export class HeadlessFormFileViewModel<ViewDataType extends HeadlessFormFileViewDataInterface = HeadlessFormFileViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * If `true`, each file will start uploading immediately after being queued.
     */
    public autoStartUpload: boolean = true;

    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    public ignoreNonUploadedFiles: boolean = true;

    /**
     * If `true`, when the whole list of files is replaced for each selection.
     * Only makes sense if `multiple` is `true` too.
     */
    private replaceOnChange: boolean = false;

    /**
     * Remote module
     */
    public remote: RemoteModule = new RemoteModule();

    /**
     * A map between UploadFile instances and their respective http request.
     * The request is not stored in UploadFile to avoid exposing it to the view.
     */
    private uploadRequestsMap = new WeakMap<FormFile, HttpRequest>();

    public constructor(control: FormViewControlInterface) {
        super(control);
        this.viewData.control.value = [];
        this.remote.updateConfiguration({
            payloadType: PayloadTypeFormData,
            allowMultiple: true
        });
        Object.assign(this.viewData, {
            multiple: false,
            accept: null,
            files: []
        });
    }

    /**
     * @inheritDoc
     */
    public controlValueToViewValue(controlValue: any): any {
        const controlValueArray = ensureArray(controlValue);

        // Remove all files with no File object.
        // These files have been added by the FormControl.
        const viewValue = ensureArray(this.viewData.control.value).filter((i) => i.file !== null);

        for (const item of controlValueArray) {
            viewValue.push(FormFile.Create(item));
        }
        return viewValue;
    }

    /**
     * @inheritDoc
     */
    public viewValueToControlValue(viewValue: any): any {
        const resolveFileValue = (file: FormFile) => {
            if (file.status === UploadStatus.Remote) {
                return file.serverResponse;
            }

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
                    name: file.filename,
                    size: file.totalSize,
                    type: file.type
                };
            }
            // Otherwise, if the file is uploading or failed to upload, don't include it at all.
            return null;
        };

        if (this.viewData.multiple) {
            return this.viewData.control.value.reduce((acc: File[], item: FormFile) => {
                const value = resolveFileValue(item);
                if (value !== null) {
                    acc.push(value);
                }
                return acc;
            }, []);
        } else if (this.viewData.control.value.length > 0) {
            return resolveFileValue(this.viewData.control.value[0]);
        }
        return null;
    }

    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    public onFileSelectionChange(event: Event): void {
        if (event.type !== 'change' || !(event.target instanceof HTMLInputElement) || event.target.type !== 'file') {
            throw new UsageException('`onFileSelectionChange` expect to be called by the `change` event of a file input.');
        }
        const newFiles = event.target.files !== null ? Array.from(event.target.files) : [];
        if (this.replaceOnChange) {
            const missingFiles = [];
            for (const file of this.viewData.control.value) {
                if (file.file !== null && newFiles.indexOf(file.file) < 0) {
                    missingFiles.push(file);
                }
            }
            for (const missing of missingFiles) {
                this.cancel(missing);
            }
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
    public cancel(file: FormFile): void {
        const pos = this.viewData.control.value.indexOf(file);
        if (pos < 0) {
            return ;
        }
        this.pause(file); // To stop the upload
        this.viewData.control.value.splice(pos, 1);
        this.updateControlValue();
    }

    /**
     * Cancel the upload of all files and clear the queue.
     */
    public cancelAll(): void {
        for (const file of this.viewData.control.value) {
            this.cancel(file);
        }
    }

    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    public pause(file: FormFile): void {
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
            file.status = UploadStatus.Paused;
            this.uploadRequestsMap.delete(file);
        }
        this.updateControlValue();
    }

    /**
     * Pause the upload of all files in queue.
     */
    public pauseAll(): void {
        for (const file of this.viewData.control.value) {
            this.pause(file);
        }
    }

    /**
     * Start the upload of a file.
     */
    public start(file: FormFile): void {
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
        const response = this.remote.send({file: file.file}, {}, {}, [FileUploadTag]);
        this.uploadRequestsMap.set(file, response.request);
        response.promise.progress((event) => {
            if (event instanceof TransferProgressEvent) {
                file.progress = Math.round(event.percent);
                file.uploadedSize = event.loaded;
            }
        }).then(() => {
            file.serverResponse = this.isAcceptableAsServerResponse(response.result) ? response.result : undefined;
            file.status = UploadStatus.Succeeded;
        }).catch(() => {
            file.error = response.error ? response.error.message : 'Unknown error';
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
        const uploadFile = new FormFile(file);

        if (this.viewData.accept && !this.isAcceptableFile(file, this.viewData.accept)) {
            uploadFile.status = UploadStatus.Failed;
            uploadFile.error = 'Invalid type of file.';
        }
        this.viewData.control.value.push(uploadFile);
        if (!uploadFile.failed && this.autoStartUpload) {
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
    private updateControlValue = oncePerCycleProxy(() => {
        // Reassign the view value to a new array.
        // This will force a recompute of the control value.
        this.viewData.control.value = this.viewData.control.value.slice(0);
    });

    /**
     * Check if the input can be used as a value for the FormControl.
     */
    private isAcceptableAsServerResponse(input: any): boolean {
        if (isObject(input)) {
            return Object.keys(input).length > 0;
        }
        if (isString(input)) {
            return input.length > 0;
        }
        return !isNullOrUndefined(input);
    }

    /**
     * Test if a file matches an "accept" pattern.
     */
    private isAcceptableFile(file: File, accept: string): boolean {
        let extension: string|null = null;
        const candidates = accept.split(',').map((i) => trim(i)).filter((i) => i.length);
        for (const candidate of candidates) {
            if (candidate[0] === '.') {
                if (!extension) {
                    extension = file.name.slice((Math.max(0, file.name.lastIndexOf(".")) || Infinity) + 1);
                    if ('.' + extension === candidate) {
                        return true;
                    }
                }
            } else if ((new RegExp(candidate.replace( '*', '.\*')).test(file.type))) {
                return true;
            }
        }
        return false;
    }
}

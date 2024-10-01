import { UsageException } from "@banquette/exception";
import { FormViewControlInterface } from "@banquette/form";
import { PayloadTypeFormData, TransferProgressEvent, HttpRequest } from "@banquette/http";
import { oncePerCycleProxy } from "@banquette/utils-misc";
import { byteCountToHumanSize, trim } from "@banquette/utils-string";
import { ensureArray, isNullOrUndefined, isObject, isString } from "@banquette/utils-type";
import { RemoteModule } from "../../misc/remote/remote.module";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { UploadStatus, FileUploadTag } from "./constant";
import { FormFile } from "./form-file";
import { HeadlessFormFileViewDataInterface } from "./headless-form-file-view-data.interface";
import { I18nInterface } from "./i18n.interface";

/**
 * The view model logic behind a generic file form control.
 */
export class HeadlessFormFileViewModel<ViewDataType extends HeadlessFormFileViewDataInterface = HeadlessFormFileViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * `true` to allow the input to hold multiple files.
     */
    public get multiple(): boolean {
        return this.viewData.multiple;
    }
    public set multiple(value: boolean) {
        this.viewData.multiple = value;
    }

    /**
     * Validation pattern to check input files with.
     */
    public get accept(): string|null {
        return this.viewData.accept;
    }
    public set accept(value: string|null) {
        this.viewData.accept = value;
    }

    /**
     * Limit the size of individual files.
     */
    public maxIndividualSize: number|null = null;

    /**
     * Limit the total size of all uploaded files cumulated.
     */
    public maxTotalSize: number|null = null;

    /**
     * If `true`, each file will start uploading immediately after being queued.
     */
    public autoStartUpload: boolean = true;

    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    public ignoreNonUploadedFiles: boolean = true;

    /**
     * Remote module
     */
    public remote: RemoteModule = new RemoteModule();

    /**
     * The HTML file element to sync with the selection (optional).
     */
    public input: HTMLInputElement|null = null;

    /**
     * A map between UploadFile instances and their respective http request.
     * The request is not stored in UploadFile to avoid exposing it to the view.
     */
    private uploadRequestsMap = new WeakMap<FormFile, HttpRequest>();

    /**
     * So we can manipulate the files of the input.
     */
    private dataTransfer = new DataTransfer();

    public constructor(control: FormViewControlInterface, private i18n: I18nInterface) {
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
        const viewValue = ensureArray(this.viewData.control.value).filter((i) => !(i instanceof FormFile) || i.file !== null);

        for (const item of controlValueArray) {
            viewValue.push(FormFile.Create(item, this.i18n));
        }
        return viewValue;
    }

    /**
     * @inheritDoc
     */
    public viewValueToControlValue(viewValue: any): any {
        const resolveFileValue = (file: FormFile|any): FormFile|any => {
            // If the file is any custom value, keep it as is.
            if (!(file instanceof FormFile)) {
                return file;
            }
            // If the file has been added manually from the outside, just keep the given value.
            if (file.status === UploadStatus.Remote) {
                return file.serverResponse;
            }

            // If the file is not uploaded and not uploading, add the blob as is
            // so it can be sent as part of the form.
            if (file.status === UploadStatus.Paused) {
                return !this.ignoreNonUploadedFiles ? file.file : null;
            }
            // If the file has already been successfully uploaded to the server,
            // try to set the server's response instead (we don't want to upload it again).
            // If the server did not return anything, use the FormFile as value.
            if (file.status === UploadStatus.Succeeded || (!this.ignoreNonUploadedFiles && file.status === UploadStatus.Uploading)) {
                return file.serverResponse || file.file;
            }
            // Otherwise, if the file is uploading or failed to upload, don't include it at all.
            return null;
        };

        if (this.multiple) {
            return this.viewData.control.value.reduce((acc: Array<FormFile|any>, item: FormFile|any) => {
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
        if (!this.multiple) {
            const missingFiles = [];
            for (const file of this.viewData.control.value) {
                if (!file.file || newFiles.indexOf(file.file) < 0) {
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
        this.removeFileFromInput(file);
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
        if (!file.file || file.status === UploadStatus.Uploading || file.status === UploadStatus.Succeeded || !this.validateFile(file)) {
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
            file.error = response.error ? response.error.message : this.i18n.unknownError;
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
        const uploadFile = new FormFile(file, this.i18n);

        if (!this.validateFile(uploadFile)) {
            uploadFile.status = UploadStatus.Failed;
        }
        this.viewData.control.value.push(uploadFile);
        if (!uploadFile.failed && this.autoStartUpload) {
            // Do not use `uploadFile` directly because the view may proxify it for change detection.
            this.start(this.viewData.control.value[this.viewData.control.value.length - 1]);
        }
        // Do not check if an input is assigned.
        // Even if there is no input, still maintain the DataTransfer in sync
        // in case one is assigned later on.
        this.dataTransfer.items.add(file);
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
     * Remove a file from the file input.
     */
    private removeFileFromInput(file: FormFile): void {
        if (!file.file) {
            return ;
        }
        for (let i = 0; i < this.dataTransfer.items.length; ++i) {
            const candidate = this.dataTransfer.items[i].getAsFile();
            if (candidate && file.file.name === candidate.name) {
                this.dataTransfer.items.remove(i);

                // Only test the existence of the input here.
                // Even if there is no input, still maintain the DataTransfer in sync
                // in case one is assigned later on.
                if (this.input) {
                    this.input.files = this.dataTransfer.files;
                }
                return ;
            }
        }
    }

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
    private validateFile(file: FormFile): boolean {
        if (!file.file) {
            file.error = this.i18n.unknownError;
            return false;
        }
        if (!this.isAcceptableType(file.file)) {
            file.error = this.i18n.invalidType;
            return false;
        }
        if (this.maxIndividualSize !== null && file.file.size > this.maxIndividualSize) {
            file.error = this.i18n.individualSizeExceeded.replace('{size}', byteCountToHumanSize(this.maxIndividualSize));
            return false;
        }
        if (this.maxTotalSize !== null) {
            const sum = this.viewData.control.value.reduce((acc: number, item: FormFile) => {
                return acc + (item.file ? item.file.size : 0);
            }, this.viewData.control.value.indexOf(file) > -1 ? 0 : file.file.size);
            if (sum > this.maxTotalSize) {
                file.error = this.i18n.totalSizeExceeded.replace('{size}', byteCountToHumanSize(this.maxTotalSize));
                return false;
            }
        }
        return true;
    }

    /**
     * Check if the type of a file is acceptable in the current configuration.
     */
    private isAcceptableType(file: File): boolean {
        if (!this.accept) {
            return true;
        }
        let extension: string|null = null;
        const candidates = this.accept.split(',').map((i) => trim(i)).filter((i) => i.length);
        for (const candidate of candidates) {
            if (candidate[0] === '.') {
                if (!extension) {
                    extension = file.name.slice((Math.max(0, file.name.lastIndexOf(".")) || Infinity) + 1);
                }
                if ('.' + extension === candidate) {
                    return true;
                }
            } else if ((new RegExp(candidate.replace( '*', '.\*')).test(file.type))) {
                return true;
            }
        }
        return false;
    }
}

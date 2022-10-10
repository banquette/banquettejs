import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { RemoteModule } from "../../misc/remote/remote.module";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { FormFile } from "./form-file";
import { HeadlessFormFileViewDataInterface } from "./headless-form-file-view-data.interface";
import { I18nInterface } from "./i18n.interface";
/**
 * The view model logic behind a generic file form control.
 */
export declare class HeadlessFormFileViewModel<ViewDataType extends HeadlessFormFileViewDataInterface = HeadlessFormFileViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    private i18n;
    /**
     * `true` to allow the input to hold multiple files.
     */
    get multiple(): boolean;
    set multiple(value: boolean);
    /**
     * Validation pattern to check input files with.
     */
    get accept(): string | null;
    set accept(value: string | null);
    /**
     * Limit the size of individual files.
     */
    maxIndividualSize: number | null;
    /**
     * Limit the total size of all uploaded files cumulated.
     */
    maxTotalSize: number | null;
    /**
     * If `true`, each file will start uploading immediately after being queued.
     */
    autoStartUpload: boolean;
    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    ignoreNonUploadedFiles: boolean;
    /**
     * Remote module
     */
    remote: RemoteModule;
    /**
     * The HTML file element to sync with the selection (optional).
     */
    input: HTMLInputElement | null;
    /**
     * A map between UploadFile instances and their respective http request.
     * The request is not stored in UploadFile to avoid exposing it to the view.
     */
    private uploadRequestsMap;
    /**
     * So we can manipulate the files of the input.
     */
    private dataTransfer;
    constructor(control: FormViewControlInterface, i18n: I18nInterface);
    /**
     * @inheritDoc
     */
    controlValueToViewValue(controlValue: any): any;
    /**
     * @inheritDoc
     */
    viewValueToControlValue(viewValue: any): any;
    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    onFileSelectionChange(event: Event): void;
    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    cancel(file: FormFile): void;
    /**
     * Cancel the upload of all files and clear the queue.
     */
    cancelAll(): void;
    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    pause(file: FormFile): void;
    /**
     * Pause the upload of all files in queue.
     */
    pauseAll(): void;
    /**
     * Start the upload of a file.
     */
    start(file: FormFile): void;
    /**
     * Add a file to the queue.
     */
    queue(file: File): void;
    /**
     * Schedule an update of the value of the FormControl associated with the view model.
     *
     * The actual update is deferred to the next cycle to avoid repeating the update
     * needlessly when doing multiple operations that require an update.
     */
    private updateControlValue;
    /**
     * Remove a file from the file input.
     */
    private removeFileFromInput;
    /**
     * Check if the input can be used as a value for the FormControl.
     */
    private isAcceptableAsServerResponse;
    /**
     * Test if a file matches an "accept" pattern.
     */
    private validateFile;
    /**
     * Check if the type of a file is acceptable in the current configuration.
     */
    private isAcceptableType;
}

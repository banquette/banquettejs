import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { HttpRequest } from "@banquette/http/http-request";
import { HttpService } from "@banquette/http/http.service";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { FormViewModel } from "../form-view-model";
import { UploadStatus } from "./constant";
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
     * Files currently selected.
     */
    public files: UploadFile[] = [];

    /**
     * To do the actual upload.
     */
    private http: HttpService = Injector.Get(HttpService);

    /**
     * A map between UploadFile instances and their respective http request.
     * The request is not stored in UploadFile to avoid exposing it to the view.
     */
    private uploadRequestsMap = new WeakMap<UploadFile, HttpRequest>();

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
        // TODO: Cancel the upload.
        this.files.splice(pos, 1);
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
        // TODO: cancel the upload without removing if from the queue
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
        if (file.status !== UploadStatus.Uploading && file.status !== UploadStatus.Succeed) {
            return ;
        }
        const existingRequest = this.uploadRequestsMap.get(file);
        // Should never happen, but it doesn't hurt to be sure.
        if (!isNullOrUndefined(existingRequest)) {
            existingRequest.cancel();
        }
        //const request = this.http.build();
        //this.uploadRequestsMap.set(file);
        // TODO: start upload
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
    }
}

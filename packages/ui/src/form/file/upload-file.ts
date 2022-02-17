import { humanFileSize } from "@banquette/utils-string/format/human-file-size";
import { UploadStatus } from "./constant";

/**
 * A decorator around a File object, adding additional information related to the upload transfer.
 */
export class UploadFile {
    /**
     * Holds the current state of the transfer.
     */
    public status!: UploadStatus;

    /**
     * Upload progress percentage.
     */
    public progress!: number;

    /**
     * Total size of the file (in bytes).
     */
    public totalSize!: number;

    /**
     * Total size as a user-friendly text.
     */
    public totalSizeText!: string;

    /**
     * Uploaded size of the file (in bytes).
     */
    public uploadedSize!: number;

    /**
     * Uploaded size as a user-friendly text.
     */
    public uploadedSizeText!: string;

    /**
     * Error message in case the upload fails.
     */
    public error: string|null = null;

    /**
     * The actual file object being decorated.
     */
    public readonly file!: File;

    /**
     * If the file has been uploaded separately from the form,
     * this attribute will contain the raw response from the server.
     *
     * This value will then replace the File instance in the form's value.
     */
    public serverResponse?: any;

    /**
     * Status shorthands.
     */
    public get uploading(): boolean { return this.status === UploadStatus.Uploading }
    public get paused(): boolean { return this.status === UploadStatus.Paused }
    public get succeeded(): boolean { return this.status === UploadStatus.Succeeded }
    public get failed(): boolean { return this.status === UploadStatus.Failed }

    public constructor(file: File) {
        this.file = file;
        this.progress = 0;
        this.uploadedSize = 0;
        this.uploadedSizeText = humanFileSize(0);
        this.totalSize = file.size;
        this.totalSizeText = humanFileSize(file.size);
        this.status = UploadStatus.Paused;
    }
}

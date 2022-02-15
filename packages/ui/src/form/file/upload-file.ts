import { UploadStatus } from "./constant";

/**
 * A decorator around a File object, adding additional information related to the upload transfer.
 */
export class UploadFile {
    /**
     * Holds the current state of the transfer.
     */
    public readonly status!: UploadStatus;

    /**
     * Upload progress percentage.
     */
    public readonly progress!: number;

    /**
     * The actual file object being decorated.
     */
    public readonly file!: File;

    public constructor(file: File) {
        this.file = file;
        this.progress = 0;
        this.status = UploadStatus.Paused;
    }
}

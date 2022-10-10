import { UploadStatus } from "./constant";
import { I18nInterface } from "./i18n.interface";
/**
 * A decorator around a File object, adding additional information related to the upload.
 */
export declare class FormFile {
    /**
     * The name of the file.
     */
    filename: string;
    /**
     * Mime type of the file.
     */
    type: string | null;
    /**
     * Holds the current state of the transfer.
     */
    status: UploadStatus;
    /**
     * Upload progress percentage.
     */
    progress: number | null;
    /**
     * Total size of the file (in bytes).
     */
    private _totalSize;
    get totalSize(): number | null;
    set totalSize(value: number | null);
    /**
     * Total size as a user-friendly text.
     */
    readonly totalSizeText: string | null;
    /**
     * Uploaded size of the file (in bytes).
     */
    private _uploadedSize;
    get uploadedSize(): number | null;
    set uploadedSize(value: number | null);
    /**
     * Uploaded size as a user-friendly text.
     */
    readonly uploadedSizeText: string | null;
    /**
     * Error message in case the upload fails.
     */
    error: string | null;
    /**
     * The actual file object being decorated.
     */
    readonly file: File | null;
    /**
     * If the file has been uploaded separately from the form,
     * this attribute will contain the raw response from the server.
     *
     * This value will then replace the File instance in the form's value.
     */
    serverResponse?: any;
    /**
     * Status shorthands.
     */
    get uploading(): boolean;
    get paused(): boolean;
    get succeeded(): boolean;
    get failed(): boolean;
    get remote(): boolean;
    constructor(file: File | null, i18n: I18nInterface);
    /**
     * Create a FormFile from a raw input.
     * The input can be a File native object or any other value.
     *
     * If not a File object, the input is expected to be an object implementing the FormFileInterface.
     * The interface can be implemented partially.
     *
     * All the values of FormFile have a default value, so if the input doesn't match
     * what is expected at all, an instance will still be created with the default values,
     * so something can appear on the view.
     */
    static Create(input: any, i18n: I18nInterface): FormFile;
}

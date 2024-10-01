import { byteCountToHumanSize, isNonEmptyString } from "@banquette/utils-string";
import { isObject, isValidNumber } from "@banquette/utils-type";
import { UploadStatus } from "./constant";
import { I18nInterface } from "./i18n.interface";

/**
 * A decorator around a File object, adding additional information related to the upload.
 */
export class FormFile {
    /**
     * The name of the file.
     */
    public filename: string = '(unknown name)';

    /**
     * Mime type of the file.
     */
    public type: string|null = null;

    /**
     * Holds the current state of the transfer.
     */
    public status: UploadStatus;

    /**
     * Upload progress percentage.
     */
    public progress: number|null;

    /**
     * Total size of the file (in bytes).
     */
    private _totalSize: number|null = null;
    public get totalSize(): number|null {
        return this._totalSize;
    }
    public set totalSize(value: number|null) {
        this._totalSize = value;
        (this as any /* Writeable<FormFile> */).totalSizeText = value !== null ? byteCountToHumanSize(value) : null;
    }

    /**
     * Total size as a user-friendly text.
     */
    public readonly totalSizeText!: string|null;

    /**
     * Uploaded size of the file (in bytes).
     */
    private _uploadedSize: number|null = null;
    public get uploadedSize(): number|null {
        return this._uploadedSize;
    }
    public set uploadedSize(value: number|null) {
        this._uploadedSize = value;
        (this as any /* Writeable<FormFile> */).uploadedSizeText = value !== null ? byteCountToHumanSize(value) : null;
    }

    /**
     * Uploaded size as a user-friendly text.
     */
    public readonly uploadedSizeText!: string|null;

    /**
     * Error message in case the upload fails.
     */
    public error: string|null = null;

    /**
     * The actual file object being decorated.
     */
    public readonly file!: File|null;

    /**
     * If the file has been uploaded separately from the form,
     * this attribute will contain the raw response from the server.
     *
     * This value will then replace the File instance in the form's value.
     */
    public serverResponse?: any;

    /**
     * Check if the mime type of the file corresponds to an image.
     */
    public get isImage(): boolean {
        return this.type !== null && this.type.startsWith('image/');
    }

    /**
     * Status shorthands.
     */
    public get uploading(): boolean { return this.status === UploadStatus.Uploading }
    public get paused(): boolean { return this.status === UploadStatus.Paused }
    public get succeeded(): boolean { return this.status === UploadStatus.Succeeded }
    public get failed(): boolean { return this.status === UploadStatus.Failed }
    public get remote(): boolean { return this.status === UploadStatus.Remote }

    public constructor(file: File|null, i18n: I18nInterface) {
        this.file = file;
        this.type = file !== null ? file.type : null;
        this.filename = file !== null ? file.name : i18n.noName;
        this.progress = file !== null ? 0 : null;
        this.uploadedSize = file !== null ? 0 : null;
        this.totalSize = file !== null ? file.size : null;
        this.status = file !== null ? UploadStatus.Paused : UploadStatus.Remote;
    }

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
    public static Create(input: any, i18n: I18nInterface): FormFile {
        if (input instanceof File) {
            return new FormFile(input, i18n);
        }
        const instance = new FormFile(null, i18n);
        if (isObject(input)) {
            if (isNonEmptyString(input.name)) {
                instance.filename = input.name;
            }
            if (isValidNumber(input.size)) {
                instance.totalSize = input.size;
            }
            if (isNonEmptyString(input.type)) {
                instance.type = input.type;
            }
            // Always set the server response to the raw input,
            // so the data given by the user to the FormControl is always kept as is.
            instance.serverResponse = input;
        }
        return instance;
    }
}

/**
 * Define the possible status of a UploadFileInterface.
 */
export declare enum UploadStatus {
    /**
     * The file is currently transferring.
     */
    Uploading = 0,
    /**
     * The file has been successfully uploaded.
     */
    Succeeded = 1,
    /**
     * The upload failed or the server response returned a non 2xx status code.
     */
    Failed = 2,
    /**
     * The upload is paused
     */
    Paused = 3,
    /**
     * The file has already been uploaded previously,
     * we only have the input values of the form.
     *
     * This applies when the form is editing something that is already
     * present on the server. There is no "File" object in this case, and no upload to do.
     *
     * We can only remove it from the control's value.
     */
    Remote = 4
}
/**
 * Tag added to the upload requests.
 */
export declare const FileUploadTag: unique symbol;

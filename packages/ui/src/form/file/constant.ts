/**
 * Define the possible status of a UploadFileInterface.
 */
export enum UploadStatus {
    /**
     * The file is currently transferring.
     */
    Uploading,

    /**
     * The file has been successfully uploaded.
     */
    Succeeded,

    /**
     * The upload failed or the server response returned a non 2xx status code.
     */
    Failed,

    /**
     * The upload is paused
     */
    Paused,

    /**
     * The file has already been uploaded previously,
     * we only have the input values of the form.
     *
     * This applies when the form is editing something that is already
     * present on the server. There is no "File" object in this case, and no upload to do.
     *
     * We can only remove it from the control's value.
     */
    Remote
}

/**
 * Tag added to the upload requests.
 */
export const FileUploadTag = Symbol('file-upload');

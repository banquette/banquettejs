/**
 * Define the possible status of a UploadFileInterface.
 */
export enum UploadStatus {
    Uploading,
    Succeeded,
    Failed,
    Paused
}

/**
 * Tag added to the upload requests.
 */
export const FileUploadTag = Symbol('file-upload');

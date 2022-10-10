/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Define the possible status of a UploadFileInterface.
 */
exports.UploadStatus = void 0;
(function (UploadStatus) {
    /**
     * The file is currently transferring.
     */
    UploadStatus[UploadStatus["Uploading"] = 0] = "Uploading";
    /**
     * The file has been successfully uploaded.
     */
    UploadStatus[UploadStatus["Succeeded"] = 1] = "Succeeded";
    /**
     * The upload failed or the server response returned a non 2xx status code.
     */
    UploadStatus[UploadStatus["Failed"] = 2] = "Failed";
    /**
     * The upload is paused
     */
    UploadStatus[UploadStatus["Paused"] = 3] = "Paused";
    /**
     * The file has already been uploaded previously,
     * we only have the input values of the form.
     *
     * This applies when the form is editing something that is already
     * present on the server. There is no "File" object in this case, and no upload to do.
     *
     * We can only remove it from the control's value.
     */
    UploadStatus[UploadStatus["Remote"] = 4] = "Remote";
})(exports.UploadStatus || (exports.UploadStatus = {}));
/**
 * Tag added to the upload requests.
 */
var FileUploadTag = Symbol('file-upload');

exports.FileUploadTag = FileUploadTag;

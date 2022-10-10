/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var byteCountToHumanSize = require('@banquette/utils-string/_cjs/dev/format/byte-count-to-human-size');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isValidNumber = require('@banquette/utils-type/_cjs/dev/is-valid-number');
var constant = require('./constant.js');

/**
 * A decorator around a File object, adding additional information related to the upload.
 */
var FormFile = /** @class */ (function () {
    function FormFile(file, i18n) {
        /**
         * The name of the file.
         */
        this.filename = '(unknown name)';
        /**
         * Mime type of the file.
         */
        this.type = null;
        /**
         * Total size of the file (in bytes).
         */
        this._totalSize = null;
        /**
         * Uploaded size of the file (in bytes).
         */
        this._uploadedSize = null;
        /**
         * Error message in case the upload fails.
         */
        this.error = null;
        this.file = file;
        this.type = file !== null ? file.type : null;
        this.filename = file !== null ? file.name : i18n.noName;
        this.progress = file !== null ? 0 : null;
        this.uploadedSize = file !== null ? 0 : null;
        this.totalSize = file !== null ? file.size : null;
        this.status = file !== null ? constant.UploadStatus.Paused : constant.UploadStatus.Remote;
    }
    Object.defineProperty(FormFile.prototype, "totalSize", {
        get: function () {
            return this._totalSize;
        },
        set: function (value) {
            this._totalSize = value;
            this.totalSizeText = value !== null ? byteCountToHumanSize.byteCountToHumanSize(value) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "uploadedSize", {
        get: function () {
            return this._uploadedSize;
        },
        set: function (value) {
            this._uploadedSize = value;
            this.uploadedSizeText = value !== null ? byteCountToHumanSize.byteCountToHumanSize(value) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "uploading", {
        /**
         * Status shorthands.
         */
        get: function () { return this.status === constant.UploadStatus.Uploading; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "paused", {
        get: function () { return this.status === constant.UploadStatus.Paused; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "succeeded", {
        get: function () { return this.status === constant.UploadStatus.Succeeded; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "failed", {
        get: function () { return this.status === constant.UploadStatus.Failed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormFile.prototype, "remote", {
        get: function () { return this.status === constant.UploadStatus.Remote; },
        enumerable: false,
        configurable: true
    });
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
    FormFile.Create = function (input, i18n) {
        if (input instanceof File) {
            return new FormFile(input, i18n);
        }
        var instance = new FormFile(null, i18n);
        if (isObject.isObject(input)) {
            if (isNonEmptyString.isNonEmptyString(input.name)) {
                instance.filename = input.name;
            }
            if (isValidNumber.isValidNumber(input.size)) {
                instance.totalSize = input.size;
            }
            if (isNonEmptyString.isNonEmptyString(input.type)) {
                instance.type = input.type;
            }
            // Always set the server response to the raw input,
            // so the data given by the user to the FormControl is always kept as is.
            instance.serverResponse = input;
        }
        return instance;
    };
    return FormFile;
}());

exports.FormFile = FormFile;

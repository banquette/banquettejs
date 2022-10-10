/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var formData_encoder = require('@banquette/http/_cjs/dev/encoder/form-data.encoder');
var transferProgress_event = require('@banquette/http/_cjs/dev/event/transfer-progress.event');
var oncePerCycleProxy = require('@banquette/utils-misc/_cjs/dev/once-per-cycle-proxy');
var byteCountToHumanSize = require('@banquette/utils-string/_cjs/dev/format/byte-count-to-human-size');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var remote_module = require('../../misc/remote/remote.module.js');
var headlessControl_viewModel = require('../headless-control.view-model.js');
var constant = require('./constant.js');
var formFile = require('./form-file.js');

/**
 * The view model logic behind a generic file form control.
 */
var HeadlessFormFileViewModel = /** @class */ (function (_super) {
    _tslib.__extends(HeadlessFormFileViewModel, _super);
    function HeadlessFormFileViewModel(control, i18n) {
        var _this = _super.call(this, control) || this;
        _this.i18n = i18n;
        /**
         * Limit the size of individual files.
         */
        _this.maxIndividualSize = null;
        /**
         * Limit the total size of all uploaded files cumulated.
         */
        _this.maxTotalSize = null;
        /**
         * If `true`, each file will start uploading immediately after being queued.
         */
        _this.autoStartUpload = true;
        /**
         * If `true`, files not uploaded through the file component will not be added to the form.
         */
        _this.ignoreNonUploadedFiles = true;
        /**
         * Remote module
         */
        _this.remote = new remote_module.RemoteModule();
        /**
         * The HTML file element to sync with the selection (optional).
         */
        _this.input = null;
        /**
         * A map between UploadFile instances and their respective http request.
         * The request is not stored in UploadFile to avoid exposing it to the view.
         */
        _this.uploadRequestsMap = new WeakMap();
        /**
         * So we can manipulate the files of the input.
         */
        _this.dataTransfer = new DataTransfer();
        /**
         * Schedule an update of the value of the FormControl associated with the view model.
         *
         * The actual update is deferred to the next cycle to avoid repeating the update
         * needlessly when doing multiple operations that require an update.
         */
        _this.updateControlValue = oncePerCycleProxy.oncePerCycleProxy(function () {
            // Reassign the view value to a new array.
            // This will force a recompute of the control value.
            _this.viewData.control.value = _this.viewData.control.value.slice(0);
        });
        _this.viewData.control.value = [];
        _this.remote.updateConfiguration({
            payloadType: formData_encoder.PayloadTypeFormData,
            allowMultiple: true
        });
        Object.assign(_this.viewData, {
            multiple: false,
            accept: null,
            files: []
        });
        return _this;
    }
    Object.defineProperty(HeadlessFormFileViewModel.prototype, "multiple", {
        /**
         * `true` to allow the input to hold multiple files.
         */
        get: function () {
            return this.viewData.multiple;
        },
        set: function (value) {
            this.viewData.multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeadlessFormFileViewModel.prototype, "accept", {
        /**
         * Validation pattern to check input files with.
         */
        get: function () {
            return this.viewData.accept;
        },
        set: function (value) {
            this.viewData.accept = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadlessFormFileViewModel.prototype.controlValueToViewValue = function (controlValue) {
        var controlValueArray = ensureArray.ensureArray(controlValue);
        // Remove all files with no File object.
        // These files have been added by the FormControl.
        var viewValue = ensureArray.ensureArray(this.viewData.control.value).filter(function (i) { return !(i instanceof formFile.FormFile) || i.file !== null; });
        for (var _i = 0, controlValueArray_1 = controlValueArray; _i < controlValueArray_1.length; _i++) {
            var item = controlValueArray_1[_i];
            viewValue.push(formFile.FormFile.Create(item, this.i18n));
        }
        return viewValue;
    };
    /**
     * @inheritDoc
     */
    HeadlessFormFileViewModel.prototype.viewValueToControlValue = function (viewValue) {
        var _this = this;
        var resolveFileValue = function (file) {
            // If the file is any custom value, keep it as is.
            if (!(file instanceof formFile.FormFile)) {
                return file;
            }
            // If the file has been added manually from the outside, just keep the given value.
            if (file.status === constant.UploadStatus.Remote) {
                return file.serverResponse;
            }
            // If the file is not uploaded and not uploading, add the blob as is
            // so it can be sent as part of the form.
            if (file.status === constant.UploadStatus.Paused) {
                return !_this.ignoreNonUploadedFiles ? file.file : null;
            }
            // If the file has already been successfully uploaded to the server,
            // try to set the server's response instead (we don't want to upload it again).
            // If the server did not return anything, use the FormFile as value.
            if (file.status === constant.UploadStatus.Succeeded || (!_this.ignoreNonUploadedFiles && file.status === constant.UploadStatus.Uploading)) {
                return file.serverResponse || file.file;
            }
            // Otherwise, if the file is uploading or failed to upload, don't include it at all.
            return null;
        };
        if (this.multiple) {
            return this.viewData.control.value.reduce(function (acc, item) {
                var value = resolveFileValue(item);
                if (value !== null) {
                    acc.push(value);
                }
                return acc;
            }, []);
        }
        else if (this.viewData.control.value.length > 0) {
            return resolveFileValue(this.viewData.control.value[0]);
        }
        return null;
    };
    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    HeadlessFormFileViewModel.prototype.onFileSelectionChange = function (event) {
        if (event.type !== 'change' || !(event.target instanceof HTMLInputElement) || event.target.type !== 'file') {
            throw new usage_exception.UsageException('`onFileSelectionChange` expect to be called by the `change` event of a file input.');
        }
        var newFiles = event.target.files !== null ? Array.from(event.target.files) : [];
        if (!this.multiple) {
            var missingFiles = [];
            for (var _i = 0, _a = this.viewData.control.value; _i < _a.length; _i++) {
                var file = _a[_i];
                if (file.file !== null && newFiles.indexOf(file.file) < 0) {
                    missingFiles.push(file);
                }
            }
            for (var _b = 0, missingFiles_1 = missingFiles; _b < missingFiles_1.length; _b++) {
                var missing = missingFiles_1[_b];
                this.cancel(missing);
            }
        }
        for (var _c = 0, newFiles_1 = newFiles; _c < newFiles_1.length; _c++) {
            var newFile = newFiles_1[_c];
            this.queue(newFile);
        }
        this.updateControlValue();
    };
    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    HeadlessFormFileViewModel.prototype.cancel = function (file) {
        var pos = this.viewData.control.value.indexOf(file);
        if (pos < 0) {
            return;
        }
        this.pause(file); // To stop the upload
        this.viewData.control.value.splice(pos, 1);
        this.updateControlValue();
        this.removeFileFromInput(file);
    };
    /**
     * Cancel the upload of all files and clear the queue.
     */
    HeadlessFormFileViewModel.prototype.cancelAll = function () {
        for (var _i = 0, _a = this.viewData.control.value; _i < _a.length; _i++) {
            var file = _a[_i];
            this.cancel(file);
        }
    };
    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    HeadlessFormFileViewModel.prototype.pause = function (file) {
        if (file.status !== constant.UploadStatus.Uploading) {
            return;
        }
        var request = this.uploadRequestsMap.get(file);
        if (!isNullOrUndefined.isNullOrUndefined(request)) {
            request.cancel();
            // Real pause is not supported.
            // The difference between pause() and cancel() is that cancel() also remove the file from the queue, not pause().
            file.progress = 0;
            file.uploadedSize = 0;
            file.status = constant.UploadStatus.Paused;
            this.uploadRequestsMap.delete(file);
        }
        this.updateControlValue();
    };
    /**
     * Pause the upload of all files in queue.
     */
    HeadlessFormFileViewModel.prototype.pauseAll = function () {
        for (var _i = 0, _a = this.viewData.control.value; _i < _a.length; _i++) {
            var file = _a[_i];
            this.pause(file);
        }
    };
    /**
     * Start the upload of a file.
     */
    HeadlessFormFileViewModel.prototype.start = function (file) {
        var _this = this;
        if (!file.file || file.status === constant.UploadStatus.Uploading || file.status === constant.UploadStatus.Succeeded || !this.validateFile(file)) {
            return;
        }
        var existingRequest = this.uploadRequestsMap.get(file);
        if (!isNullOrUndefined.isNullOrUndefined(existingRequest)) {
            existingRequest.cancel();
        }
        if (!this.remote.isApplicable) {
            throw new usage_exception.UsageException('You must define an url or endpoint where to upload the file.');
        }
        var response = this.remote.send({ file: file.file }, {}, {}, [constant.FileUploadTag]);
        this.uploadRequestsMap.set(file, response.request);
        response.promise.progress(function (event) {
            if (event instanceof transferProgress_event.TransferProgressEvent) {
                file.progress = Math.round(event.percent);
                file.uploadedSize = event.loaded;
            }
        }).then(function () {
            file.serverResponse = _this.isAcceptableAsServerResponse(response.result) ? response.result : undefined;
            file.status = constant.UploadStatus.Succeeded;
        }).catch(function () {
            file.error = response.error ? response.error.message : _this.i18n.unknownError;
            file.status = constant.UploadStatus.Failed;
        }).finally(function () {
            _this.uploadRequestsMap.delete(file);
            _this.updateControlValue();
        });
        file.status = constant.UploadStatus.Uploading;
        this.updateControlValue();
    };
    /**
     * Add a file to the queue.
     */
    HeadlessFormFileViewModel.prototype.queue = function (file) {
        var uploadFile = new formFile.FormFile(file, this.i18n);
        if (!this.validateFile(uploadFile)) {
            uploadFile.status = constant.UploadStatus.Failed;
        }
        this.viewData.control.value.push(uploadFile);
        if (!uploadFile.failed && this.autoStartUpload) {
            // Do not use `uploadFile` directly because the view may proxify it for change detection.
            this.start(this.viewData.control.value[this.viewData.control.value.length - 1]);
        }
        // Do not check if an input is assigned.
        // Even if there is no input, still maintain the DataTransfer in sync
        // in case one is assigned later on.
        this.dataTransfer.items.add(file);
        this.updateControlValue();
    };
    /**
     * Remove a file from the file input.
     */
    HeadlessFormFileViewModel.prototype.removeFileFromInput = function (file) {
        if (!file.file) {
            return;
        }
        for (var i = 0; i < this.dataTransfer.items.length; ++i) {
            var candidate = this.dataTransfer.items[i].getAsFile();
            if (candidate && file.file.name === candidate.name) {
                this.dataTransfer.items.remove(i);
                // Only test the existence of the input here.
                // Even if there is no input, still maintain the DataTransfer in sync
                // in case one is assigned later on.
                if (this.input) {
                    this.input.files = this.dataTransfer.files;
                }
                return;
            }
        }
    };
    /**
     * Check if the input can be used as a value for the FormControl.
     */
    HeadlessFormFileViewModel.prototype.isAcceptableAsServerResponse = function (input) {
        if (isObject.isObject(input)) {
            return Object.keys(input).length > 0;
        }
        if (isString.isString(input)) {
            return input.length > 0;
        }
        return !isNullOrUndefined.isNullOrUndefined(input);
    };
    /**
     * Test if a file matches an "accept" pattern.
     */
    HeadlessFormFileViewModel.prototype.validateFile = function (file) {
        if (!file.file) {
            file.error = this.i18n.unknownError;
            return false;
        }
        if (!this.isAcceptableType(file.file)) {
            file.error = this.i18n.invalidType;
            return false;
        }
        if (this.maxIndividualSize !== null && file.file.size > this.maxIndividualSize) {
            file.error = this.i18n.individualSizeExceeded.replace('{size}', byteCountToHumanSize.byteCountToHumanSize(this.maxIndividualSize));
            return false;
        }
        if (this.maxTotalSize !== null) {
            var sum = this.viewData.control.value.reduce(function (acc, item) {
                return acc + (item.file ? item.file.size : 0);
            }, this.viewData.control.value.indexOf(file) > -1 ? 0 : file.file.size);
            if (sum > this.maxTotalSize) {
                file.error = this.i18n.totalSizeExceeded.replace('{size}', byteCountToHumanSize.byteCountToHumanSize(this.maxTotalSize));
                return false;
            }
        }
        return true;
    };
    /**
     * Check if the type of a file is acceptable in the current configuration.
     */
    HeadlessFormFileViewModel.prototype.isAcceptableType = function (file) {
        if (!this.accept) {
            return true;
        }
        var extension = null;
        var candidates = this.accept.split(',').map(function (i) { return trim.trim(i); }).filter(function (i) { return i.length; });
        for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
            var candidate = candidates_1[_i];
            if (candidate[0] === '.') {
                if (!extension) {
                    extension = file.name.slice((Math.max(0, file.name.lastIndexOf(".")) || Infinity) + 1);
                }
                if ('.' + extension === candidate) {
                    return true;
                }
            }
            else if ((new RegExp(candidate.replace('*', '.\*')).test(file.type))) {
                return true;
            }
        }
        return false;
    };
    return HeadlessFormFileViewModel;
}(headlessControl_viewModel.HeadlessControlViewModel));

exports.HeadlessFormFileViewModel = HeadlessFormFileViewModel;

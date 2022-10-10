/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var observablePromise = require('@banquette/promise/_cjs/dev/observable-promise');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('../constants.js');
var statusChange_event = require('../event/status-change.event.js');
var transferProgress_event = require('../event/transfer-progress.event.js');
var network_exception = require('../exception/network.exception.js');
var requestCanceled_exception = require('../exception/request-canceled.exception.js');
var requestTimeout_exception = require('../exception/request-timeout.exception.js');
var networkWatcher_service = require('../network-watcher.service.js');
var adapterResponse = require('./adapter-response.js');

var XhrAdapter = /** @class */ (function () {
    function XhrAdapter(networkWatcher) {
        this.networkWatcher = networkWatcher;
        this.canceled = false;
    }
    /**
     * @inheritDoc
     */
    XhrAdapter.prototype.execute = function (request) {
        var _this = this;
        return new observablePromise.ObservablePromise(function (resolve, reject, progress) {
            if (_this.xhr) {
                return void reject(new usage_exception.UsageException('An XHR object is already defined.' +
                    'You must create a new instance of the adapter for each request.'));
            }
            // Init
            _this.request = request;
            _this.promiseResolve = resolve;
            _this.promiseReject = reject;
            _this.promiseProgress = progress;
            _this.updateProgressStatus(constants.HttpRequestProgressStatus.Preparing);
            // Create xhr
            _this.xhr = new XMLHttpRequest();
            // Bind
            _this.xhr.addEventListener('abort', proxy.proxy(_this.onAbort, _this));
            _this.xhr.addEventListener('error', proxy.proxy(_this.onError, _this));
            _this.xhr.addEventListener('load', proxy.proxy(_this.onComplete, _this));
            _this.xhr.addEventListener('timeout', proxy.proxy(_this.onTimeout, _this));
            _this.xhr.addEventListener('progress', proxy.proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('loadstart', proxy.proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('progress', proxy.proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('load', proxy.proxy(_this.onProgress, _this));
            // Configure
            _this.xhr.open(request.method, request.staticUrl, true);
            _this.xhr.timeout = request.timeout;
            _this.xhr.withCredentials = request.withCredentials;
            if (request.mimeType !== null) {
                _this.xhr.overrideMimeType(request.mimeType);
            }
            var headers = request.headers.all();
            for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
                var headerName = _a[_i];
                _this.xhr.setRequestHeader(headerName, headers[headerName]);
            }
            // Send
            _this.xhr.send(request.payload);
            // In case the request has been canceled immediately
            if (_this.canceled) {
                _this.cancel();
            }
        });
    };
    /**
     * @inheritDoc
     */
    XhrAdapter.prototype.cancel = function () {
        if (this.xhr) {
            this.xhr.abort();
        }
        else {
            this.canceled = true;
        }
    };
    /**
     * Called when the transaction has completed with success.
     * The server could still be on error, this only means the network request succeeded.
     */
    XhrAdapter.prototype.onComplete = function () {
        this.updateProgressStatus(constants.HttpRequestProgressStatus.Closed);
        this.promiseResolve(new adapterResponse.AdapterResponse(this.xhr.status, this.xhr.responseURL, this.xhr.responseText || null, this.xhr.responseType, this.convertHeadersStringToObject(this.xhr.getAllResponseHeaders())));
    };
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    XhrAdapter.prototype.onError = function () {
        this.updateProgressStatus(constants.HttpRequestProgressStatus.Closed);
        this.promiseReject(new network_exception.NetworkException(!this.networkWatcher.isOnline()));
    };
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    XhrAdapter.prototype.onProgress = function (event) {
        if (event.type === 'loadstart') {
            this.updateProgressStatus(constants.HttpRequestProgressStatus.Uploading);
        }
        else if (event.type === 'load') {
            this.updateProgressStatus(constants.HttpRequestProgressStatus.Downloading);
        }
        if (event.lengthComputable) {
            var transferEvent = new transferProgress_event.TransferProgressEvent(this.request, this.requestProgressStatus, event.loaded, event.total, Math.round(event.loaded / event.total * 10000) * 0.01);
            this.promiseProgress(transferEvent);
        }
    };
    /**
     * Called when the transaction is aborted.
     */
    XhrAdapter.prototype.onAbort = function () {
        this.updateProgressStatus(constants.HttpRequestProgressStatus.Closed);
        this.promiseReject(new requestCanceled_exception.RequestCanceledException());
    };
    /**
     * Called when the transaction duration reached the timeout.
     */
    XhrAdapter.prototype.onTimeout = function () {
        this.updateProgressStatus(constants.HttpRequestProgressStatus.Closed);
        this.promiseReject(new requestTimeout_exception.RequestTimeoutException(this.xhr.timeout));
    };
    /**
     * Convert the raw string of headers returned by the server into a map.
     */
    XhrAdapter.prototype.convertHeadersStringToObject = function (rawHeaders) {
        var map = {};
        rawHeaders.trim().split(/[\r\n]+/).forEach(function (line) {
            var parts = line.split(': ');
            map[parts.shift()] = parts.join(': ');
        });
        return map;
    };
    /**
     * Notify the promise of a status change.
     */
    XhrAdapter.prototype.updateProgressStatus = function (status) {
        if (isUndefined.isUndefined(this.requestProgressStatus) || status > this.requestProgressStatus) {
            this.promiseProgress(new statusChange_event.StatusChangeEvent(this.request, status));
            this.requestProgressStatus = status;
        }
    };
    XhrAdapter = _tslib.__decorate([
        module_decorator.Module(),
        _tslib.__param(0, inject_decorator.Inject(networkWatcher_service.NetworkWatcherService)),
        _tslib.__metadata("design:paramtypes", [networkWatcher_service.NetworkWatcherService])
    ], XhrAdapter);
    return XhrAdapter;
}());

exports.XhrAdapter = XhrAdapter;

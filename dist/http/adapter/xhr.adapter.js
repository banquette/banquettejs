/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from '../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { ObservablePromise } from '@banquette/promise/observable-promise';
import { proxy } from '@banquette/utils-misc/proxy';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { HttpRequestProgressStatus } from '../constants.js';
import { StatusChangeEvent } from '../event/status-change.event.js';
import { TransferProgressEvent } from '../event/transfer-progress.event.js';
import { NetworkException } from '../exception/network.exception.js';
import { RequestCanceledException } from '../exception/request-canceled.exception.js';
import { RequestTimeoutException } from '../exception/request-timeout.exception.js';
import { NetworkWatcherService } from '../network-watcher.service.js';
import { AdapterResponse } from './adapter-response.js';

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
        return new ObservablePromise(function (resolve, reject, progress) {
            if (_this.xhr) {
                return void reject(new UsageException('An XHR object is already defined.' +
                    'You must create a new instance of the adapter for each request.'));
            }
            // Init
            _this.request = request;
            _this.promiseResolve = resolve;
            _this.promiseReject = reject;
            _this.promiseProgress = progress;
            _this.updateProgressStatus(HttpRequestProgressStatus.Preparing);
            // Create xhr
            _this.xhr = new XMLHttpRequest();
            // Bind
            _this.xhr.addEventListener('abort', proxy(_this.onAbort, _this));
            _this.xhr.addEventListener('error', proxy(_this.onError, _this));
            _this.xhr.addEventListener('load', proxy(_this.onComplete, _this));
            _this.xhr.addEventListener('timeout', proxy(_this.onTimeout, _this));
            _this.xhr.addEventListener('progress', proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('loadstart', proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('progress', proxy(_this.onProgress, _this));
            _this.xhr.upload.addEventListener('load', proxy(_this.onProgress, _this));
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
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseResolve(new AdapterResponse(this.xhr.status, this.xhr.responseURL, this.xhr.responseText || null, this.xhr.responseType, this.convertHeadersStringToObject(this.xhr.getAllResponseHeaders())));
    };
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    XhrAdapter.prototype.onError = function () {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new NetworkException(!this.networkWatcher.isOnline()));
    };
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    XhrAdapter.prototype.onProgress = function (event) {
        if (event.type === 'loadstart') {
            this.updateProgressStatus(HttpRequestProgressStatus.Uploading);
        }
        else if (event.type === 'load') {
            this.updateProgressStatus(HttpRequestProgressStatus.Downloading);
        }
        if (event.lengthComputable) {
            var transferEvent = new TransferProgressEvent(this.request, this.requestProgressStatus, event.loaded, event.total, Math.round(event.loaded / event.total * 10000) * 0.01);
            this.promiseProgress(transferEvent);
        }
    };
    /**
     * Called when the transaction is aborted.
     */
    XhrAdapter.prototype.onAbort = function () {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new RequestCanceledException());
    };
    /**
     * Called when the transaction duration reached the timeout.
     */
    XhrAdapter.prototype.onTimeout = function () {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new RequestTimeoutException(this.xhr.timeout));
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
        if (isUndefined(this.requestProgressStatus) || status > this.requestProgressStatus) {
            this.promiseProgress(new StatusChangeEvent(this.request, status));
            this.requestProgressStatus = status;
        }
    };
    XhrAdapter = __decorate([
        Module(),
        __param(0, Inject(NetworkWatcherService)),
        __metadata("design:paramtypes", [NetworkWatcherService])
    ], XhrAdapter);
    return XhrAdapter;
}());

export { XhrAdapter };

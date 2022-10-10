/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var abstractHttpRequest_builder = require('./abstract-http-request.builder.js');
var autoDetect_decoder = require('./decoder/auto-detect.decoder.js');
var formData_encoder = require('./encoder/form-data.encoder.js');
var httpRequest_factory = require('./http-request.factory.js');

var HttpRequestBuilder = /** @class */ (function (_super) {
    _tslib.__extends(HttpRequestBuilder, _super);
    function HttpRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the resulting request.
     */
    HttpRequestBuilder.prototype.getRequest = function () {
        if (!this._url) {
            throw new usage_exception.UsageException('You must define an URL.');
        }
        return httpRequest_factory.HttpRequestFactory.Create({
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType || formData_encoder.PayloadTypeFormData,
            responseType: this._responseType || autoDetect_decoder.ResponseTypeAutoDetect,
            headers: this._headers,
            timeout: this._timeout,
            retry: this._retry,
            retryDelay: this._retryDelay,
            priority: this._priority,
            withCredentials: this._withCredentials,
            mimeType: this._mimeType,
            tags: this._tags,
            extras: this._extras
        });
    };
    /**
     * Create a new instance of the builder.
     */
    HttpRequestBuilder.Create = function () {
        return new HttpRequestBuilder();
    };
    return HttpRequestBuilder;
}(abstractHttpRequest_builder.AbstractRequestBuilder));

exports.HttpRequestBuilder = HttpRequestBuilder;

/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var abstractHttpRequest_builder = require('@banquette/http/_cjs/dev/abstract-http-request.builder');
var apiRequest_factory = require('./api-request.factory.js');

var ApiRequestBuilder = /** @class */ (function (_super) {
    _tslib.__extends(ApiRequestBuilder, _super);
    function ApiRequestBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._endpoint = null;
        _this._model = null;
        return _this;
    }
    /**
     * Set the name of the endpoint.
     */
    ApiRequestBuilder.prototype.endpoint = function (name) {
        this._endpoint = name;
        return this;
    };
    /**
     * Set the model to use.
     */
    ApiRequestBuilder.prototype.model = function (identifier) {
        this._model = identifier;
        return this;
    };
    /**
     * Get the resulting request.
     */
    ApiRequestBuilder.prototype.getRequest = function () {
        return apiRequest_factory.ApiRequestFactory.Create({
            endpoint: this._endpoint,
            model: this._model,
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType,
            responseType: this._responseType,
            headers: this._headers,
            timeout: this._timeout,
            retry: this._retry,
            retryDelay: this._retryDelay,
            priority: this._priority || undefined,
            withCredentials: this._withCredentials || false,
            mimeType: this._mimeType,
            tags: this._tags,
            extras: this._extras
        });
    };
    /**
     * Create a new instance of the builder.
     */
    ApiRequestBuilder.Create = function () {
        return new ApiRequestBuilder();
    };
    return ApiRequestBuilder;
}(abstractHttpRequest_builder.AbstractRequestBuilder));

exports.ApiRequestBuilder = ApiRequestBuilder;

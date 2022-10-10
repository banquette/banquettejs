/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var apiEndpointOverride = require('./api-endpoint-override.js');

var ApiRequest = /** @class */ (function () {
    /**
     * Create a ApiRequest object.
     *
     * @param model             A model identifier or a couple of identifiers to separate the request from the response.
     * @param endpoint          The name of an ApiEndpoint.
     * @param url               Raw url to use instead of an endpoint.
     * @param method            Http method.
     * @param params            Url parameters.
     * @param payload           Body of the request.
     * @param payloadType       Format of the payload.
     * @param responseType      Format of the response.
     * @param headers           Headers to send with the request.
     * @param timeout           Maximum duration of the request (in milliseconds).
     * @param retry             Maximum number of tries allowed for the request.
     * @param retryDelay        Time to wait before trying again in case of error.
     * @param priority          The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     * @param withCredentials   If true, cookies and auth headers are included in the request.
     * @param mimeType          MimeType of the payload.
     * @param tags              Tags that will be sent with emitted events.
     * @param extras            Any additional data you want to associate with the request.
     *                          This object will not be sent with the request.
     */
    function ApiRequest(model, endpoint, url, method, params, payload, payloadType, responseType, headers, timeout, retry, retryDelay, priority, withCredentials, mimeType, tags, extras) {
        this.model = model;
        this.endpoint = endpoint;
        this.url = url;
        this.method = method;
        this.params = params;
        this.payload = payload;
        this.payloadType = payloadType;
        this.responseType = responseType;
        this.headers = headers;
        this.timeout = timeout;
        this.retry = retry;
        this.retryDelay = retryDelay;
        this.priority = priority;
        this.withCredentials = withCredentials;
        this.mimeType = mimeType;
        this.tags = tags;
        this.extras = extras;
        /**
         * Unique identifier of the request.
         */
        this.id = ++ApiRequest.MaxId;
    }
    /**
     * Export overridable endpoints' parameters.
     */
    ApiRequest.prototype.toEndpointOverride = function () {
        return new apiEndpointOverride.ApiEndpointOverride(this.method, this.paramsToPrimitives(), this.headers, this.timeout, this.retry, this.retryDelay, this.priority, this.withCredentials, this.mimeType, this.payloadType, this.responseType, this.tags, this.extras);
    };
    /**
     * Convert back the processed parameters into their original map of primitive values.
     */
    ApiRequest.prototype.paramsToPrimitives = function () {
        var params = {};
        if (!isUndefined.isUndefined(this.params)) {
            for (var _i = 0, _a = Object.keys(this.params); _i < _a.length; _i++) {
                var key = _a[_i];
                params[key] = this.params[key].value;
            }
        }
        return params;
    };
    ApiRequest.MaxId = 0;
    return ApiRequest;
}());

exports.ApiRequest = ApiRequest;

/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Allow to override part of the configuration of an endpoint, on use.
 */
var ApiEndpointOverride = /** @class */ (function () {
    /**
     * Create a ApiEndpointOverride object.
     *
     * @param method            Http method.
     * @param params            Url parameters.
     * @param headers           Headers to send with the request.
     * @param timeout           Maximum duration of the request (in milliseconds).
     * @param retry             Maximum number of tries allowed for the request.
     * @param retryDelay        Time to wait before trying again in case of error.
     * @param priority          The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     * @param withCredentials   If true, cookies and auth headers are included in the request.
     * @param mimeType          MimeType of the payload.
     * @param payloadType       Format of the payload.
     * @param responseType      Format of the response.
     * @param mimeType          MimeType of the payload.
     * @param tags              Tags that will be sent with emitted events.
     * @param extras            Any additional data you want to associated with the request.
     *                          This object will not be sent with the request.
     */
    function ApiEndpointOverride(method, params, headers, timeout, retry, retryDelay, priority, withCredentials, mimeType, payloadType, responseType, tags, extras) {
        this.method = method;
        this.params = params;
        this.headers = headers;
        this.timeout = timeout;
        this.retry = retry;
        this.retryDelay = retryDelay;
        this.priority = priority;
        this.withCredentials = withCredentials;
        this.mimeType = mimeType;
        this.payloadType = payloadType;
        this.responseType = responseType;
        this.tags = tags;
        this.extras = extras;
    }
    return ApiEndpointOverride;
}());

exports.ApiEndpointOverride = ApiEndpointOverride;

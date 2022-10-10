/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { HttpMethod, UrlParameterType } from './constants.js';

var AbstractRequestBuilder = /** @class */ (function () {
    function AbstractRequestBuilder() {
    }
    /**
     * Set the method to GET (the default value).
     */
    AbstractRequestBuilder.prototype.get = function () {
        this._method = HttpMethod.GET;
        return this;
    };
    /**
     * Set the method to POST.
     */
    AbstractRequestBuilder.prototype.post = function () {
        this._method = HttpMethod.POST;
        return this;
    };
    /**
     * Set the method to PUT.
     */
    AbstractRequestBuilder.prototype.put = function () {
        this._method = HttpMethod.PUT;
        return this;
    };
    /**
     * Set the method to DELETE.
     */
    AbstractRequestBuilder.prototype.delete = function () {
        this._method = HttpMethod.DELETE;
        return this;
    };
    /**
     * Set the HTTP method to use.
     */
    AbstractRequestBuilder.prototype.method = function (method) {
        this._method = method;
        return this;
    };
    /**
     * Set the url to call.
     */
    AbstractRequestBuilder.prototype.url = function (url) {
        this._url = url;
        return this;
    };
    /**
     * Add multiple url parameters.
     */
    AbstractRequestBuilder.prototype.params = function (params, type) {
        if (type === void 0) { type = UrlParameterType.Auto; }
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            this.param(name_1, params[name_1], type);
        }
        return this;
    };
    /**
     * Add a url parameter.
     */
    AbstractRequestBuilder.prototype.param = function (name, value, type) {
        if (type === void 0) { type = UrlParameterType.Auto; }
        if (isUndefined(this._params)) {
            this._params = {};
        }
        this._params[name] = { type: type, value: String(value) };
        return this;
    };
    /**
     * Remove all url parameters.
     */
    AbstractRequestBuilder.prototype.clearParams = function () {
        this._params = {};
        return this;
    };
    /**
     * Merge multiple headers with the ones already set.
     */
    AbstractRequestBuilder.prototype.headers = function (headers) {
        if (isUndefined(this._headers)) {
            this._headers = {};
        }
        Object.assign(this._headers, headers);
        return this;
    };
    /**
     * Set a header.
     */
    AbstractRequestBuilder.prototype.header = function (name, value) {
        if (isUndefined(this._headers)) {
            this._headers = {};
        }
        this._headers[name] = value;
        return this;
    };
    /**
     * Remove all headers.
     */
    AbstractRequestBuilder.prototype.clearHeaders = function () {
        this._headers = {};
        return this;
    };
    /**
     * Set a generic body for the request.
     */
    AbstractRequestBuilder.prototype.payload = function (payload, type) {
        this._payload = !isUndefined(payload) ? payload : null;
        if (!isUndefined(type)) {
            this._payloadType = type;
        }
        return this;
    };
    /**
     * Set the expected format of the response.
     */
    AbstractRequestBuilder.prototype.responseType = function (type) {
        this._responseType = type;
        return this;
    };
    /**
     * Set the maximum number of time the request can be replayed in case of a network error.
     */
    AbstractRequestBuilder.prototype.retry = function (count) {
        this._retry = count;
        return this;
    };
    /**
     * Time to wait (in ms) between each try.
     * If set to 'auto', an exponential backoff retry strategy is used.
     */
    AbstractRequestBuilder.prototype.retryDelay = function (delay) {
        this._retryDelay = delay;
        return this;
    };
    /**
     * The higher priority requests are executed first.
     */
    AbstractRequestBuilder.prototype.priority = function (priority) {
        this._priority = priority;
        return this;
    };
    /**
     * Set the maximum time the request can take.
     */
    AbstractRequestBuilder.prototype.timeout = function (timeout) {
        this._timeout = timeout;
        return this;
    };
    /**
     * If true, cookies and auth headers are included in the request.
     */
    AbstractRequestBuilder.prototype.withCredentials = function (value) {
        this._withCredentials = value;
        return this;
    };
    /**
     * Set the mime type of the payload.
     */
    AbstractRequestBuilder.prototype.mimeType = function (mimeType) {
        this._mimeType = mimeType;
        return this;
    };
    /**
     * Add multiple tags to the request.
     */
    AbstractRequestBuilder.prototype.tags = function (tags) {
        if (!isArray(this._tags)) {
            this._tags = [];
        }
        this._tags = this._tags.concat(tags);
        return this;
    };
    /**
     * Add a tag to the request.
     */
    AbstractRequestBuilder.prototype.tag = function (tag) {
        if (!isArray(this._tags)) {
            this._tags = [];
        }
        this._tags.push(tag);
        return this;
    };
    /**
     * Remove all tags.
     */
    AbstractRequestBuilder.prototype.clearTags = function () {
        this._tags = [];
        return this;
    };
    /**
     * Merge an object of extra with the current one.
     */
    AbstractRequestBuilder.prototype.extras = function (extras) {
        if (isUndefined(this._extras)) {
            this._extras = {};
        }
        Object.assign(this._extras, extras);
        return this;
    };
    /**
     * Set an extra value that will not be used by the service but will still be accessible in the request.
     * You can use this to identify your request for example.
     */
    AbstractRequestBuilder.prototype.extra = function (name, value) {
        if (isUndefined(this._extras)) {
            this._extras = {};
        }
        this._extras[name] = value;
        return this;
    };
    /**
     * Remove all extras.
     */
    AbstractRequestBuilder.prototype.clearExtras = function () {
        this._extras = {};
        return this;
    };
    return AbstractRequestBuilder;
}());

export { AbstractRequestBuilder };

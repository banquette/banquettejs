/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { AbstractRequestBuilder } from './abstract-http-request.builder.js';
import { ResponseTypeAutoDetect } from './decoder/auto-detect.decoder.js';
import { PayloadTypeFormData } from './encoder/form-data.encoder.js';
import { HttpRequestFactory } from './http-request.factory.js';

var HttpRequestBuilder = /** @class */ (function (_super) {
    __extends(HttpRequestBuilder, _super);
    function HttpRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the resulting request.
     */
    HttpRequestBuilder.prototype.getRequest = function () {
        if (!this._url) {
            throw new UsageException('You must define an URL.');
        }
        return HttpRequestFactory.Create({
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType || PayloadTypeFormData,
            responseType: this._responseType || ResponseTypeAutoDetect,
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
}(AbstractRequestBuilder));

export { HttpRequestBuilder };

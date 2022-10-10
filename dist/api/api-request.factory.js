/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ApiRequest } from './api-request.js';

var ApiRequestFactory = /** @class */ (function () {
    function ApiRequestFactory() {
    }
    /**
     * Alternative way to create an ApiRequest object.
     */
    ApiRequestFactory.Create = function (config) {
        return new ApiRequest(config.model || null, config.endpoint || null, config.url || null, config.method, config.params, config.payload, config.payloadType, config.responseType, config.headers, config.timeout, config.retry, config.retryDelay, config.priority, config.withCredentials, config.mimeType, config.tags, config.extras);
    };
    return ApiRequestFactory;
}());

export { ApiRequestFactory };

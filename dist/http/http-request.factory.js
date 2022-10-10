/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { isValidNumber } from '@banquette/utils-type/is-valid-number';
import { UrlParameterType, HttpMethod } from './constants.js';
import { ResponseTypeAutoDetect } from './decoder/auto-detect.decoder.js';
import { PayloadTypeFormData } from './encoder/form-data.encoder.js';
import { HttpRequest } from './http-request.js';

var HttpRequestFactory = /** @class */ (function () {
    function HttpRequestFactory() {
    }
    /**
     * Alternative way to create an HttpRequest object.
     */
    HttpRequestFactory.Create = function (input) {
        var params = input.params || {};
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            params[key] = !isObject(params[key]) ? { type: UrlParameterType.Auto, value: String(params[key]) } : params[key];
        }
        return new HttpRequest(input.method || HttpMethod.GET, input.url, params, !isUndefined(input.payload) ? input.payload : null, input.payloadType || PayloadTypeFormData, input.responseType || ResponseTypeAutoDetect, input.headers || {}, !isUndefined(input.timeout) ? input.timeout : null, !isUndefined(input.retry) ? input.retry : null, !isUndefined(input.retryDelay) ? input.retryDelay : null, isValidNumber(input.priority) ? input.priority : 0, input.withCredentials || false, input.mimeType || null, ensureArray(input.tags || []), input.extras || {});
    };
    return HttpRequestFactory;
}());

export { HttpRequestFactory };

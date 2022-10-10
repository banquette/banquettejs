/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var isValidNumber = require('@banquette/utils-type/_cjs/dev/is-valid-number');
var constants = require('./constants.js');
var autoDetect_decoder = require('./decoder/auto-detect.decoder.js');
var formData_encoder = require('./encoder/form-data.encoder.js');
var httpRequest = require('./http-request.js');

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
            params[key] = !isObject.isObject(params[key]) ? { type: constants.UrlParameterType.Auto, value: String(params[key]) } : params[key];
        }
        return new httpRequest.HttpRequest(input.method || constants.HttpMethod.GET, input.url, params, !isUndefined.isUndefined(input.payload) ? input.payload : null, input.payloadType || formData_encoder.PayloadTypeFormData, input.responseType || autoDetect_decoder.ResponseTypeAutoDetect, input.headers || {}, !isUndefined.isUndefined(input.timeout) ? input.timeout : null, !isUndefined.isUndefined(input.retry) ? input.retry : null, !isUndefined.isUndefined(input.retryDelay) ? input.retryDelay : null, isValidNumber.isValidNumber(input.priority) ? input.priority : 0, input.withCredentials || false, input.mimeType || null, ensureArray.ensureArray(input.tags || []), input.extras || {});
    };
    return HttpRequestFactory;
}());

exports.HttpRequestFactory = HttpRequestFactory;

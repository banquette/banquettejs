/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slugify = require('@banquette/utils-string/_cjs/dev/format/slugify');

/**
 * Holds the response of an adapter.
 *
 * Adapters don't return an HttpResponse as it's the responsibility of the HttpService to handle it.
 * The AdapterResponse is more basic and only account for information directly related to the Http communication.
 */
var AdapterResponse = /** @class */ (function () {
    function AdapterResponse(status, url, response, responseType, headers) {
        this.status = status;
        this.url = url;
        this.response = response;
        this.responseType = responseType;
        this.headers = headers;
        this.headers = this.normalizeHeaders(headers);
    }
    /**
     * Create a new object where the headers' names are slugified.
     * For example: "Content-Type" will become "content-type".
     */
    AdapterResponse.prototype.normalizeHeaders = function (headers) {
        var normalized = {};
        for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            normalized[slugify.slugify(name_1)] = headers[name_1];
        }
        return normalized;
    };
    return AdapterResponse;
}());

exports.AdapterResponse = AdapterResponse;

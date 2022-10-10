/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { HttpStatus } from './constants.js';

/**
 * Build the query parameters string for an url.
 *
 * For example:
 *   buildQueryParameters({
 *       param1: 'http://example.org/?a=12&b=55',
 *       param2: 99
 *   })
 *
 * will output:
 * ?param1=http%3A%2F%2Fexample.org%2F%Ffa%3D12%26b%3D55&param2=99
 */
function buildQueryParameters(obj) {
    var queryParametersArray = [];
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        queryParametersArray.push(key + '=' + encodeURIComponent(obj[key]));
    }
    if (queryParametersArray.length > 0) {
        return '?' + queryParametersArray.join('&');
    }
    return '';
}
/**
 * Construct a query parameter string from an key/value pair object and append it the an existing url.
 */
function appendQueryParameters(url, params) {
    var queryString = buildQueryParameters(params);
    var pos = url.indexOf('?');
    if (pos >= 0) {
        return url + '&' + queryString.substring(1);
    }
    return url + queryString;
}
/**
 * Convert an integer HTTP status code into a string.
 */
function httpStatusToText(status) {
    if (isUndefined(HttpStatus[status])) {
        return 'Unknown';
    }
    return HttpStatus[status];
}

export { appendQueryParameters, buildQueryParameters, httpStatusToText };

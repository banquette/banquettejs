import { isUndefined } from "@banquette/core";
import { HttpStatus } from "./constants";

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
export function buildQueryParameters(obj: Record<string, string|number>): string {
    const queryParametersArray = [];
    for (const key of Object.keys(obj)) {
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
export function appendQueryParameters(url: string, params: Record<string, string|number>): string {
    const queryString = buildQueryParameters(params);
    const pos: number = url.indexOf('?');
    if (pos >= 0) {
        return url + '&' + queryString.substring(1);
    }
    return url + queryString;
}

/**
 * Convert an integer HTTP status code into a string.
 */
export function httpStatusToText(status: number): string {
    if (isUndefined(HttpStatus[status])) {
        return 'Unknown';
    }
    return HttpStatus[status];
}

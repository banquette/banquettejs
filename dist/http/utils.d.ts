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
export declare function buildQueryParameters(obj: Record<string, string | number>): string;
/**
 * Construct a query parameter string from an key/value pair object and append it the an existing url.
 */
export declare function appendQueryParameters(url: string, params: Record<string, string | number>): string;
/**
 * Convert an integer HTTP status code into a string.
 */
export declare function httpStatusToText(status: number): string;

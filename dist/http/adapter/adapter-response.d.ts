/**
 * Holds the response of an adapter.
 *
 * Adapters don't return an HttpResponse as it's the responsibility of the HttpService to handle it.
 * The AdapterResponse is more basic and only account for information directly related to the Http communication.
 */
export declare class AdapterResponse {
    readonly status: number;
    readonly url: string | null;
    response: any;
    readonly responseType: XMLHttpRequestResponseType | null;
    readonly headers: Record<string, string>;
    constructor(status: number, url: string | null, response: any, responseType: XMLHttpRequestResponseType | null, headers: Record<string, string>);
    /**
     * Create a new object where the headers' names are slugified.
     * For example: "Content-Type" will become "content-type".
     */
    private normalizeHeaders;
}

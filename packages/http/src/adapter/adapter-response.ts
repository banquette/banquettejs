import { slugify } from "@banquette/utils-string/format/slugify";

/**
 * Holds the response of an adapter.
 *
 * Adapters don't return an HttpResponse as it's the responsibility of the HttpService to handle it.
 * The AdapterResponse is more basic and holy account for information directly related to the Http communication.
 */
export class AdapterResponse {
    public constructor(public readonly status: number,
                       public readonly url: string|null,
                       public response: any,
                       public readonly responseType: XMLHttpRequestResponseType|null,
                       public readonly headers: Record<string, string>) {
        (this as any).headers = this.normalizeHeaders(headers);
    }

    /**
     * Create a new object where the headers' names are slugified.
     * For example: "Content-Type" will become "content-type".
     */
    private normalizeHeaders(headers: Record<string, string>): Record<string, string> {
        const normalized: Record<string, string> = {};
        for (const name of Object.keys(headers)) {
            normalized[slugify(name)] = headers[name];
        }
        return normalized;
    }
}

import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { HttpMethod, UrlParameterType } from "./constants";
import { UrlParameterInterface } from "./url-parameter.interface";
export declare abstract class AbstractRequestBuilder<ResultType> {
    protected _method?: StringEnum<HttpMethod>;
    protected _url?: string | null;
    protected _payload?: any;
    protected _payloadType?: symbol;
    protected _responseType?: symbol;
    protected _headers?: Record<string, Primitive>;
    protected _timeout?: number | null;
    protected _withCredentials?: boolean;
    protected _mimeType?: string | null;
    protected _retry?: number | null;
    protected _retryDelay?: number | 'auto' | null;
    protected _priority?: number;
    protected _params?: Record<string, UrlParameterInterface>;
    protected _tags?: symbol[];
    protected _extras?: Record<string, any>;
    /**
     * Set the method to GET (the default value).
     */
    get(): this;
    /**
     * Set the method to POST.
     */
    post(): this;
    /**
     * Set the method to PUT.
     */
    put(): this;
    /**
     * Set the method to DELETE.
     */
    delete(): this;
    /**
     * Set the HTTP method to use.
     */
    method(method: StringEnum<HttpMethod>): this;
    /**
     * Set the url to call.
     */
    url(url: string | null): this;
    /**
     * Add multiple url parameters.
     */
    params(params: Record<string, Primitive>, type?: UrlParameterType): this;
    /**
     * Add a url parameter.
     */
    param(name: string, value: Primitive, type?: UrlParameterType): this;
    /**
     * Remove all url parameters.
     */
    clearParams(): this;
    /**
     * Merge multiple headers with the ones already set.
     */
    headers(headers: Record<string, Primitive>): this;
    /**
     * Set a header.
     */
    header(name: string, value: Primitive): this;
    /**
     * Remove all headers.
     */
    clearHeaders(): this;
    /**
     * Set a generic body for the request.
     */
    payload(payload: any, type?: symbol): this;
    /**
     * Set the expected format of the response.
     */
    responseType(type?: symbol): this;
    /**
     * Set the maximum number of time the request can be replayed in case of a network error.
     */
    retry(count: number | null): this;
    /**
     * Time to wait (in ms) between each try.
     * If set to 'auto', an exponential backoff retry strategy is used.
     */
    retryDelay(delay: number | 'auto' | null): this;
    /**
     * The higher priority requests are executed first.
     */
    priority(priority: number): this;
    /**
     * Set the maximum time the request can take.
     */
    timeout(timeout: number | null): this;
    /**
     * If true, cookies and auth headers are included in the request.
     */
    withCredentials(value: boolean): this;
    /**
     * Set the mime type of the payload.
     */
    mimeType(mimeType: string | null): this;
    /**
     * Add multiple tags to the request.
     */
    tags(tags: symbol[]): this;
    /**
     * Add a tag to the request.
     */
    tag(tag: symbol): this;
    /**
     * Remove all tags.
     */
    clearTags(): this;
    /**
     * Merge an object of extra with the current one.
     */
    extras(extras: Record<string, any>): this;
    /**
     * Set an extra value that will not be used by the service but will still be accessible in the request.
     * You can use this to identify your request for example.
     */
    extra(name: string, value: string): this;
    /**
     * Remove all extras.
     */
    clearExtras(): this;
    /**
     * Get the resulting request.
     */
    abstract getRequest(): ResultType;
}

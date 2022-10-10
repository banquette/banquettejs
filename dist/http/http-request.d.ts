import { Primitive, VoidCallback, StringEnum } from "@banquette/utils-type/types";
import { AdapterInterface } from "./adapter/adapter.interface";
import { HttpMethod, UrlParameterType } from "./constants";
import { HeadersBag } from "./headers-bag";
import { HttpResponse } from "./http-response";
import { UrlParameterInterface } from "./url-parameter.interface";
export declare class HttpRequest {
    method: StringEnum<HttpMethod>;
    url: string;
    params: Record<string, UrlParameterInterface>;
    payload: any;
    payloadType: symbol;
    responseType: symbol;
    timeout: number | null;
    retry: number | null;
    retryDelay: number | 'auto' | null;
    priority: number;
    withCredentials: boolean;
    mimeType: string | null;
    tags: symbol[];
    extras: Record<string, any>;
    private static MaxId;
    /**
     * Unique id of the response.
     */
    readonly id: number;
    /**
     * The adapter in use to make the actual HTTP call.
     */
    readonly adapter: AdapterInterface;
    /**
     * The response of the request.
     */
    readonly response: HttpResponse<any>;
    /**
     * Number of times the request tried to execute.
     */
    readonly tryCount: number;
    /**
     * Headers to send with the request.
     */
    readonly headers: HeadersBag;
    /**
     * The static url is the finalize version of the url, including all parameters.
     * This is the url ready to be used.
     */
    get staticUrl(): string;
    /**
     * Track if the request has been canceled BEFORE the adapter is set.
     */
    private canceled;
    private cancelCallback;
    /**
     * Create a Request object.
     *
     * @param method            HTTP method.
     * @param url               Base url.
     * @param params            Url parameters.
     * @param payload           Body of the request.
     * @param payloadType       Format of the payload.
     * @param responseType      Format of the response.
     * @param headers           Headers to send with the request.
     * @param timeout           Maximum duration of the request (in milliseconds).
     * @param retry             Maximum number of tries allowed for the request.
     * @param retryDelay        Time to wait before trying again in case of error.
     * @param priority          The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     * @param withCredentials   If true, cookies and auth headers are included in the request.
     * @param mimeType          MimeType of the payload.
     * @param tags              Tags that will be sent with emitted events.
     * @param extras            Any additional data you want to associated with the request.
     *                          This object will not be sent with the request.
     */
    constructor(method: StringEnum<HttpMethod>, url: string, params: Record<string, UrlParameterInterface>, payload: any, payloadType: symbol, responseType: symbol, headers: HeadersBag | Record<string, Primitive>, timeout: number | null, retry: number | null, retryDelay: number | 'auto' | null, priority: number, withCredentials: boolean, mimeType: string | null, tags: symbol[], extras: Record<string, any>);
    incrementTryCount(): void;
    /**
     * Set the adapter in use for this request.
     */
    setAdapter(adapter: AdapterInterface): void;
    /**
     * Set the response object for this request.
     */
    setResponse(response: HttpResponse<any>): void;
    /**
     * Set an url parameter.
     */
    setParam(name: string, value: Primitive, type?: UrlParameterType): void;
    /**
     * A callback that is called when the request is canceled.
     */
    setCancelCallback(callback: VoidCallback): void;
    /**
     * Cancel the request.
     */
    cancel(): void;
    /**
     * Create a new HttpRequest object with the same parameters as the current one,
     * ready to be sent to the HttpService.
     *
     * This is useful if you want to make the same request again, as you cannot use the same HttpRequest object.
     */
    clone(): HttpRequest;
    /**
     * Extract variables names from a url.
     */
    private extractUrlVariables;
    /**
     * Get the configuration.
     * Not injected in the constructor to keep the creation of endpoints out of the injector.
     */
    private static GetConfiguration;
}

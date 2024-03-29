import { HttpMethod, HeadersBag, UrlParameterInterface } from "@banquette/http";
import { ModelExtendedIdentifier, ModelBidirectionalExtendedIdentifier } from "@banquette/model";
import { isUndefined, Primitive, StringEnum } from "@banquette/utils-type";
import { ApiEndpointOverride } from "./api-endpoint-override";

let MaxId: number = 0;

export class ApiRequest {
    /**
     * Unique identifier of the request.
     */
    public readonly id: number = ++MaxId;

    /**
     * Create a ApiRequest object.
     *
     * @param model             A model identifier or a couple of identifiers to separate the request from the response.
     * @param endpoint          The name of an ApiEndpoint.
     * @param url               Raw url to use instead of an endpoint.
     * @param method            Http method.
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
     * @param extras            Any additional data you want to associate with the request.
     *                          This object will not be sent with the request.
     * @param cacheInMemory     If `true`, and if the request is a GET request, it will only be called once.
     *                          If a subsequent request is made to the exact same url, the cache version will be used.
     *                          The response is only stored in memory, no persistence.
     */
    public constructor(public model: ModelExtendedIdentifier|ModelBidirectionalExtendedIdentifier|null,
                       public endpoint: string|null,
                       public url: string|null,
                       public method?: StringEnum<HttpMethod>,
                       public params?: Record<string, UrlParameterInterface>,
                       public payload?: any,
                       public payloadType?: symbol,
                       public responseType?: symbol,
                       public headers?: HeadersBag|Record<string, Primitive>,
                       public timeout?: number|null,
                       public retry?: number|null,
                       public retryDelay?: number|'auto'|null,
                       public priority?: number,
                       public withCredentials?: boolean,
                       public mimeType?: string|null,
                       public tags?: symbol|symbol[],
                       public extras?: Record<string, any>,
                       public cacheInMemory?: boolean) {
    }

    /**
     * Export overridable endpoints' parameters.
     */
    public toEndpointOverride(): ApiEndpointOverride {
        return new ApiEndpointOverride(
            this.method,
            this.paramsToPrimitives(),
            this.headers,
            this.timeout,
            this.retry,
            this.retryDelay,
            this.priority,
            this.withCredentials,
            this.mimeType,
            this.payloadType,
            this.responseType,
            this.tags,
            this.extras,
            this.cacheInMemory
        );
    }

    /**
     * Convert back the processed parameters into their original map of primitive values.
     */
    private paramsToPrimitives(): Record<string, Primitive> {
        const params: Record<string, Primitive> = {};
        if (!isUndefined(this.params)) {
            for (const key of Object.keys(this.params)) {
                params[key] = this.params[key].value;
            }
        }
        return params;
    }
}

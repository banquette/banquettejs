import { HttpMethod, HeadersBag } from "@banquette/http";
import { Primitive, StringEnum } from "@banquette/utils-type";

/**
 * Allow to override part of the configuration of an endpoint, on use.
 */
export class ApiEndpointOverride {
    /**
     * Create a ApiEndpointOverride object.
     *
     * @param method            Http method.
     * @param params            Url parameters.
     * @param headers           Headers to send with the request.
     * @param timeout           Maximum duration of the request (in milliseconds).
     * @param retry             Maximum number of tries allowed for the request.
     * @param retryDelay        Time to wait before trying again in case of error.
     * @param priority          The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     * @param withCredentials   If true, cookies and auth headers are included in the request.
     * @param mimeType          MimeType of the payload.
     * @param payloadType       Format of the payload.
     * @param responseType      Format of the response.
     * @param mimeType          MimeType of the payload.
     * @param tags              Tags that will be sent with emitted events.
     * @param extras            Any additional data you want to associate with the request.
     *                          This object will not be sent with the request.
     * @param cacheInMemory     If `true`, and if the request is a GET request, it will only be called once.
     *                          If a subsequent request is made to the exact same url, the cache version will be used.
     *                          The response is only stored in memory, no persistence.
     */
    public constructor(public method?: StringEnum<HttpMethod>,
                       public params?: Record<string, Primitive>,
                       public headers?: HeadersBag|Record<string, Primitive>,
                       public timeout?: number|null,
                       public retry?: number|null,
                       public retryDelay?: number|'auto'|null,
                       public priority?: number,
                       public withCredentials?: boolean,
                       public mimeType?: string|null,
                       public payloadType?: symbol,
                       public responseType?: symbol,
                       public tags?: symbol|symbol[],
                       public extras?: Record<string, any>,
                       public cacheInMemory?: boolean) {

    }
}

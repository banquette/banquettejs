import { HttpMethod } from "@banquette/http/constants";
import { HeadersBag } from "@banquette/http/headers-bag";
import { Primitive, StringEnum } from "@banquette/utils-type/types";
/**
 * Allow to override part of the configuration of an endpoint, on use.
 */
export declare class ApiEndpointOverride {
    method?: StringEnum<HttpMethod> | undefined;
    params?: Record<string, Primitive> | undefined;
    headers?: Record<string, Primitive> | HeadersBag | undefined;
    timeout?: number | null | undefined;
    retry?: number | null | undefined;
    retryDelay?: number | "auto" | null | undefined;
    priority?: number | undefined;
    withCredentials?: boolean | undefined;
    mimeType?: string | null | undefined;
    payloadType?: symbol | undefined;
    responseType?: symbol | undefined;
    tags?: symbol | symbol[] | undefined;
    extras?: Record<string, any> | undefined;
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
     * @param extras            Any additional data you want to associated with the request.
     *                          This object will not be sent with the request.
     */
    constructor(method?: StringEnum<HttpMethod> | undefined, params?: Record<string, Primitive> | undefined, headers?: Record<string, Primitive> | HeadersBag | undefined, timeout?: number | null | undefined, retry?: number | null | undefined, retryDelay?: number | "auto" | null | undefined, priority?: number | undefined, withCredentials?: boolean | undefined, mimeType?: string | null | undefined, payloadType?: symbol | undefined, responseType?: symbol | undefined, tags?: symbol | symbol[] | undefined, extras?: Record<string, any> | undefined);
}

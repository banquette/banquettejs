import { HttpMethod } from "@banquette/http/constants";
import { HeadersBag } from "@banquette/http/headers-bag";
import { UrlParameterInterface } from "@banquette/http/url-parameter.interface";
import { ModelExtendedIdentifier, ModelBidirectionalExtendedIdentifier } from "@banquette/model/type";
import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { ApiEndpointOverride } from "./api-endpoint-override";
export declare class ApiRequest {
    model: ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier | null;
    endpoint: string | null;
    url: string | null;
    method?: StringEnum<HttpMethod> | undefined;
    params?: Record<string, UrlParameterInterface> | undefined;
    payload?: any;
    payloadType?: symbol | undefined;
    responseType?: symbol | undefined;
    headers?: HeadersBag | Record<string, Primitive> | undefined;
    timeout?: number | null | undefined;
    retry?: number | null | undefined;
    retryDelay?: number | "auto" | null | undefined;
    priority?: number | undefined;
    withCredentials?: boolean | undefined;
    mimeType?: string | null | undefined;
    tags?: symbol | symbol[] | undefined;
    extras?: Record<string, any> | undefined;
    private static MaxId;
    /**
     * Unique identifier of the request.
     */
    readonly id: number;
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
     */
    constructor(model: ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier | null, endpoint: string | null, url: string | null, method?: StringEnum<HttpMethod> | undefined, params?: Record<string, UrlParameterInterface> | undefined, payload?: any, payloadType?: symbol | undefined, responseType?: symbol | undefined, headers?: HeadersBag | Record<string, Primitive> | undefined, timeout?: number | null | undefined, retry?: number | null | undefined, retryDelay?: number | "auto" | null | undefined, priority?: number | undefined, withCredentials?: boolean | undefined, mimeType?: string | null | undefined, tags?: symbol | symbol[] | undefined, extras?: Record<string, any> | undefined);
    /**
     * Export overridable endpoints' parameters.
     */
    toEndpointOverride(): ApiEndpointOverride;
    /**
     * Convert back the processed parameters into their original map of primitive values.
     */
    private paramsToPrimitives;
}

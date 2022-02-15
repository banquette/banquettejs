import { HttpMethod } from "@banquette/http/constants";
import { HeadersBag } from "@banquette/http/headers-bag";
import { UrlParameterInterface } from "@banquette/http/url-parameter.interface";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive } from "@banquette/utils-type/types";
import { ApiEndpointOverride } from "./api-endpoint-override";

export class ApiRequest {
    private static MaxId: number = 0;

    /**
     * Unique identifier of the request.
     */
    public readonly id: number = ++ApiRequest.MaxId;

    /**
     * Create a ApiRequest object.
     *
     * @param model             A model identifier.
     * @param endpoint          The name of an ApiEndpoint.
     * @param url               Raw url to use instead of a endpoint.
     * @param method            Http method.
     * @param params            Url parameters.
     * @param payload           Body of the request.
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
    public constructor(public model: ModelExtendedIdentifier|null,
                       public endpoint: string|null,
                       public url: string|null,
                       public method?: HttpMethod,
                       public params?: Record<string, UrlParameterInterface>,
                       public payload?: any,
                       public headers?: HeadersBag|Record<string, Primitive>,
                       public timeout?: number|null,
                       public retry?: number|null,
                       public retryDelay?: number|'auto'|null,
                       public priority?: number,
                       public withCredentials?: boolean,
                       public mimeType?: string|null,
                       public tags?: symbol|symbol[],
                       public extras?: Record<string, any>) {
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
            this.tags,
            this.extras
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

import { HttpMethod } from "@banquette/http/constants";
import { UrlParameterInterface } from "@banquette/http/url-parameter.interface";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { ApiRequest } from "./api-request";

export interface ApiRequestConfig {
    model?: ModelExtendedIdentifier|null;
    endpoint?: string|null;
    url?: string|null;
    method?: HttpMethod;
    params?: Record<string, UrlParameterInterface>;
    payload?: any;
    payloadType?: symbol;
    responseType?: symbol;
    headers?: any;
    timeout?: number|null;
    retry?: number|null;
    retryDelay?: number|'auto'|null;
    priority?: number;
    withCredentials?: boolean;
    mimeType?: string|null;
    tags?: symbol|symbol[];
    extras?: any
}

export class ApiRequestFactory {
    /**
     * Alternative way to create an ApiRequest object.
     */
    public static Create(config: ApiRequestConfig): ApiRequest {
        return new ApiRequest(
            config.model || null,
            config.endpoint || null,
            config.url || null,
            config.method,
            config.params,
            config.payload,
            config.payloadType,
            config.responseType,
            config.headers,
            config.timeout,
            config.retry,
            config.retryDelay,
            config.priority,
            config.withCredentials,
            config.mimeType,
            config.tags,
            config.extras
        );
    }
}

import { HttpMethod } from "@banquette/http/constants";
import { UrlParameterInterface } from "@banquette/http/url-parameter.interface";
import { ModelExtendedIdentifier, ModelBidirectionalExtendedIdentifier } from "@banquette/model/type";
import { StringEnum } from "@banquette/utils-type/types";
import { ApiRequest } from "./api-request";
export interface ApiRequestConfig {
    model?: ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier | null;
    endpoint?: string | null;
    url?: string | null;
    method?: StringEnum<HttpMethod>;
    params?: Record<string, UrlParameterInterface>;
    payload?: any;
    payloadType?: symbol;
    responseType?: symbol;
    headers?: any;
    timeout?: number | null;
    retry?: number | null;
    retryDelay?: number | 'auto' | null;
    priority?: number;
    withCredentials?: boolean;
    mimeType?: string | null;
    tags?: symbol | symbol[];
    extras?: any;
}
export declare class ApiRequestFactory {
    /**
     * Alternative way to create an ApiRequest object.
     */
    static Create(config: ApiRequestConfig): ApiRequest;
}

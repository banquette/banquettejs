import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { HttpMethod } from "./constants";
import { HttpRequest } from "./http-request";
import { UrlParameterInterface } from "./url-parameter.interface";
export interface HttpRequestFactoryConfig {
    method?: StringEnum<HttpMethod>;
    url: string;
    params?: Record<string, UrlParameterInterface | Primitive>;
    payload?: any;
    payloadType?: symbol;
    responseType?: symbol;
    headers?: any;
    timeout?: number | null;
    retry?: number | null;
    retryDelay?: number | 'auto' | null;
    priority?: number | null;
    withCredentials?: boolean | null;
    mimeType?: string | null;
    tags?: symbol | symbol[] | null;
    extras?: any;
}
export declare class HttpRequestFactory {
    /**
     * Alternative way to create an HttpRequest object.
     */
    static Create(input: HttpRequestFactoryConfig): HttpRequest;
}

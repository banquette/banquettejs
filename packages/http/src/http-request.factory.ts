import { isUndefined, isValidNumber } from "@banquette/utils-type";
import { HttpMethod } from "./constants";
import { ResponseTypeAutoDetect } from "./decoder/auto-detect.decoder";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";
import { UrlParameterInterface } from "./url-parameter.interface";

export interface HttpRequestFactoryConfig {
    method?: HttpMethod,
    url: string,
    params?: Record<string, UrlParameterInterface>,
    payload?: any,
    payloadType?: symbol,
    responseType?: symbol,
    headers?: any,
    timeout?: number|null,
    retry?: number|null,
    retryDelay?: number|'auto'|null,
    priority?: number|null,
    withCredentials?: boolean|null,
    mimeType?: string|null,
    extras?: any
}

export class HttpRequestFactory {
    /**
     * Alternative way to create an HttpRequest object.
     */
    public static Create(input: HttpRequestFactoryConfig): HttpRequest {
        return new HttpRequest(
            input.method || HttpMethod.GET,
            input.url,
            input.params || {},
            !isUndefined(input.payload) ? input.payload : null,
            input.payloadType || PayloadTypeFormData,
            input.responseType || ResponseTypeAutoDetect,
            input.headers || {},
            !isUndefined(input.timeout) ? input.timeout : null,
            !isUndefined(input.retry) ? input.retry : null,
            !isUndefined(input.retryDelay) ? input.retryDelay : null,
            isValidNumber(input.priority) ? input.priority : 0,
            input.withCredentials || false,
            input.mimeType || null,
            input.extras || {}
        );
    }
}

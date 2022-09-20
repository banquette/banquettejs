import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { isValidNumber } from "@banquette/utils-type/is-valid-number";
import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { HttpMethod, UrlParameterType } from "./constants";
import { ResponseTypeAutoDetect } from "./decoder/auto-detect.decoder";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";
import { UrlParameterInterface } from "./url-parameter.interface";

export interface HttpRequestFactoryConfig {
    method?: StringEnum<HttpMethod>;
    url: string;
    params?: Record<string, UrlParameterInterface|Primitive>;
    payload?: any;
    payloadType?: symbol;
    responseType?: symbol;
    headers?: any;
    timeout?: number|null;
    retry?: number|null;
    retryDelay?: number|'auto'|null;
    priority?: number|null;
    withCredentials?: boolean|null;
    mimeType?: string|null;
    tags?: symbol|symbol[]|null;
    extras?: any;
}

export class HttpRequestFactory {
    /**
     * Alternative way to create an HttpRequest object.
     */
    public static Create(input: HttpRequestFactoryConfig): HttpRequest {
        const params = input.params || {};
        for (const key of Object.keys(params)) {
            params[key] = !isObject(params[key]) ? {type: UrlParameterType.Auto, value: String(params[key])} : params[key];
        }
        return new HttpRequest(
            input.method || HttpMethod.GET,
            input.url,
            params as Record<string, UrlParameterInterface>,
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
            ensureArray(input.tags || []),
            input.extras || {}
        );
    }
}

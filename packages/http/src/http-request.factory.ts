import { isUndefined } from "@banquette/utils";
import { HttpMethod, ResponseTypeAutoDetect } from "./constants";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";

export class HttpRequestFactory {
    /**
     * Alternative way to create an HttpRequest object.
     */
    public static Create(input: {
        method?: HttpMethod,
        url: string,
        payload?: any,
        payloadType?: symbol,
        responseType?: symbol,
        headers?: any,
        timeout?: number,
        mimeType?: string|null,
        extras?: any
    }): HttpRequest {
        return new HttpRequest(
            input.method || HttpMethod.GET,
            input.url,
            !isUndefined(input.payload) ? input.payload : null,
            input.payloadType || PayloadTypeFormData,
            input.responseType || ResponseTypeAutoDetect,
            input.headers || {},
            !isUndefined(input.timeout) ? input.timeout : 30000,
            input.mimeType || null,
            input.extras || {}
        );
    }
}

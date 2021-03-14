import { isUndefined } from "@banquette/utils";
import { HttpMethod, ResponseTypeAutoDetect } from "./constants";
import { PayloadTypeJson } from "./encoder/json.encoder";
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
        extras?: any
    }): HttpRequest {
        return new HttpRequest(
            input.method || HttpMethod.GET,
            input.url,
            !isUndefined(input.payload) ? input.payload : null,
            input.payloadType || PayloadTypeJson,
            input.responseType || ResponseTypeAutoDetect,
            input.headers || {},
            !isUndefined(input.timeout) ? input.timeout : 30000,
            input.extras || {}
        );
    }
}

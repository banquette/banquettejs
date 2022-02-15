import { UsageException } from "@banquette/exception/usage.exception";
import { AbstractRequestBuilder } from "./abstract-http-request.builder";
import { ResponseTypeAutoDetect } from "./decoder/auto-detect.decoder";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";
import { HttpRequestFactory } from "./http-request.factory";

export class HttpRequestBuilder extends AbstractRequestBuilder<HttpRequest> {
    /**
     * Get the resulting request.
     */
    public getRequest(): HttpRequest {
        if (!this._url) {
            throw new UsageException('You must define an URL.');
        }
        return HttpRequestFactory.Create({
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType || PayloadTypeFormData,
            responseType: this._responseType || ResponseTypeAutoDetect,
            headers: this._headers,
            timeout: this._timeout,
            retry: this._retry,
            retryDelay: this._retryDelay,
            priority: this._priority,
            withCredentials: this._withCredentials,
            mimeType: this._mimeType,
            tags: this._tags,
            extras: this._extras
        });
    }

    /**
     * Create a new instance of the builder.
     */
    public static Create(): HttpRequestBuilder {
        return new HttpRequestBuilder();
    }
}

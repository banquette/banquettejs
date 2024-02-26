import { AbstractRequestBuilder } from "@banquette/http";
import { ModelExtendedIdentifier, ModelBidirectionalExtendedIdentifier } from "@banquette/model";
import { ApiRequest } from "./api-request";
import { ApiRequestFactory } from "./api-request.factory";

export class ApiRequestBuilder extends AbstractRequestBuilder<ApiRequest> {
    private _endpoint: string|null = null;
    private _model: ModelExtendedIdentifier|ModelBidirectionalExtendedIdentifier|null = null;

    /**
     * Set the name of the endpoint.
     */
    public endpoint(name: string|null): ApiRequestBuilder {
        this._endpoint = name;
        return this;
    }

    /**
     * Set the model to use.
     */
    public model(identifier: ModelExtendedIdentifier|ModelBidirectionalExtendedIdentifier|null): ApiRequestBuilder {
        this._model = identifier;
        return this;
    }

    /**
     * Get the resulting request.
     */
    public getRequest(): ApiRequest {
        return ApiRequestFactory.Create({
            endpoint: this._endpoint,
            model: this._model,
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType,
            responseType: this._responseType,
            headers: this._headers,
            timeout: this._timeout,
            retry: this._retry,
            retryDelay: this._retryDelay,
            priority: this._priority || undefined,
            withCredentials: this._withCredentials || false,
            mimeType: this._mimeType,
            tags: this._tags,
            extras: this._extras,
            cacheInMemory: this._cacheInMemory
        });
    }

    /**
     * Create a new instance of the builder.
     */
    public static Create(): ApiRequestBuilder {
        return new ApiRequestBuilder();
    }
}

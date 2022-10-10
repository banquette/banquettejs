import { AbstractRequestBuilder } from "@banquette/http/abstract-http-request.builder";
import { ModelExtendedIdentifier, ModelBidirectionalExtendedIdentifier } from "@banquette/model/type";
import { ApiRequest } from "./api-request";
export declare class ApiRequestBuilder extends AbstractRequestBuilder<ApiRequest> {
    private _endpoint;
    private _model;
    /**
     * Set the name of the endpoint.
     */
    endpoint(name: string | null): ApiRequestBuilder;
    /**
     * Set the model to use.
     */
    model(identifier: ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier | null): ApiRequestBuilder;
    /**
     * Get the resulting request.
     */
    getRequest(): ApiRequest;
    /**
     * Create a new instance of the builder.
     */
    static Create(): ApiRequestBuilder;
}

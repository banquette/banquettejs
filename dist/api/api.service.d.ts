import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { HttpResponse } from "@banquette/http/http-response";
import { HttpService } from "@banquette/http/http.service";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { AnyModelOptional } from "@banquette/model/type";
import { Primitive } from "@banquette/utils-type/types";
import { ApiEndpointStorageService } from "./api-endpoint-storage.service";
import { ApiRequest } from "./api-request";
import { ApiRequestBuilder } from "./api-request.builder";
import './listener/request-model-transformer.listener';
import './listener/response-model-transformer.listener';
export declare class ApiService {
    private configuration;
    private eventDispatcher;
    private http;
    private modelMetadata;
    private endpointsStorage;
    /**
     * A map of endpoints generated for static url requests.
     */
    private generatedEndpoints;
    /**
     * A map joining HttpRequests to their ApiRequest of origin.
     */
    private knownRequests;
    constructor(configuration: ConfigurationService, eventDispatcher: EventDispatcherService, http: HttpService, modelMetadata: ModelMetadataService, endpointsStorage: ApiEndpointStorageService);
    /**
     * Create a request builder to assist the creation of complex requests.
     */
    build(): ApiRequestBuilder;
    /**
     * Shorthand for a basic GET request.
     * Use `ApiService::build()` for more complex requests.
     */
    get<T>(endpoint: string, model?: AnyModelOptional, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Shorthand for a basic POST request.
     * Use `ApiService::build()` for more complex requests.
     */
    post<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Shorthand for a basic PUT request.
     * Use `ApiService::build()` for more complex requests.
     */
    put<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Shorthand for a basic PATCH request.
     * Use `ApiService::build()` for more complex requests.
     */
    patch<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Shorthand for a basic DELETE request.
     * Use `ApiService::build()` for more complex requests.
     */
    delete<T>(endpoint: string, model?: AnyModelOptional, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Send an ApiRequest.
     */
    send<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    send<T>(request: ApiRequest): HttpResponse<T>;
    /**
     * HttpService's `BeforeRequest` event handler.
     */
    private onBeforeRequest;
    /**
     * HttpService's `BeforeResponse` event handler.
     */
    private onBeforeResponse;
    /**
     * HttpService's `RequestSuccess` event handler.
     */
    private onRequestSuccess;
    /**
     * HttpService's `RequestFailure` event handler.
     */
    private onRequestFailure;
    /**
     * Dispatch an event and wait for its resolution if necessary.
     */
    private dispatchEvent;
    /**
     * Call dispatchEvent and remove the ApiRequest from the known requests when done.
     */
    private dispatchEventAndDispose;
    /**
     * Try to get back an ApiRequest from an HttpRequest.
     */
    private httpToApiRequest;
}

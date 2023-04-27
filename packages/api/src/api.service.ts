import { ConfigurationService } from "@banquette/config";
import { Inject, Service } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { AdapterRequest, HttpMethod, HttpEvents, BeforeResponseEvent, RequestEvent, ResponseEvent, HttpRequest, HttpResponse, HttpService } from "@banquette/http";
import { ModelMetadataService, AnyModelOptional } from "@banquette/model";
import { proxy } from "@banquette/utils-misc";
import { getObjectValue } from "@banquette/utils-object";
import { isArray, isNullOrUndefined, isPromiseLike, isString, isUndefined, Primitive, Constructor } from "@banquette/utils-type";
import { ApiConfigurationInterface } from "./api-configuration.interface";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointStorageService } from "./api-endpoint-storage.service";
import { ApiRequest } from "./api-request";
import { ApiRequestBuilder } from "./api-request.builder";
import { ApiConfigurationSymbol } from "./config";
import { ApiTag, ApiEvents } from "./constant";
import { ApiBeforeResponseEvent } from "./event/api-before-response.event";
import { ApiRequestEvent } from "./event/api-request.event";
import { ApiResponseEvent } from "./event/api-response.event";

// Import built-in listeners
import { useBuiltInRequestModelTransformer } from "./listener/request-model-transformer.listener";
import { useBuiltInResponseModelTransformer } from "./listener/response-model-transformer.listener";

@Service()
export class ApiService {
    /**
     * A map of endpoints generated for static url requests.
     */
    private generatedEndpoints: Record<string, ApiEndpoint> = {};

    /**
     * A map joining HttpRequests to their ApiRequest of origin.
     */
    private knownRequests: Record<number, ApiRequest> = {};

    public constructor(@Inject(ConfigurationService) private configuration: ConfigurationService,
                       @Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService,
                       @Inject(HttpService) private http: HttpService,
                       @Inject(ModelMetadataService) private modelMetadata: ModelMetadataService,
                       @Inject(ApiEndpointStorageService) private endpointsStorage: ApiEndpointStorageService) {
        const config = this.configuration.get<ApiConfigurationInterface>(ApiConfigurationSymbol);
        this.eventDispatcher.subscribe(HttpEvents.BeforeRequest, proxy(this.onBeforeRequest, this), config.eventsPriorities.beforeRequest, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.BeforeResponse, proxy(this.onBeforeResponse, this), config.eventsPriorities.beforeResponse, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.RequestSuccess, proxy(this.onRequestSuccess, this), config.eventsPriorities.requestSuccess, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.RequestFailure, proxy(this.onRequestFailure, this), config.eventsPriorities.requestFailure, [ApiTag]);

        console.warn("#ApiService");
        useBuiltInRequestModelTransformer();
        useBuiltInResponseModelTransformer();
    }

    /**
     * Create a request builder to assist the creation of complex requests.
     */
    public build(): ApiRequestBuilder {
        return new ApiRequestBuilder();
    }

    /**
     * Shorthand for a basic GET request.
     * Use `ApiService::build()` for more complex requests.
     */
    public get<T>(endpoint: string, model?: AnyModelOptional, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.GET)
            .endpoint(endpoint)
            .model(model || null)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Shorthand for a basic POST request.
     * Use `ApiService::build()` for more complex requests.
     */
    public post<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.POST)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Shorthand for a basic PUT request.
     * Use `ApiService::build()` for more complex requests.
     */
    public put<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.PUT)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Shorthand for a basic PATCH request.
     * Use `ApiService::build()` for more complex requests.
     */
    public patch<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.PATCH)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Shorthand for a basic DELETE request.
     * Use `ApiService::build()` for more complex requests.
     */
    public delete<T>(endpoint: string, model?: AnyModelOptional, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.DELETE)
            .endpoint(endpoint)
            .model(model || null)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Send an ApiRequest.
     */
    public send<T>(endpoint: string, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    public send<T>(request: ApiRequest): HttpResponse<T>;
    public send<T>(requestOrEndpoint: string|ApiRequest, model?: AnyModelOptional, payload?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        let request: ApiRequest;
        if (isString(requestOrEndpoint)) {
            const builder = this.build();
            builder.endpoint(requestOrEndpoint);
            if (!isUndefined(model)) {
                builder.model(model);
            }
            builder.payload(payload);
            builder.params(params || {});
            request = builder.getRequest();
        } else {
            request = requestOrEndpoint;
        }
        let endpoint: ApiEndpoint|null = null;
        if (request.endpoint !== null) {
            const modelCtor = request.model !== null ? this.modelMetadata.resolveAlias(isArray(request.model) ? request.model[0] : request.model) : null;
            endpoint = this.endpointsStorage.getEndpoint(request.endpoint, modelCtor);
        }
        if (endpoint === null) {
            if (isNullOrUndefined(request.url) || !request.url.length) {
                throw new UsageException('You must define either an endpoint or a url.');
            }
            const idx = request.method + ':' + request.url;
            if (isUndefined(this.generatedEndpoints[idx])) {
                this.generatedEndpoints[idx] = new ApiEndpoint({
                    url: request.url,
                    method: request.method,
                    params: {'*': null}
                });
            }
            endpoint = this.generatedEndpoints[idx];
        }
        const httpRequest = endpoint.buildRequest(request.payload, request.toEndpointOverride());
        // Tag the request so our subscribers are called.
        httpRequest.tags.push(ApiTag);
        httpRequest.extras = Object.assign(httpRequest.extras || {}, {_apiRequestId: request.id});
        this.knownRequests[request.id] = request;
        return this.http.send(httpRequest);
    }

    /**
     * HttpService's `BeforeRequest` event handler.
     */
    private onBeforeRequest(event: RequestEvent): Promise<void>|undefined {
        return this.dispatchEvent(ApiEvents.BeforeRequest, event, ApiRequestEvent);
    }

    /**
     * HttpService's `BeforeResponse` event handler.
     */
    private onBeforeResponse(event: BeforeResponseEvent): Promise<void>|undefined {
        return this.dispatchEvent(ApiEvents.BeforeResponse, event, ApiBeforeResponseEvent);
    }

    /**
     * HttpService's `RequestSuccess` event handler.
     */
    private onRequestSuccess(event: RequestEvent): Promise<void>|undefined {
        return this.dispatchEventAndDispose(ApiEvents.RequestSuccess, event, ApiResponseEvent);
    }

    /**
     * HttpService's `RequestFailure` event handler.
     */
    private onRequestFailure(event: RequestEvent): Promise<void>|undefined {
        return this.dispatchEventAndDispose(ApiEvents.RequestFailure, event, ApiResponseEvent);
    }

    /**
     * Dispatch an event and wait for its resolution if necessary.
     */
    private dispatchEvent(eventType: symbol, event: RequestEvent|BeforeResponseEvent|ResponseEvent, eventArg: Constructor<ApiRequestEvent|ApiResponseEvent|ApiBeforeResponseEvent>): Promise<void>|undefined {
        const apiRequest = this.httpToApiRequest(event.request);
        if (!apiRequest) {
            return ;
        }
        const result = this.eventDispatcher.dispatchWithErrorHandling(eventType, new eventArg(apiRequest, event), true, event.request.tags);
        const promise = result.promise;
        if (promise !== null) {
            return new Promise<void>((resolve) => {
                // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                promise.finally(resolve);
            });
        }
    }

    /**
     * Call dispatchEvent and remove the ApiRequest from the known requests when done.
     */
    private dispatchEventAndDispose(eventType: symbol, event: RequestEvent|BeforeResponseEvent|ResponseEvent, eventArg: Constructor<ApiRequestEvent|ApiResponseEvent|ApiBeforeResponseEvent>): Promise<void>|undefined {
        const result = this.dispatchEvent(eventType, event, eventArg);
        const clean = () => {
            const apiRequest = this.httpToApiRequest(event.request);
            if (apiRequest && !isUndefined(this.knownRequests[apiRequest.id])) {
                delete this.knownRequests[apiRequest.id];
            }
        };
        if (!isUndefined(result) && isPromiseLike(result)) {
            result.finally(clean);
        } else {
            clean();
        }
        return result;
    }

    /**
     * Try to get back an ApiRequest from an HttpRequest.
     */
    private httpToApiRequest(request: HttpRequest|AdapterRequest): ApiRequest|null {
        const id = getObjectValue(request.extras, '_apiRequestId', 0);
        if (!isUndefined(this.knownRequests[id])) {
            return this.knownRequests[id];
        }
        console.warn('A request that doesn\'t originate from the ApiService as been tagged with "ApiTag".');
        return null;
    }
}

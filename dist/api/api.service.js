/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { UsageException } from '@banquette/exception/usage.exception';
import { HttpMethod, HttpEvents } from '@banquette/http/constants';
import { HttpService } from '@banquette/http/http.service';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { proxy } from '@banquette/utils-misc/proxy';
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { isArray } from '@banquette/utils-type/is-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ApiEndpoint } from './api-endpoint.js';
import { ApiEndpointStorageService } from './api-endpoint-storage.service.js';
import { ApiRequestBuilder } from './api-request.builder.js';
import { ApiConfigurationSymbol } from './config.js';
import { ApiTag, ApiEvents } from './constant.js';
import { ApiBeforeResponseEvent } from './event/api-before-response.event.js';
import { ApiRequestEvent } from './event/api-request.event.js';
import { ApiResponseEvent } from './event/api-response.event.js';
import './listener/request-model-transformer.listener.js';
import './listener/response-model-transformer.listener.js';

var ApiService = /** @class */ (function () {
    function ApiService(configuration, eventDispatcher, http, modelMetadata, endpointsStorage) {
        this.configuration = configuration;
        this.eventDispatcher = eventDispatcher;
        this.http = http;
        this.modelMetadata = modelMetadata;
        this.endpointsStorage = endpointsStorage;
        /**
         * A map of endpoints generated for static url requests.
         */
        this.generatedEndpoints = {};
        /**
         * A map joining HttpRequests to their ApiRequest of origin.
         */
        this.knownRequests = {};
        var config = this.configuration.get(ApiConfigurationSymbol);
        this.eventDispatcher.subscribe(HttpEvents.BeforeRequest, proxy(this.onBeforeRequest, this), config.eventsPriorities.beforeRequest, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.BeforeResponse, proxy(this.onBeforeResponse, this), config.eventsPriorities.beforeResponse, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.RequestSuccess, proxy(this.onRequestSuccess, this), config.eventsPriorities.requestSuccess, [ApiTag]);
        this.eventDispatcher.subscribe(HttpEvents.RequestFailure, proxy(this.onRequestFailure, this), config.eventsPriorities.requestFailure, [ApiTag]);
    }
    /**
     * Create a request builder to assist the creation of complex requests.
     */
    ApiService.prototype.build = function () {
        return new ApiRequestBuilder();
    };
    /**
     * Shorthand for a basic GET request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.get = function (endpoint, model, params) {
        return this.send(this.build()
            .method(HttpMethod.GET)
            .endpoint(endpoint)
            .model(model || null)
            .params(params || {})
            .getRequest());
    };
    /**
     * Shorthand for a basic POST request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.post = function (endpoint, model, payload, params) {
        return this.send(this.build()
            .method(HttpMethod.POST)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest());
    };
    /**
     * Shorthand for a basic PUT request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.put = function (endpoint, model, payload, params) {
        return this.send(this.build()
            .method(HttpMethod.PUT)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest());
    };
    /**
     * Shorthand for a basic PATCH request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.patch = function (endpoint, model, payload, params) {
        return this.send(this.build()
            .method(HttpMethod.PATCH)
            .endpoint(endpoint)
            .model(model || null)
            .payload(payload)
            .params(params || {})
            .getRequest());
    };
    /**
     * Shorthand for a basic DELETE request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.delete = function (endpoint, model, params) {
        return this.send(this.build()
            .method(HttpMethod.DELETE)
            .endpoint(endpoint)
            .model(model || null)
            .params(params || {})
            .getRequest());
    };
    ApiService.prototype.send = function (requestOrEndpoint, model, payload, params) {
        var request;
        if (isString(requestOrEndpoint)) {
            var builder = this.build();
            builder.endpoint(requestOrEndpoint);
            if (!isUndefined(model)) {
                builder.model(model);
            }
            builder.payload(payload);
            builder.params(params || {});
            request = builder.getRequest();
        }
        else {
            request = requestOrEndpoint;
        }
        var endpoint = null;
        if (request.endpoint !== null) {
            var modelCtor = request.model !== null ? this.modelMetadata.resolveAlias(isArray(request.model) ? request.model[0] : request.model) : null;
            endpoint = this.endpointsStorage.getEndpoint(request.endpoint, modelCtor);
        }
        if (endpoint === null) {
            if (isNullOrUndefined(request.url) || !request.url.length) {
                throw new UsageException('You must define either an endpoint or a url.');
            }
            var idx = request.method + ':' + request.url;
            if (isUndefined(this.generatedEndpoints[idx])) {
                this.generatedEndpoints[idx] = new ApiEndpoint({
                    url: request.url,
                    method: request.method,
                    params: { '*': null }
                });
            }
            endpoint = this.generatedEndpoints[idx];
        }
        var httpRequest = endpoint.buildRequest(request.payload, request.toEndpointOverride());
        // Tag the request so our subscribers are called.
        httpRequest.tags.push(ApiTag);
        httpRequest.extras = Object.assign(httpRequest.extras || {}, { _apiRequestId: request.id });
        this.knownRequests[request.id] = request;
        return this.http.send(httpRequest);
    };
    /**
     * HttpService's `BeforeRequest` event handler.
     */
    ApiService.prototype.onBeforeRequest = function (event) {
        return this.dispatchEvent(ApiEvents.BeforeRequest, event, ApiRequestEvent);
    };
    /**
     * HttpService's `BeforeResponse` event handler.
     */
    ApiService.prototype.onBeforeResponse = function (event) {
        return this.dispatchEvent(ApiEvents.BeforeResponse, event, ApiBeforeResponseEvent);
    };
    /**
     * HttpService's `RequestSuccess` event handler.
     */
    ApiService.prototype.onRequestSuccess = function (event) {
        return this.dispatchEventAndDispose(ApiEvents.RequestSuccess, event, ApiResponseEvent);
    };
    /**
     * HttpService's `RequestFailure` event handler.
     */
    ApiService.prototype.onRequestFailure = function (event) {
        return this.dispatchEventAndDispose(ApiEvents.RequestFailure, event, ApiResponseEvent);
    };
    /**
     * Dispatch an event and wait for its resolution if necessary.
     */
    ApiService.prototype.dispatchEvent = function (eventType, event, eventArg) {
        var apiRequest = this.httpToApiRequest(event.request);
        if (!apiRequest) {
            return;
        }
        var result = this.eventDispatcher.dispatchWithErrorHandling(eventType, new eventArg(apiRequest, event), true, event.request.tags);
        var promise = result.promise;
        if (promise !== null) {
            return new Promise(function (resolve) {
                // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                promise.finally(resolve);
            });
        }
    };
    /**
     * Call dispatchEvent and remove the ApiRequest from the known requests when done.
     */
    ApiService.prototype.dispatchEventAndDispose = function (eventType, event, eventArg) {
        var _this = this;
        var result = this.dispatchEvent(eventType, event, eventArg);
        var clean = function () {
            var apiRequest = _this.httpToApiRequest(event.request);
            if (apiRequest && !isUndefined(_this.knownRequests[apiRequest.id])) {
                delete _this.knownRequests[apiRequest.id];
            }
        };
        if (!isUndefined(result) && isPromiseLike(result)) {
            result.finally(clean);
        }
        else {
            clean();
        }
        return result;
    };
    /**
     * Try to get back an ApiRequest from an HttpRequest.
     */
    ApiService.prototype.httpToApiRequest = function (request) {
        var id = getObjectValue(request.extras, '_apiRequestId', 0);
        if (!isUndefined(this.knownRequests[id])) {
            return this.knownRequests[id];
        }
        console.warn('A request that doesn\'t originate from the ApiService as been tagged with "ApiTag".');
        return null;
    };
    ApiService = __decorate([
        Service(),
        __param(0, Inject(ConfigurationService)),
        __param(1, Inject(EventDispatcherService)),
        __param(2, Inject(HttpService)),
        __param(3, Inject(ModelMetadataService)),
        __param(4, Inject(ApiEndpointStorageService)),
        __metadata("design:paramtypes", [ConfigurationService,
            EventDispatcherService,
            HttpService,
            ModelMetadataService,
            ApiEndpointStorageService])
    ], ApiService);
    return ApiService;
}());

export { ApiService };

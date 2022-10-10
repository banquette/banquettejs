/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constants = require('@banquette/http/_cjs/dev/constants');
var http_service = require('@banquette/http/_cjs/dev/http.service');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isPromiseLike = require('@banquette/utils-type/_cjs/dev/is-promise-like');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var apiEndpoint = require('./api-endpoint.js');
var apiEndpointStorage_service = require('./api-endpoint-storage.service.js');
var apiRequest_builder = require('./api-request.builder.js');
var config = require('./config.js');
var constant = require('./constant.js');
var apiBeforeResponse_event = require('./event/api-before-response.event.js');
var apiRequest_event = require('./event/api-request.event.js');
var apiResponse_event = require('./event/api-response.event.js');
require('./listener/request-model-transformer.listener.js');
require('./listener/response-model-transformer.listener.js');

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
        var config$1 = this.configuration.get(config.ApiConfigurationSymbol);
        this.eventDispatcher.subscribe(constants.HttpEvents.BeforeRequest, proxy.proxy(this.onBeforeRequest, this), config$1.eventsPriorities.beforeRequest, [constant.ApiTag]);
        this.eventDispatcher.subscribe(constants.HttpEvents.BeforeResponse, proxy.proxy(this.onBeforeResponse, this), config$1.eventsPriorities.beforeResponse, [constant.ApiTag]);
        this.eventDispatcher.subscribe(constants.HttpEvents.RequestSuccess, proxy.proxy(this.onRequestSuccess, this), config$1.eventsPriorities.requestSuccess, [constant.ApiTag]);
        this.eventDispatcher.subscribe(constants.HttpEvents.RequestFailure, proxy.proxy(this.onRequestFailure, this), config$1.eventsPriorities.requestFailure, [constant.ApiTag]);
    }
    /**
     * Create a request builder to assist the creation of complex requests.
     */
    ApiService.prototype.build = function () {
        return new apiRequest_builder.ApiRequestBuilder();
    };
    /**
     * Shorthand for a basic GET request.
     * Use `ApiService::build()` for more complex requests.
     */
    ApiService.prototype.get = function (endpoint, model, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.GET)
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
            .method(constants.HttpMethod.POST)
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
            .method(constants.HttpMethod.PUT)
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
            .method(constants.HttpMethod.PATCH)
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
            .method(constants.HttpMethod.DELETE)
            .endpoint(endpoint)
            .model(model || null)
            .params(params || {})
            .getRequest());
    };
    ApiService.prototype.send = function (requestOrEndpoint, model, payload, params) {
        var request;
        if (isString.isString(requestOrEndpoint)) {
            var builder = this.build();
            builder.endpoint(requestOrEndpoint);
            if (!isUndefined.isUndefined(model)) {
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
            var modelCtor = request.model !== null ? this.modelMetadata.resolveAlias(isArray.isArray(request.model) ? request.model[0] : request.model) : null;
            endpoint = this.endpointsStorage.getEndpoint(request.endpoint, modelCtor);
        }
        if (endpoint === null) {
            if (isNullOrUndefined.isNullOrUndefined(request.url) || !request.url.length) {
                throw new usage_exception.UsageException('You must define either an endpoint or a url.');
            }
            var idx = request.method + ':' + request.url;
            if (isUndefined.isUndefined(this.generatedEndpoints[idx])) {
                this.generatedEndpoints[idx] = new apiEndpoint.ApiEndpoint({
                    url: request.url,
                    method: request.method,
                    params: { '*': null }
                });
            }
            endpoint = this.generatedEndpoints[idx];
        }
        var httpRequest = endpoint.buildRequest(request.payload, request.toEndpointOverride());
        // Tag the request so our subscribers are called.
        httpRequest.tags.push(constant.ApiTag);
        httpRequest.extras = Object.assign(httpRequest.extras || {}, { _apiRequestId: request.id });
        this.knownRequests[request.id] = request;
        return this.http.send(httpRequest);
    };
    /**
     * HttpService's `BeforeRequest` event handler.
     */
    ApiService.prototype.onBeforeRequest = function (event) {
        return this.dispatchEvent(constant.ApiEvents.BeforeRequest, event, apiRequest_event.ApiRequestEvent);
    };
    /**
     * HttpService's `BeforeResponse` event handler.
     */
    ApiService.prototype.onBeforeResponse = function (event) {
        return this.dispatchEvent(constant.ApiEvents.BeforeResponse, event, apiBeforeResponse_event.ApiBeforeResponseEvent);
    };
    /**
     * HttpService's `RequestSuccess` event handler.
     */
    ApiService.prototype.onRequestSuccess = function (event) {
        return this.dispatchEventAndDispose(constant.ApiEvents.RequestSuccess, event, apiResponse_event.ApiResponseEvent);
    };
    /**
     * HttpService's `RequestFailure` event handler.
     */
    ApiService.prototype.onRequestFailure = function (event) {
        return this.dispatchEventAndDispose(constant.ApiEvents.RequestFailure, event, apiResponse_event.ApiResponseEvent);
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
            if (apiRequest && !isUndefined.isUndefined(_this.knownRequests[apiRequest.id])) {
                delete _this.knownRequests[apiRequest.id];
            }
        };
        if (!isUndefined.isUndefined(result) && isPromiseLike.isPromiseLike(result)) {
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
        var id = getObjectValue.getObjectValue(request.extras, '_apiRequestId', 0);
        if (!isUndefined.isUndefined(this.knownRequests[id])) {
            return this.knownRequests[id];
        }
        console.warn('A request that doesn\'t originate from the ApiService as been tagged with "ApiTag".');
        return null;
    };
    ApiService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(configuration_service.ConfigurationService)),
        _tslib.__param(1, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__param(2, inject_decorator.Inject(http_service.HttpService)),
        _tslib.__param(3, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(4, inject_decorator.Inject(apiEndpointStorage_service.ApiEndpointStorageService)),
        _tslib.__metadata("design:paramtypes", [configuration_service.ConfigurationService,
            eventDispatcher_service.EventDispatcherService,
            http_service.HttpService,
            modelMetadata_service.ModelMetadataService,
            apiEndpointStorage_service.ApiEndpointStorageService])
    ], ApiService);
    return ApiService;
}());

exports.ApiService = ApiService;

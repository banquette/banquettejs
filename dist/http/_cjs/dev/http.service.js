/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var observablePromise = require('@banquette/promise/_cjs/dev/observable-promise');
var makeReassignable = require('@banquette/utils-misc/_cjs/dev/make-reassignable');
var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var constants = require('./constants.js');
var beforeResponse_event = require('./event/before-response.event.js');
var request_event = require('./event/request.event.js');
var response_event = require('./event/response.event.js');
var authentication_exception = require('./exception/authentication.exception.js');
var network_exception = require('./exception/network.exception.js');
var requestCanceled_exception = require('./exception/request-canceled.exception.js');
var request_exception = require('./exception/request.exception.js');
var httpRequest_builder = require('./http-request.builder.js');
var httpResponse = require('./http-response.js');
var networkWatcher_service = require('./network-watcher.service.js');
var utils = require('./utils.js');

var HttpService = /** @class */ (function () {
    function HttpService(config, eventDispatcher, networkWatcher) {
        this.config = config;
        this.eventDispatcher = eventDispatcher;
        this.networkWatcher = networkWatcher;
        /**
         * Array of requests waiting to be executed.
         */
        this.requestsQueue = [];
        /**
         * Id of the timeout that will process the queue.
         */
        this.queueProcessTimeout = null;
        /**
         * Is the service initialized?
         */
        this.initialized = false;
        /**
         * How many requests are currently running?
         */
        this.runningRequestsCount = 0;
    }
    HttpService_1 = HttpService;
    /**
     * Create a request builder to assist the creation of complex requests.
     */
    HttpService.prototype.build = function () {
        return new httpRequest_builder.HttpRequestBuilder();
    };
    /**
     * Do a GET request expecting a JSON response.
     */
    HttpService.prototype.get = function (url, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.GET)
            .url(url)
            .params(params || {})
            .getRequest());
    };
    /**
     * Do a POST request that sends a JSON payload and expect a JSON response.
     */
    HttpService.prototype.post = function (url, body, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.POST)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest());
    };
    /**
     * Do a PUT request that sends a JSON payload and expect a JSON response.
     */
    HttpService.prototype.put = function (url, body, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.PUT)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest());
    };
    /**
     * Do a PATCH request that sends a JSON payload and expect a JSON response.
     */
    HttpService.prototype.patch = function (url, body, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.PATCH)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest());
    };
    /**
     * Do a DELETE request.
     */
    HttpService.prototype.delete = function (url, params) {
        return this.send(this.build()
            .method(constants.HttpMethod.DELETE)
            .url(url)
            .params(params || {})
            .getRequest());
    };
    /**
     * Send a Http request.
     *
     * @note Use `HttpService::build()` to create a request object easily.
     */
    HttpService.prototype.send = function (request) {
        this.initialize();
        var promiseResolve;
        var promiseReject;
        var promiseProgress;
        var response = makeReassignable.makeReassignable(new httpResponse.HttpResponse(request, constants.HttpResponseStatus.Pending, new observablePromise.ObservablePromise(function (resolve, reject, progress) {
            promiseResolve = resolve;
            promiseReject = reject;
            promiseProgress = progress;
        })));
        request.setResponse(response);
        this.queueRequest(request, response, 0, 
        //
        // These are guaranteed to be set before being used.
        // It's a little tricky because both the response AND the promise's callbacks are need to queue the request.
        //
        // @ts-ignore
        promiseResolve, 
        // @ts-ignore
        promiseReject, 
        // @ts-ignore
        promiseProgress);
        return response;
    };
    /**
     * Do a request.
     */
    HttpService.prototype.executeQueuedRequest = function (queuedRequest) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var adapter, adapterPromise, adapterResponse, e_1;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // The request may have been canceled while in queue, in such a case simply ignore it.
                        // The promise has already been resolved by the default "cancel()" callback inside the HttpResponse.
                        if (queuedRequest.response.isCanceled) {
                            return [2 /*return*/, void this.removeFromQueue(queuedRequest)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        adapter = injector.Injector.Get(this.adapterIdentifier);
                        if (!queuedRequest.tryCount) {
                            queuedRequest.request.setAdapter(adapter);
                        }
                        queuedRequest.triesLeft--;
                        queuedRequest.isExecuting = true;
                        this.runningRequestsCount++;
                        // Before request.
                        return [4 /*yield*/, this.ensureDispatchSucceeded(this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.BeforeRequest, new request_event.RequestEvent(queuedRequest.request), true, queuedRequest.request.tags))];
                    case 2:
                        // Before request.
                        _a.sent();
                        HttpService_1.EnsureValidRequest(queuedRequest.request);
                        queuedRequest.tryCount++;
                        queuedRequest.request.incrementTryCount();
                        adapterPromise = adapter.execute(queuedRequest.request);
                        adapterPromise.progress(queuedRequest.progress);
                        return [4 /*yield*/, adapterPromise];
                    case 3:
                        adapterResponse = _a.sent();
                        // Before response.
                        return [4 /*yield*/, this.ensureDispatchSucceeded(this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.BeforeResponse, new beforeResponse_event.BeforeResponseEvent(adapterResponse, queuedRequest.request), true, queuedRequest.request.tags))];
                    case 4:
                        // Before response.
                        _a.sent();
                        this.handleRequestResponse(adapterResponse, queuedRequest);
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.handleRequestFailure(queuedRequest, exception_factory.ExceptionFactory.EnsureException(e_1));
                        return [3 /*break*/, 7];
                    case 6:
                        queuedRequest.isExecuting = false;
                        this.runningRequestsCount--;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Do what needs to be done after a request succeeded (on a network level anyway).
     * The response can still be an error if the server responded with non 2xx status code.
     */
    HttpService.prototype.handleRequestResponse = function (response, queuedRequest) {
        queuedRequest.response.httpStatusCode = response.status;
        queuedRequest.response.url = response.url;
        queuedRequest.response.httpHeaders = response.headers;
        queuedRequest.response.result = response.response;
        if (response.status.toString()[0] !== '2') {
            var statusText = utils.httpStatusToText(response.status);
            var error = (response.status === 401 || response.status === 403) ? new authentication_exception.AuthenticationException(statusText) : new request_exception.RequestException(statusText);
            this.handleRequestFailure(queuedRequest, error);
            return;
        }
        queuedRequest.response.setStatus(constants.HttpResponseStatus.Success);
        queuedRequest.resolve(queuedRequest.response);
        this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.RequestSuccess, new response_event.ResponseEvent(queuedRequest.request, queuedRequest.response), true, queuedRequest.request.tags);
        this.removeFromQueue(queuedRequest);
    };
    /**
     * Do what needs to be done after a request failed on the network level.
     */
    HttpService.prototype.handleRequestFailure = function (queuedRequest, error) {
        if (error instanceof network_exception.NetworkException && error.retryable && queuedRequest.triesLeft > 0) {
            queuedRequest.executeAt = HttpService_1.CalculateNextTryTime(queuedRequest);
            queuedRequest.isExecuting = false;
            this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.RequestQueued, new request_event.RequestEvent(queuedRequest.request), true, queuedRequest.request.tags);
            if (this.networkWatcher.isOnline()) {
                this.processQueue();
            }
            return;
        }
        queuedRequest.response.error = error;
        queuedRequest.response.setStatus(error instanceof requestCanceled_exception.RequestCanceledException ? constants.HttpResponseStatus.Canceled : constants.HttpResponseStatus.Error);
        queuedRequest.reject(queuedRequest.response);
        this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.RequestFailure, new response_event.ResponseEvent(queuedRequest.request, queuedRequest.response), true, queuedRequest.request.tags);
        this.removeFromQueue(queuedRequest);
    };
    /**
     * Process available request and prepare the next process queue if the queue still contains request.
     */
    HttpService.prototype.processQueue = function () {
        var currentTime = (new Date()).getTime();
        var maxSimultaneousRequestsCount = this.config.get('http.maxSimultaneousRequests');
        for (var _i = 0, _a = this.requestsQueue; _i < _a.length; _i++) {
            var request = _a[_i];
            if (!request.isExecuting && request.executeAt <= currentTime && this.runningRequestsCount < maxSimultaneousRequestsCount) {
                // Will never reject, the catch is only here to calm tslint.
                this.executeQueuedRequest(request).catch(noop.noop);
            }
        }
        this.scheduleQueueForProcess();
    };
    /**
     * Remove a request from the queue.
     */
    HttpService.prototype.removeFromQueue = function (request) {
        for (var i = 0; i < this.requestsQueue.length; ++i) {
            if (this.requestsQueue[i] === request) {
                this.requestsQueue.splice(i, 1);
                return;
            }
        }
    };
    /**
     * Queue a request for retry.
     */
    HttpService.prototype.queueRequest = function (request, response, executeAt, resolve, reject, progress) {
        var _this = this;
        var i = 0;
        var queueRequest = {
            request: request,
            timeout: this.config.get('http.requestTimeout'),
            tryCount: 0,
            triesLeft: 1 + Math.max(0, request.retry !== null ? request.retry : this.config.get('http.requestRetryCount')),
            retryDelay: request.retryDelay !== null ? request.retryDelay : this.config.get('http.requestRetryDelay'),
            executeAt: executeAt,
            resolve: resolve,
            reject: reject,
            progress: progress,
            isExecuting: false,
            isError: false,
            response: response
        };
        this.networkWatcher.watch();
        for (; i < this.requestsQueue.length && this.requestsQueue[i].request.priority >= request.priority; ++i)
            { }
        this.requestsQueue.splice(i, 0, queueRequest);
        request.setCancelCallback(function () {
            _this.handleRequestFailure(queueRequest, new requestCanceled_exception.RequestCanceledException());
        });
        this.scheduleQueueForProcess();
        var dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(constants.HttpEvents.RequestQueued, new request_event.RequestEvent(request), true, request.tags);
        if (dispatchResult.error) {
            this.handleRequestFailure(queueRequest, exception_factory.ExceptionFactory.EnsureException(dispatchResult.errorDetail));
        }
    };
    /**
     * Put a timeout to process the queue as soon as the less delayed request is available for retry.
     */
    HttpService.prototype.scheduleQueueForProcess = function () {
        var _this = this;
        if (this.queueProcessTimeout !== null || !this.requestsQueue.length) {
            return;
        }
        var currentTime = (new Date()).getTime();
        var delay = null;
        for (var _i = 0, _a = this.requestsQueue; _i < _a.length; _i++) {
            var request = _a[_i];
            if (request.isExecuting) {
                continue;
            }
            var delta = request.executeAt > 0 ? Math.max(0, request.executeAt - currentTime) : 0;
            if (delay === null || delay > delta) {
                delay = delta;
            }
        }
        if (delay !== null) {
            this.queueProcessTimeout = setTimeout(function () {
                _this.queueProcessTimeout = null;
                _this.processQueue();
            }, delay);
        }
    };
    /**
     * Called when the status on the internet connection changes.
     */
    HttpService.prototype.onNetworkAvailabilityChange = function (event) {
        if (event.available) {
            for (var _i = 0, _a = this.requestsQueue; _i < _a.length; _i++) {
                var queuedRequest = _a[_i];
                if (queuedRequest.isError) {
                    queuedRequest.executeAt = 0;
                }
            }
            if (this.queueProcessTimeout !== null) {
                clearTimeout(this.queueProcessTimeout);
                this.queueProcessTimeout = null;
            }
            this.scheduleQueueForProcess();
        }
    };
    /**
     * Initialize stuff before the first http call.
     */
    HttpService.prototype.initialize = function () {
        if (this.initialized) {
            return;
        }
        this.adapterIdentifier = this.config.get('http.adapter');
        if (isNullOrUndefined.isNullOrUndefined(this.adapterIdentifier)) {
            throw new usage_exception.UsageException('You must define a network adapter in the global configuration ' +
                'to use the Http service (key "http.adapter").');
        }
        if (!injector.Injector.Has(this.adapterIdentifier)) {
            throw new usage_exception.UsageException('You must register your adapter into the injector using the "@Module()" decorator.');
        }
        this.eventDispatcher.subscribe(constants.NetworkEvents.AvailabilityChange, proxy.proxy(this.onNetworkAvailabilityChange, this));
        this.initialized = true;
    };
    /**
     * Wait for a DispatchResult to settle and throw the error found in it if it failed.
     */
    HttpService.prototype.ensureDispatchSucceeded = function (result) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(result.promise !== null)) { return [3 /*break*/, 2]; }
                        return [4 /*yield*/, result.promise];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (result.error) {
                            throw result.errorDetail;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Calculate the timestamp at which the request should be executed again.
     */
    HttpService.CalculateNextTryTime = function (request) {
        var now = (new Date()).getTime();
        if (request.retryDelay !== 'auto') {
            return now + request.retryDelay;
        }
        return now + Math.min(30000, Math.pow(10, request.tryCount));
    };
    /**
     * Check if a request seems valid and throw a UsageException if not.
     */
    HttpService.EnsureValidRequest = function (request) {
        if (!isNonEmptyString.isNonEmptyString(request.url)) {
            throw new usage_exception.UsageException('You must define a valid url.');
        }
        HttpService_1.EnsureValidPayload(request.payload);
    };
    /**
     * Check the type of the payload to ensure it is compatible with what the xhr expects.
     * Throw a UsageException if not.
     */
    HttpService.EnsureValidPayload = function (payload) {
        if (payload === null ||
            isString.isString(payload) ||
            payload instanceof Blob ||
            payload instanceof FormData ||
            payload instanceof ArrayBuffer ||
            payload instanceof Uint8Array ||
            payload instanceof URLSearchParams) {
            return;
        }
        throw new usage_exception.UsageException("Invalid body. Ensure that you have registered an encoder for this type of payload.");
    };
    var HttpService_1;
    HttpService = HttpService_1 = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(configuration_service.ConfigurationService)),
        _tslib.__param(1, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__param(2, inject_decorator.Inject(networkWatcher_service.NetworkWatcherService)),
        _tslib.__metadata("design:paramtypes", [configuration_service.ConfigurationService, Object, networkWatcher_service.NetworkWatcherService])
    ], HttpService);
    return HttpService;
}());

exports.HttpService = HttpService;

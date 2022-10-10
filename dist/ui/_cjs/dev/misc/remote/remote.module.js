/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var api_service = require('@banquette/api/_cjs/dev/api.service');
var remote_exception = require('@banquette/api/_cjs/dev/exception/remote.exception');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var constants = require('@banquette/http/_cjs/dev/constants');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('./constant.js');

/**
 * Offer an easy way for ui components to make http calls without having to worry about what parameters
 * are defined and what services are involved depending on the configuration.
 *
 * Being a module also has the advantage (over a service) to keep the configuration internally
 * so it can be configured once and then consumed as many time as needed.
 */
var RemoteModule = /** @class */ (function () {
    function RemoteModule() {
        /**
         * A static url to call.
         */
        this.url = null;
        /**
         * The name of an ApiEndpoint.
         */
        this.endpoint = null;
        /**
         * The HTTP method to use when doing the request.
         * Will be overridden by the endpoint is you're using one.
         */
        this.method = constants.HttpMethod.GET;
        /**
         * A model identifier that will define two things:
         *
         *   - the collection in which to find the endpoint (if "endpoint" is defined),
         *   - the type of entity the payload/response should be transformed from/into.
         */
        this.model = null;
        /**
         * If `false`, cancel any running request when `send()` is called.
         */
        this.allowMultiple = false;
        /**
         * Last response generated from the send().
         */
        this.response = null;
        this.api = injector.Injector.Get(api_service.ApiService);
        this.eventDispatcher = new eventDispatcher.EventDispatcher();
    }
    Object.defineProperty(RemoteModule.prototype, "isApplicable", {
        /**
         * Check if the module is usable in the current configuration.
         */
        get: function () {
            return this.endpoint !== null || this.url !== null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteModule.prototype, "pending", {
        /**
         * Check if request is pending.
         */
        get: function () {
            return this.response !== null && this.response.isPending;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update the configuration and notify of the change.
     */
    RemoteModule.prototype.updateConfiguration = function (configuration) {
        var changed = false;
        for (var _i = 0, _a = ['url', 'endpoint', 'method', 'model', 'urlParams', 'headers', 'payloadType', 'responseType', 'allowMultiple']; _i < _a.length; _i++) {
            var prop = _a[_i];
            var newValue = !isUndefined.isUndefined(configuration[prop]) ? configuration[prop] : this[prop];
            if (!changed && !areEqual.areEqual(this[prop], newValue)) {
                changed = true;
            }
            this[prop] = newValue;
        }
        if (changed) {
            this.eventDispatcher.dispatchWithErrorHandling(constant.RemoteModuleEvents.ConfigurationChange);
        }
    };
    /**
     * Call the server using the current configuration and process the results.
     */
    RemoteModule.prototype.send = function (payload, urlParams, headers, tags) {
        if (urlParams === void 0) { urlParams = {}; }
        if (headers === void 0) { headers = {}; }
        if (tags === void 0) { tags = []; }
        if (this.response !== null && this.response.isPending && !this.allowMultiple) {
            this.response.request.cancel();
        }
        this.response = this.api.send(this.api.build()
            .url(this.url)
            .endpoint(this.endpoint)
            .model(this.model)
            .method(this.method)
            .params(extend.extend({}, [this.urlParams, urlParams]))
            .headers(extend.extend({}, [this.headers, headers]))
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .tags(tags)
            .getRequest());
        this.response.promise.catch(function (response) {
            // Check `isError` to skip canceled requests.
            if (response.isError && !(response.result instanceof remote_exception.RemoteException)) {
                if (isObject.isObject(response.result) && !isUndefined.isUndefined(response.result.exception) && isNonEmptyString.isNonEmptyString(response.result.exception.message)) {
                    response.result = new remote_exception.RemoteException(response.result.exception.type || 'remote', response.result.exception.message);
                }
            }
            // The catch() DOES NOT guarantee an exception in `result`.
            // If none of the checks above matched, we simply let the result as is, the caller will have to deal with it.
            return response;
        });
        return this.response;
    };
    /**
     * By notified when a configuration value changes.
     */
    RemoteModule.prototype.onConfigurationChange = function (cb) {
        return this.eventDispatcher.subscribe(constant.RemoteModuleEvents.ConfigurationChange, cb);
    };
    return RemoteModule;
}());

exports.RemoteModule = RemoteModule;

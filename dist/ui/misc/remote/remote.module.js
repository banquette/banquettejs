/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ApiService } from '@banquette/api/api.service';
import { RemoteException } from '@banquette/api/exception/remote.exception';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { HttpMethod } from '@banquette/http/constants';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { extend } from '@banquette/utils-object/extend';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { RemoteModuleEvents } from './constant.js';

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
        this.method = HttpMethod.GET;
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
        this.api = Injector.Get(ApiService);
        this.eventDispatcher = new EventDispatcher();
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
            var newValue = !isUndefined(configuration[prop]) ? configuration[prop] : this[prop];
            if (!changed && !areEqual(this[prop], newValue)) {
                changed = true;
            }
            this[prop] = newValue;
        }
        if (changed) {
            this.eventDispatcher.dispatchWithErrorHandling(RemoteModuleEvents.ConfigurationChange);
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
            .params(extend({}, [this.urlParams, urlParams]))
            .headers(extend({}, [this.headers, headers]))
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .tags(tags)
            .getRequest());
        this.response.promise.catch(function (response) {
            // Check `isError` to skip canceled requests.
            if (response.isError && !(response.result instanceof RemoteException)) {
                if (isObject(response.result) && !isUndefined(response.result.exception) && isNonEmptyString(response.result.exception.message)) {
                    response.result = new RemoteException(response.result.exception.type || 'remote', response.result.exception.message);
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
        return this.eventDispatcher.subscribe(RemoteModuleEvents.ConfigurationChange, cb);
    };
    return RemoteModule;
}());

export { RemoteModule };

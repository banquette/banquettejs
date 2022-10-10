/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { HttpMethod } from '@banquette/http/constants';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ApiEndpoint } from './api-endpoint.js';
import { EndpointNotFoundException } from './exception/endpoint-not-found.exception.js';

var ApiEndpointCollection = /** @class */ (function () {
    function ApiEndpointCollection() {
        /**
         * Known endpoints, indexed by name.
         */
        this.endpoints = {};
    }
    ApiEndpointCollection.prototype.registerEndpoint = function (optionsOrName, urlOrEndpoint, method, params) {
        var endpointName;
        var endpoint = null;
        if (isString(optionsOrName)) {
            endpointName = optionsOrName;
            if (urlOrEndpoint instanceof ApiEndpoint) {
                endpoint = urlOrEndpoint;
            }
            else {
                optionsOrName = {
                    name: optionsOrName,
                    url: String(urlOrEndpoint),
                    method: method || HttpMethod.GET,
                    params: params || {}
                };
            }
        }
        else {
            endpointName = optionsOrName.name;
        }
        endpoint = endpoint ? endpoint : new ApiEndpoint(optionsOrName);
        if (!isUndefined(this.endpoints[endpointName])) {
            throw new UsageException("Another endpoint named \"".concat(endpointName, "\" has already been registered."));
        }
        this.endpoints[endpointName] = endpoint;
    };
    /**
     * Get the configuration of an endpoint.
     */
    ApiEndpointCollection.prototype.getEndpoint = function (name) {
        if (isUndefined(this.endpoints[name])) {
            throw new EndpointNotFoundException(name, "No endpoint name \"".concat(name, "\" has been found."));
        }
        return this.endpoints[name];
    };
    /**
     * Test if an endpoint has been registered.
     */
    ApiEndpointCollection.prototype.hasEndpoint = function (name) {
        return !isUndefined(this.endpoints[name]);
    };
    /**
     * Remove an endpoint.
     */
    ApiEndpointCollection.prototype.removeEndpoint = function (name) {
        delete this.endpoints[name];
    };
    /**
     * Remove all known endpoints.
     */
    ApiEndpointCollection.prototype.clear = function () {
        this.endpoints = {};
    };
    return ApiEndpointCollection;
}());

export { ApiEndpointCollection };

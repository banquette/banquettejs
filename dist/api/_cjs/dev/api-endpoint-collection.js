/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constants = require('@banquette/http/_cjs/dev/constants');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var apiEndpoint = require('./api-endpoint.js');
var endpointNotFound_exception = require('./exception/endpoint-not-found.exception.js');

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
        if (isString.isString(optionsOrName)) {
            endpointName = optionsOrName;
            if (urlOrEndpoint instanceof apiEndpoint.ApiEndpoint) {
                endpoint = urlOrEndpoint;
            }
            else {
                optionsOrName = {
                    name: optionsOrName,
                    url: String(urlOrEndpoint),
                    method: method || constants.HttpMethod.GET,
                    params: params || {}
                };
            }
        }
        else {
            endpointName = optionsOrName.name;
        }
        endpoint = endpoint ? endpoint : new apiEndpoint.ApiEndpoint(optionsOrName);
        if (!isUndefined.isUndefined(this.endpoints[endpointName])) {
            throw new usage_exception.UsageException("Another endpoint named \"".concat(endpointName, "\" has already been registered."));
        }
        this.endpoints[endpointName] = endpoint;
    };
    /**
     * Get the configuration of an endpoint.
     */
    ApiEndpointCollection.prototype.getEndpoint = function (name) {
        if (isUndefined.isUndefined(this.endpoints[name])) {
            throw new endpointNotFound_exception.EndpointNotFoundException(name, "No endpoint name \"".concat(name, "\" has been found."));
        }
        return this.endpoints[name];
    };
    /**
     * Test if an endpoint has been registered.
     */
    ApiEndpointCollection.prototype.hasEndpoint = function (name) {
        return !isUndefined.isUndefined(this.endpoints[name]);
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

exports.ApiEndpointCollection = ApiEndpointCollection;

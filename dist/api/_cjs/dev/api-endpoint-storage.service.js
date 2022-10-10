/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var apiEndpoint = require('./api-endpoint.js');
var apiEndpointCollection = require('./api-endpoint-collection.js');
var endpointNotFound_exception = require('./exception/endpoint-not-found.exception.js');

var ApiEndpointStorageService = /** @class */ (function () {
    function ApiEndpointStorageService() {
        this.collectionsMap = new WeakMap();
    }
    ApiEndpointStorageService_1 = ApiEndpointStorageService;
    ApiEndpointStorageService.prototype.registerEndpoint = function (optionsOrName, urlOrEndpoint, methodOrCtor, params, ctor) {
        ctor = this.resolveCtor(!isString.isString(optionsOrName) ? optionsOrName.ctor : (isFunction.isFunction(methodOrCtor) ? methodOrCtor : ctor));
        var collection = this.collectionsMap.get(ctor);
        if (isUndefined.isUndefined(collection)) {
            collection = new apiEndpointCollection.ApiEndpointCollection();
            this.collectionsMap.set(ctor, collection);
        }
        collection.registerEndpoint(optionsOrName, urlOrEndpoint, methodOrCtor, params);
    };
    /**
     * Try to get an ApiEndpoint.
     *
     * @throws EndpointNotFoundException
     */
    ApiEndpointStorageService.prototype.getEndpoint = function (name, ctor) {
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        if (isUndefined.isUndefined(collection) || !collection.hasEndpoint(name)) {
            var additionalMessage = ctor !== apiEndpoint.ApiEndpoint ? " for constructor \"".concat(ctor.name, "\".") : '';
            throw new endpointNotFound_exception.EndpointNotFoundException(name, "No endpoint \"".concat(name, "\" has been defined found").concat(additionalMessage, "."));
        }
        return collection.getEndpoint(name);
    };
    /**
     * Test if an endpoint has been registered.
     */
    ApiEndpointStorageService.prototype.hasEndpoint = function (name, ctor) {
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        return !isUndefined.isUndefined(collection) && collection.hasEndpoint(name);
    };
    /**
     * Remove an endpoint.
     */
    ApiEndpointStorageService.prototype.removeEndpoint = function (name, ctor) {
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        if (!isUndefined.isUndefined(collection)) {
            collection.removeEndpoint(name);
        }
    };
    /**
     * Remove all known endpoints.
     */
    ApiEndpointStorageService.prototype.clear = function (ctor) {
        if (ctor === null) {
            this.collectionsMap = new WeakMap();
            return;
        }
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        if (!isUndefined.isUndefined(collection)) {
            collection.clear();
        }
    };
    /**
     * Ensure a value for ctor.
     */
    ApiEndpointStorageService.prototype.resolveCtor = function (ctor) {
        return isNullOrUndefined.isNullOrUndefined(ctor) ? ApiEndpointStorageService_1 : ctor;
    };
    var ApiEndpointStorageService_1;
    ApiEndpointStorageService = ApiEndpointStorageService_1 = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__metadata("design:paramtypes", [])
    ], ApiEndpointStorageService);
    return ApiEndpointStorageService;
}());

exports.ApiEndpointStorageService = ApiEndpointStorageService;

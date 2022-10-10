/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from './_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ApiEndpoint } from './api-endpoint.js';
import { ApiEndpointCollection } from './api-endpoint-collection.js';
import { EndpointNotFoundException } from './exception/endpoint-not-found.exception.js';

var ApiEndpointStorageService = /** @class */ (function () {
    function ApiEndpointStorageService() {
        this.collectionsMap = new WeakMap();
    }
    ApiEndpointStorageService_1 = ApiEndpointStorageService;
    ApiEndpointStorageService.prototype.registerEndpoint = function (optionsOrName, urlOrEndpoint, methodOrCtor, params, ctor) {
        ctor = this.resolveCtor(!isString(optionsOrName) ? optionsOrName.ctor : (isFunction(methodOrCtor) ? methodOrCtor : ctor));
        var collection = this.collectionsMap.get(ctor);
        if (isUndefined(collection)) {
            collection = new ApiEndpointCollection();
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
        if (isUndefined(collection) || !collection.hasEndpoint(name)) {
            var additionalMessage = ctor !== ApiEndpoint ? " for constructor \"".concat(ctor.name, "\".") : '';
            throw new EndpointNotFoundException(name, "No endpoint \"".concat(name, "\" has been defined found").concat(additionalMessage, "."));
        }
        return collection.getEndpoint(name);
    };
    /**
     * Test if an endpoint has been registered.
     */
    ApiEndpointStorageService.prototype.hasEndpoint = function (name, ctor) {
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        return !isUndefined(collection) && collection.hasEndpoint(name);
    };
    /**
     * Remove an endpoint.
     */
    ApiEndpointStorageService.prototype.removeEndpoint = function (name, ctor) {
        ctor = this.resolveCtor(ctor);
        var collection = this.collectionsMap.get(ctor);
        if (!isUndefined(collection)) {
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
        if (!isUndefined(collection)) {
            collection.clear();
        }
    };
    /**
     * Ensure a value for ctor.
     */
    ApiEndpointStorageService.prototype.resolveCtor = function (ctor) {
        return isNullOrUndefined(ctor) ? ApiEndpointStorageService_1 : ctor;
    };
    var ApiEndpointStorageService_1;
    ApiEndpointStorageService = ApiEndpointStorageService_1 = __decorate([
        Service(),
        __metadata("design:paramtypes", [])
    ], ApiEndpointStorageService);
    return ApiEndpointStorageService;
}());

export { ApiEndpointStorageService };

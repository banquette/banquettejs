/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var container = require('@banquette/validation/_cjs/dev/type/container');

var ModelValidationMetadataService = /** @class */ (function () {
    function ModelValidationMetadataService(aliasResolver) {
        this.aliasResolver = aliasResolver;
        this.validatorsMap = new WeakMap();
    }
    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    ModelValidationMetadataService.prototype.register = function (identifier, property, validator) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        var properties = this.validatorsMap.get(ctor);
        if (isNullOrUndefined.isNullOrUndefined(properties)) {
            properties = {};
        }
        if (!isUndefined.isUndefined(properties[property])) {
            throw new usage_exception.UsageException("Another validator is already registered for \"".concat(ctor.name, "::").concat(property, "\".\n                Please call \"replace()\" instead if you want to override it."));
        }
        properties[property] = validator;
        this.validatorsMap.set(ctor, properties);
    };
    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    ModelValidationMetadataService.prototype.replace = function (identifier, property, validator) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        this.remove(ctor, property);
        this.register(ctor, property, validator);
    };
    /**
     * Remove the validator of a model property.
     */
    ModelValidationMetadataService.prototype.remove = function (identifier, property) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        var properties = this.validatorsMap.get(ctor);
        if (!isNullOrUndefined.isNullOrUndefined(properties)) {
            delete properties[property];
            this.validatorsMap.set(ctor, properties);
        }
    };
    /**
     * Get the validator of a model property.
     */
    ModelValidationMetadataService.prototype.get = function (identifier, property) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        var properties = this.validatorsMap.get(ctor);
        if (!isNullOrUndefined.isNullOrUndefined(properties) && !isUndefined.isUndefined(properties[property])) {
            return properties[property];
        }
        var parent = Object.getPrototypeOf(ctor);
        if (parent) {
            return this.get(parent, property);
        }
        return null;
    };
    /**
     * Test if a validator has been registered for a model property.
     */
    ModelValidationMetadataService.prototype.has = function (identifier, property) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        return this.get(ctor, property) !== null;
    };
    /**
     * Remove all registered metadata.
     */
    ModelValidationMetadataService.prototype.clear = function () {
        this.validatorsMap = new WeakMap();
    };
    /**
     * Get the validator corresponding to a model.
     */
    ModelValidationMetadataService.prototype.getValidator = function (identifier) {
        var ctor = this.aliasResolver.resolveAlias(identifier);
        var properties = this.validatorsMap.get(ctor);
        return !isNullOrUndefined.isNullOrUndefined(properties) ? container.Container(properties) : null;
    };
    ModelValidationMetadataService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService])
    ], ModelValidationMetadataService);
    return ModelValidationMetadataService;
}());

exports.ModelValidationMetadataService = ModelValidationMetadataService;

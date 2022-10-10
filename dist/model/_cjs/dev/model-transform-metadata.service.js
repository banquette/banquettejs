/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getSymbolDescription = require('@banquette/utils-object/_cjs/dev/get-symbol-description');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('./constants.js');
var modelMetadata_service = require('./model-metadata.service.js');
var utils = require('./utils.js');

var ModelTransformMetadataService = /** @class */ (function () {
    function ModelTransformMetadataService(modelMetadata) {
        this.modelMetadata = modelMetadata;
        this.transformersMap = new WeakMap();
    }
    /**
     * Get a map of all transformable properties of a model and their respective transformer.
     */
    ModelTransformMetadataService.prototype.getAll = function (identifier, type) {
        var output = {};
        var ctor = this.modelMetadata.resolveAlias(identifier);
        do {
            var transforms = this.transformersMap.get(ctor);
            if (!isNullOrUndefined.isNullOrUndefined(transforms) && !isUndefined.isUndefined(transforms[type])) {
                output = Object.assign({}, transforms[type], output);
            }
            ctor = Object.getPrototypeOf(ctor);
        } while (ctor && ctor !== constants.ObjectCtor);
        return output;
    };
    /**
     * Try to get a wildcard transformer.
     */
    ModelTransformMetadataService.prototype.getWildcard = function (identifier, type) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined.isNullOrUndefined(transforms) && !isUndefined.isUndefined(transforms[type])) {
            return transforms[type][constants.Wildcard] || null;
        }
        return null;
    };
    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    ModelTransformMetadataService.prototype.register = function (identifier, type, property, transformer) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (isNullOrUndefined.isNullOrUndefined(transforms)) {
            transforms = {};
        }
        if (isUndefined.isUndefined(transforms[type])) {
            transforms[type] = {};
        }
        var properties = transforms[type];
        if (!isUndefined.isUndefined(properties[property]) && property !== constants.Wildcard) {
            throw new usage_exception.UsageException("Another transformer for \"".concat(getSymbolDescription.getSymbolDescription(type), "\" is already registered for \"").concat(ctor.name, "::").concat(property, "\".\n                Please call \"replace()\" instead if you want to override it."));
        }
        properties[property] = utils.ensureCompleteTransformer(transformer);
        this.transformersMap.set(ctor, transforms);
    };
    /**
     * Register a transformer that will match all properties that don't have a transformer
     * specifically register for this type of transform.
     *
     * Warning, but doing this every property of the object you will transform will be included, all the time.
     */
    ModelTransformMetadataService.prototype.registerWildcard = function (identifier, type, transformer) {
        this.register(identifier, type, constants.Wildcard, transformer);
    };
    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    ModelTransformMetadataService.prototype.replace = function (identifier, type, property, transformer) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        this.remove(ctor, type, property);
        this.register(ctor, type, property, transformer);
    };
    /**
     * Remove the validator of a model property.
     */
    ModelTransformMetadataService.prototype.remove = function (identifier, type, property) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined.isNullOrUndefined(transforms) && !isUndefined.isUndefined(transforms[type])) {
            delete transforms[type][property];
            this.transformersMap.set(ctor, transforms);
        }
    };
    /**
     * Remove a wildcard transformer.
     */
    ModelTransformMetadataService.prototype.removeWildcard = function (identifier, type) {
        this.remove(identifier, type, constants.Wildcard);
    };
    /**
     * Get the validator of a model property.
     */
    ModelTransformMetadataService.prototype.get = function (identifier, type, property) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined.isNullOrUndefined(transforms) && !isUndefined.isUndefined(transforms[type])) {
            return transforms[type][property] || this.getWildcard(ctor, type);
        }
        return null;
    };
    /**
     * Test if a validator has been registered for a model property.
     */
    ModelTransformMetadataService.prototype.has = function (identifier, type, property) {
        return this.get(identifier, type, property) !== null;
    };
    /**
     * Remove all registered metadata.
     */
    ModelTransformMetadataService.prototype.clear = function () {
        this.transformersMap = new WeakMap();
    };
    ModelTransformMetadataService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService])
    ], ModelTransformMetadataService);
    return ModelTransformMetadataService;
}());

exports.ModelTransformMetadataService = ModelTransformMetadataService;

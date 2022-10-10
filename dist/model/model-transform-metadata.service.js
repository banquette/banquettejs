/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { getSymbolDescription } from '@banquette/utils-object/get-symbol-description';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ObjectCtor, Wildcard } from './constants.js';
import { ModelMetadataService } from './model-metadata.service.js';
import { ensureCompleteTransformer } from './utils.js';

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
            if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
                output = Object.assign({}, transforms[type], output);
            }
            ctor = Object.getPrototypeOf(ctor);
        } while (ctor && ctor !== ObjectCtor);
        return output;
    };
    /**
     * Try to get a wildcard transformer.
     */
    ModelTransformMetadataService.prototype.getWildcard = function (identifier, type) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            return transforms[type][Wildcard] || null;
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
        if (isNullOrUndefined(transforms)) {
            transforms = {};
        }
        if (isUndefined(transforms[type])) {
            transforms[type] = {};
        }
        var properties = transforms[type];
        if (!isUndefined(properties[property]) && property !== Wildcard) {
            throw new UsageException("Another transformer for \"".concat(getSymbolDescription(type), "\" is already registered for \"").concat(ctor.name, "::").concat(property, "\".\n                Please call \"replace()\" instead if you want to override it."));
        }
        properties[property] = ensureCompleteTransformer(transformer);
        this.transformersMap.set(ctor, transforms);
    };
    /**
     * Register a transformer that will match all properties that don't have a transformer
     * specifically register for this type of transform.
     *
     * Warning, but doing this every property of the object you will transform will be included, all the time.
     */
    ModelTransformMetadataService.prototype.registerWildcard = function (identifier, type, transformer) {
        this.register(identifier, type, Wildcard, transformer);
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
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            delete transforms[type][property];
            this.transformersMap.set(ctor, transforms);
        }
    };
    /**
     * Remove a wildcard transformer.
     */
    ModelTransformMetadataService.prototype.removeWildcard = function (identifier, type) {
        this.remove(identifier, type, Wildcard);
    };
    /**
     * Get the validator of a model property.
     */
    ModelTransformMetadataService.prototype.get = function (identifier, type, property) {
        var ctor = this.modelMetadata.resolveAlias(identifier);
        var transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
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
    ModelTransformMetadataService = __decorate([
        Service(),
        __param(0, Inject(ModelMetadataService)),
        __metadata("design:paramtypes", [ModelMetadataService])
    ], ModelTransformMetadataService);
    return ModelTransformMetadataService;
}());

export { ModelTransformMetadataService };

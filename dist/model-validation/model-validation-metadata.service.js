/*!
 * Banquette ModelValidation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Container } from '@banquette/validation/type/container';

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
        if (isNullOrUndefined(properties)) {
            properties = {};
        }
        if (!isUndefined(properties[property])) {
            throw new UsageException("Another validator is already registered for \"".concat(ctor.name, "::").concat(property, "\".\n                Please call \"replace()\" instead if you want to override it."));
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
        if (!isNullOrUndefined(properties)) {
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
        if (!isNullOrUndefined(properties) && !isUndefined(properties[property])) {
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
        return !isNullOrUndefined(properties) ? Container(properties) : null;
    };
    ModelValidationMetadataService = __decorate([
        Service(),
        __param(0, Inject(ModelMetadataService)),
        __metadata("design:paramtypes", [ModelMetadataService])
    ], ModelValidationMetadataService);
    return ModelValidationMetadataService;
}());

export { ModelValidationMetadataService };

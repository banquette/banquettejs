/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from './_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isString } from '@banquette/utils-type/is-string';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ObjectCtor } from './constants.js';
import { ModelAliasNotFoundException } from './exception/model-alias-not-found.exception.js';

var ModelMetadataService = /** @class */ (function () {
    function ModelMetadataService() {
        /**
         * Map between string or symbol aliases and their model constructor.
         */
        this.aliases = {};
        /**
         * Map between string or symbol aliases and their model constructor.
         */
        this.factories = new WeakMap();
        /**
         * Holds relations between models.
         */
        this.relations = new WeakMap();
    }
    ModelMetadataService_1 = ModelMetadataService;
    /**
     * Define a custom factory that should be used any time a new instance of the model is created.
     */
    ModelMetadataService.prototype.registerFactory = function (ctor, factory) {
        this.factories.set(ctor, factory);
    };
    /**
     * Get the factory to use to create a new instance of a model.
     */
    ModelMetadataService.prototype.getFactory = function (ctor) {
        var factory = this.factories.get(ctor);
        if (!isFunction(factory)) {
            return function () { return new ctor(); };
        }
        return factory;
    };
    /**
     * Register one or multiple aliases for a model constructor.
     */
    ModelMetadataService.prototype.registerAlias = function (ctor, alias) {
        var aliases = ensureArray(alias);
        for (var _i = 0, aliases_1 = aliases; _i < aliases_1.length; _i++) {
            var item = aliases_1[_i];
            if (!isUndefined(this.aliases[item]) && this.aliases[item] !== ctor) {
                throw new UsageException("The alias \"".concat(item, "\" is already in used by \"").concat(this.aliases[item].name, "\"."));
            }
            this.aliases[item] = ctor;
        }
    };
    /**
     * Get the model constructor corresponding to an alias identifier.
     */
    ModelMetadataService.prototype.resolveAlias = function (identifier) {
        if (!ModelMetadataService_1.IsAlias(identifier)) {
            return identifier;
        }
        if (isUndefined(this.aliases[identifier])) {
            throw new ModelAliasNotFoundException(identifier, "The model alias \"".concat(ensureString(identifier), "\" doesn't exist."));
        }
        return this.aliases[identifier];
    };
    /**
     * Register a relation between to types of models through a property.
     */
    ModelMetadataService.prototype.registerRelation = function (from, property, to) {
        var fromCtor = this.resolveAlias(from);
        if (isUndefined(to)) {
            throw new UsageException("Unable to register relation of property \"".concat(property, "\" of model \"").concat(fromCtor.name, "\". ") +
                "You may have a circular dependency. Try to register a string alias instead.");
        }
        if (!this.relations.has(fromCtor)) {
            this.relations.set(fromCtor, {});
        }
        var relations = this.relations.get(fromCtor);
        if (!isUndefined(relations[property]) && this.resolveAlias(to) !== this.resolveAlias(relations[property])) {
            throw new UsageException("Two conflicting relations have been defined for \"".concat(property, "\" of model \"").concat(fromCtor.name, "\"."));
        }
        relations[property] = to;
        this.relations.set(fromCtor, relations);
    };
    /**
     * Try to get the related model constructor for a property.
     * If the property is not a relation, null is returned.
     */
    ModelMetadataService.prototype.getRelation = function (identifier, property) {
        var ctor = this.resolveAlias(identifier);
        do {
            var relations = this.relations.get(ctor);
            if (!isNullOrUndefined(relations) && !isUndefined(relations[property])) {
                return this.resolveAlias(relations[property]);
            }
            ctor = Object.getPrototypeOf(ctor);
        } while (ctor && ctor !== ObjectCtor);
        return null;
    };
    ModelMetadataService.prototype.clear = function () {
        this.clearAliases();
        this.clearFactories();
        this.clearRelations();
    };
    /**
     * Remove all known aliases.
     */
    ModelMetadataService.prototype.clearAliases = function () {
        this.aliases = {};
    };
    /**
     * Remove all known factories.
     */
    ModelMetadataService.prototype.clearFactories = function () {
        this.factories = new WeakMap();
    };
    /**
     * Remove all known relations.
     */
    ModelMetadataService.prototype.clearRelations = function () {
        this.relations = new WeakMap();
    };
    /**
     * Test if the input is a model alias.
     */
    ModelMetadataService.IsAlias = function (identifier) {
        return isString(identifier) || isSymbol(identifier);
    };
    var ModelMetadataService_1;
    ModelMetadataService = ModelMetadataService_1 = __decorate([
        Service()
    ], ModelMetadataService);
    return ModelMetadataService;
}());

export { ModelMetadataService };

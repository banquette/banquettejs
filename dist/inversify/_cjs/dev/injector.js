/*!
 * Banquette Inversify v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var inversify = require('inversify');

var PARAM_TYPES = "inversify:paramtypes";
var InversifyAdapter = /** @class */ (function () {
    function InversifyAdapter(container) {
        if (isUndefined.isUndefined(container)) {
            this.container = new inversify.Container();
        }
    }
    /**
     * @inheritDoc
     */
    InversifyAdapter.prototype.getContainer = function () {
        return this.container;
    };
    /**
     * @inheritDoc
     */
    InversifyAdapter.prototype.get = function (identifier) {
        return this.container.get(identifier);
    };
    /**
     * @inheritDoc
     */
    InversifyAdapter.prototype.getMultiple = function (tag) {
        var output = [];
        var added = [];
        var tags = ensureArray.ensureArray(tag);
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var tag_1 = tags_1[_i];
            var results = this.container.getAll(tag_1);
            for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
                var result = results_1[_a];
                var proto = isObject.isObject(result) ? Object.getPrototypeOf(result) : null;
                if (!proto || added.indexOf(proto.constructor) < 0) {
                    output.push(result);
                    added.push(proto.constructor);
                }
            }
        }
        return output;
    };
    /**
     * @inheritDoc
     */
    InversifyAdapter.prototype.has = function (identifier) {
        return this.container.isBound(identifier);
    };
    /**
     * @inheritDoc
     */
    InversifyAdapter.prototype.register = function (metadata) {
        var identifiers = [metadata.identifier].concat(metadata.tags);
        for (var _i = 0, identifiers_1 = identifiers; _i < identifiers_1.length; _i++) {
            var identifier = identifiers_1[_i];
            var binding = this.container.bind(identifier).to(metadata.ctor);
            if (metadata.singleton) {
                binding.inSingletonScope();
            }
            else {
                binding.inTransientScope();
            }
        }
        for (var i = 0; i < metadata.constructorDependencies.length; ++i) {
            var dependency = metadata.constructorDependencies[i];
            if (dependency.eager !== null) {
                inversify.inject(dependency.eager)(metadata.ctor, undefined, i);
            }
            else if (dependency.lazy !== null) {
                inversify.inject(new inversify.LazyServiceIdentifer(dependency.lazy))(metadata.ctor, undefined, i);
            }
            else if (dependency.tags !== null) {
                inversify.multiInject(dependency.tags[0])(metadata.ctor, undefined, i);
            }
        }
        for (var _a = 0, _b = Object.keys(metadata.propertiesDependencies); _a < _b.length; _a++) {
            var propertyName = _b[_a];
            var type = metadata.propertiesDependencies[propertyName].type;
            var decorator = null;
            if (type.eager !== null) {
                decorator = inversify.inject(type.eager);
            }
            else {
                decorator = inversify.inject(new inversify.LazyServiceIdentifer(type.lazy));
            }
            decorator(metadata.ctor, propertyName, metadata.propertiesDependencies[propertyName].parameterIndex);
        }
        this.applyInjectable(metadata);
    };
    InversifyAdapter.prototype.applyInjectable = function (metadata) {
        var currentCtor = metadata.ctor;
        var objProto = Object.getPrototypeOf(Object);
        do {
            if (!Reflect.hasOwnMetadata(PARAM_TYPES, currentCtor)) {
                inversify.injectable()(currentCtor);
            }
        } while ((currentCtor = Object.getPrototypeOf(currentCtor)) !== objProto);
    };
    return InversifyAdapter;
}());

exports.InversifyAdapter = InversifyAdapter;

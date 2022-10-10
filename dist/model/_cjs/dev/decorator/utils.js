/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getFunctionArguments = require('@banquette/utils-reflection/_cjs/dev/get-function-arguments');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var modelMetadata_service = require('../model-metadata.service.js');
var modelTransformMetadata_service = require('../model-transform-metadata.service.js');
var model = require('../transformer/type/model.js');

var transformMetadata = injector.Injector.Get(modelTransformMetadata_service.ModelTransformMetadataService);
var modelMetadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
/**
 * Utility function that ensures the decorator has been set on a property and which
 * resolves the argument name if set on a constructor argument.
 */
function propertyDecorator(cb, errorMessage) {
    if (errorMessage === void 0) { errorMessage = 'This decorator can only be used on properties.'; }
    return function (prototypeOrCtor, propertyKey, index) {
        var ctor = prototypeOrCtor;
        if (isUndefined.isUndefined(propertyKey) && isNumber.isNumber(index)) {
            var names = getFunctionArguments.getFunctionArguments(prototypeOrCtor);
            propertyKey = names[index];
        }
        else {
            ctor = prototypeOrCtor.constructor;
        }
        if (!isType.isType(propertyKey, isNonEmptyString.isNonEmptyString) || isFunction.isFunction(ctor.prototype[propertyKey])) {
            throw new usage_exception.UsageException(errorMessage);
        }
        return cb(ctor, propertyKey);
    };
}
function createTransformableDecorator(type, transformer) {
    return propertyDecorator(function (ctor, propertyKey) {
        transformMetadata.replace(ctor, type, propertyKey, transformer);
    }, 'You can only apply a transform decorator on properties.');
}
function createRelationAwareTransformableDecorator(type, transformer, defaultTransformer) {
    var apply = function (prototype, propertyKey, transformer) {
        var transformable = createTransformableDecorator(type, transformer);
        transformable(prototype, propertyKey);
    };
    return function (prototype, propertyKey) {
        // Register the property once synchronously.
        apply(prototype, propertyKey, transformer || defaultTransformer);
        if (isUndefined.isUndefined(transformer)) {
            // If no transformer has been given, schedule a microtask to let time for all decorators to execute.
            queueMicrotask(function () {
                // We can then search for the `@Relation()` decorator.
                // If a relation is found, force a `Model()` transformer.
                if (modelMetadata.getRelation(prototype.constructor, propertyKey) !== null) {
                    apply(prototype, propertyKey, model.Model());
                }
            });
        }
        else {
            apply(prototype, propertyKey, transformer);
        }
    };
}

exports.createRelationAwareTransformableDecorator = createRelationAwareTransformableDecorator;
exports.createTransformableDecorator = createTransformableDecorator;
exports.propertyDecorator = propertyDecorator;

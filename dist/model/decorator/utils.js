/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { getFunctionArguments } from '@banquette/utils-reflection/get-function-arguments';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNumber } from '@banquette/utils-type/is-number';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ModelMetadataService } from '../model-metadata.service.js';
import { ModelTransformMetadataService } from '../model-transform-metadata.service.js';
import { Model } from '../transformer/type/model.js';

var transformMetadata = Injector.Get(ModelTransformMetadataService);
var modelMetadata = Injector.Get(ModelMetadataService);
/**
 * Utility function that ensures the decorator has been set on a property and which
 * resolves the argument name if set on a constructor argument.
 */
function propertyDecorator(cb, errorMessage) {
    if (errorMessage === void 0) { errorMessage = 'This decorator can only be used on properties.'; }
    return function (prototypeOrCtor, propertyKey, index) {
        var ctor = prototypeOrCtor;
        if (isUndefined(propertyKey) && isNumber(index)) {
            var names = getFunctionArguments(prototypeOrCtor);
            propertyKey = names[index];
        }
        else {
            ctor = prototypeOrCtor.constructor;
        }
        if (!isType(propertyKey, isNonEmptyString) || isFunction(ctor.prototype[propertyKey])) {
            throw new UsageException(errorMessage);
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
        if (isUndefined(transformer)) {
            // If no transformer has been given, schedule a microtask to let time for all decorators to execute.
            queueMicrotask(function () {
                // We can then search for the `@Relation()` decorator.
                // If a relation is found, force a `Model()` transformer.
                if (modelMetadata.getRelation(prototype.constructor, propertyKey) !== null) {
                    apply(prototype, propertyKey, Model());
                }
            });
        }
        else {
            apply(prototype, propertyKey, transformer);
        }
    };
}

export { createRelationAwareTransformableDecorator, createTransformableDecorator, propertyDecorator };

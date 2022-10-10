/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var modelMetadata_service = require('../../model-metadata.service.js');
var transformContext = require('../transform-context.js');
var transform_service = require('../transform.service.js');

var metadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
/**
 * Create a new TransformContext that will be the root of the next transformation.
 */
function createSubContext(context, identifier) {
    var ctor = metadata.resolveAlias(identifier);
    return new transformContext.TransformContext(context, context.type, ctor, context.value, context.property);
}
/**
 * Call the transform service that will execute the appropriate root transformer for the context.
 */
function Model() {
    var getIdentifier = function (context) {
        context = context.getHighestContextWithProperty();
        if (!context.property) {
            throw new usage_exception.UsageException('Unable to resolve the relation. The "Model" transformer can only be applied on properties.');
        }
        var ctor = metadata.getRelation(context.ctor, context.property);
        if (ctor === null) {
            throw new usage_exception.UsageException("No relation has been defined for \"".concat(context.ctor.name, "::").concat(context.property, "\".\n                Please define a \"@Relation()\" decorator on \"").concat(context.property, "\"."));
        }
        return ctor;
    };
    return {
        /**
         * @inheritDoc
         */
        transform: function (context) {
            if (isNullOrUndefined.isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return injector.Injector.Get(transform_service.TransformService).transform(createSubContext(context, getIdentifier(context)));
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            if (isNullOrUndefined.isNullOrUndefined(context.value)) {
                context.result.setResult(null);
                return context.result;
            }
            return injector.Injector.Get(transform_service.TransformService).transformInverse(createSubContext(context, getIdentifier(context)));
        }
    };
}

exports.Model = Model;

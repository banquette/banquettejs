/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var modelMetadata_service = require('../../model-metadata.service.js');
var utils = require('../../utils.js');
var transformContext = require('../transform-context.js');
var transformPipeline = require('../transform-pipeline.js');
var model = require('./model.js');
var raw = require('./raw.js');

var modelMetadata = null;
/**
 * Apply a transformer to a collection of values.
 */
function Collection(transformer) {
    var apply = function (fnName, context) {
        if (isUndefined.isUndefined(transformer)) {
            if (modelMetadata === null) {
                modelMetadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
            }
            context = context.getHighestContextWithProperty();
            transformer = context.property !== null && modelMetadata.getRelation(context.ctor, context.property) ? model.Model() : raw.Raw();
        }
        var completeTransformer = utils.ensureCompleteTransformer(transformer);
        if (!isArray.isArray(context.value)) {
            context.result.setResult(isNullOrUndefined.isNullOrUndefined(context.value) ? context.value : []);
            return;
        }
        var results = {};
        var transformableProperties = {};
        for (var i = 0; i < context.value.length; ++i) {
            transformableProperties[i + ''] = completeTransformer;
        }
        var pipeline = new transformPipeline.TransformPipeline(context.result, transformableProperties);
        pipeline.forEach(function (property, transformer) {
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value[property], property);
            return transformer[fnName](subContext);
        }, function (property, subResult) {
            results[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            var output = [];
            for (var i = 0; i < context.value.length; ++i) {
                output.push(results[i + '']);
            }
            context.result.setResult(output);
        });
    };
    return {
        transform: function (context) {
            apply('transform', context);
            return context.result;
        },
        transformInverse: function (context) {
            apply('transformInverse', context);
            return context.result;
        }
    };
}

exports.Collection = Collection;

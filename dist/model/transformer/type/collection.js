/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { isArray } from '@banquette/utils-type/is-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ModelMetadataService } from '../../model-metadata.service.js';
import { ensureCompleteTransformer } from '../../utils.js';
import { TransformContext } from '../transform-context.js';
import { TransformPipeline } from '../transform-pipeline.js';
import { Model } from './model.js';
import { Raw } from './raw.js';

var modelMetadata = null;
/**
 * Apply a transformer to a collection of values.
 */
function Collection(transformer) {
    var apply = function (fnName, context) {
        if (isUndefined(transformer)) {
            if (modelMetadata === null) {
                modelMetadata = Injector.Get(ModelMetadataService);
            }
            context = context.getHighestContextWithProperty();
            transformer = context.property !== null && modelMetadata.getRelation(context.ctor, context.property) ? Model() : Raw();
        }
        var completeTransformer = ensureCompleteTransformer(transformer);
        if (!isArray(context.value)) {
            context.result.setResult(isNullOrUndefined(context.value) ? context.value : []);
            return;
        }
        var results = {};
        var transformableProperties = {};
        for (var i = 0; i < context.value.length; ++i) {
            transformableProperties[i + ''] = completeTransformer;
        }
        var pipeline = new TransformPipeline(context.result, transformableProperties);
        pipeline.forEach(function (property, transformer) {
            var subContext = new TransformContext(context, context.type, context.ctor, context.value[property], property);
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

export { Collection };

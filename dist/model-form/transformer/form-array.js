/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { FormArray as FormArray$1 } from '@banquette/form/form-array';
import { TransformContext } from '@banquette/model/transformer/transform-context';
import { TransformPipeline } from '@banquette/model/transformer/transform-pipeline';
import { ensureCompleteTransformer } from '@banquette/model/utils';
import { isArray } from '@banquette/utils-type/is-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FormRelatedTransformers, FormArrayTransformerSymbol } from '../contants.js';
import { FormComponentFactory } from '../form-component.factory.js';
import { FormControl } from './form-control.js';

var factory = Injector.Get(FormComponentFactory);
/**
 * Transform the input array into a FormArray.
 */
function FormArray(transformer) {
    if (transformer === void 0) { transformer = FormControl(); }
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    var completeTransformer = ensureCompleteTransformer(transformer);
    return {
        type: FormArrayTransformerSymbol,
        /**
         * @inheritDoc
         */
        getChild: function () {
            return completeTransformer;
        },
        /**
         * @inheritDoc
         */
        transform: function (context) {
            if (!isArray(context.value)) {
                var formArray = factory.createFormArray(context.ctor, context.property);
                context.result.setResult(formArray);
                return context.result;
            }
            var results = {};
            var transformableProperties = {};
            for (var i = 0; i < context.value.length; ++i) {
                transformableProperties[i + ''] = completeTransformer;
            }
            var pipeline = new TransformPipeline(context.result, transformableProperties);
            pipeline.forEach(function (property, transformer) {
                var subContext = new TransformContext(context, context.type, context.ctor, context.value[parseInt(property, 10)], property);
                return transformer.transform(subContext);
            }, function (property, subResult) {
                results[property] = subResult.result;
            });
            pipeline.onFinish(function () {
                var output = factory.createFormArray(context.ctor, context.property);
                var keys = Object.keys(results).sort();
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    output.append(results[key]);
                }
                context.result.setResult(output);
            });
            return context.result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            if (!(context.value instanceof FormArray$1)) {
                context.result.setResult([]);
                return context.result;
            }
            var transformableProperties = {};
            for (var i = 0; i < context.value.length; ++i) {
                transformableProperties[i + ''] = completeTransformer;
            }
            var results = {};
            var pipeline = new TransformPipeline(context.result, transformableProperties);
            pipeline.forEach(function (property, transformer) {
                var subContext = new TransformContext(context, context.type, context.ctor, context.value.get(parseInt(property, 10)), property);
                return transformer.transformInverse(subContext);
            }, function (property, subResult) {
                results[property] = subResult.result;
            });
            pipeline.onFinish(function () {
                var output = [];
                for (var _i = 0, _a = Object.keys(results).sort(); _i < _a.length; _i++) {
                    var key = _a[_i];
                    output.push(results[key]);
                }
                context.result.setResult(output);
            });
            return context.result;
        }
    };
}

export { FormArray };

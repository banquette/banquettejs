/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var formArray = require('@banquette/form/_cjs/dev/form-array');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var transformPipeline = require('@banquette/model/_cjs/dev/transformer/transform-pipeline');
var utils = require('@banquette/model/_cjs/dev/utils');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var contants = require('../contants.js');
var formComponent_factory = require('../form-component.factory.js');
var formControl = require('./form-control.js');

var factory = injector.Injector.Get(formComponent_factory.FormComponentFactory);
/**
 * Transform the input array into a FormArray.
 */
function FormArray(transformer) {
    if (transformer === void 0) { transformer = formControl.FormControl(); }
    if (isUndefined.isUndefined(transformer.type) || contants.FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = formControl.FormControl(transformer);
    }
    var completeTransformer = utils.ensureCompleteTransformer(transformer);
    return {
        type: contants.FormArrayTransformerSymbol,
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
            if (!isArray.isArray(context.value)) {
                var formArray = factory.createFormArray(context.ctor, context.property);
                context.result.setResult(formArray);
                return context.result;
            }
            var results = {};
            var transformableProperties = {};
            for (var i = 0; i < context.value.length; ++i) {
                transformableProperties[i + ''] = completeTransformer;
            }
            var pipeline = new transformPipeline.TransformPipeline(context.result, transformableProperties);
            pipeline.forEach(function (property, transformer) {
                var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value[parseInt(property, 10)], property);
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
            if (!(context.value instanceof formArray.FormArray)) {
                context.result.setResult([]);
                return context.result;
            }
            var transformableProperties = {};
            for (var i = 0; i < context.value.length; ++i) {
                transformableProperties[i + ''] = completeTransformer;
            }
            var results = {};
            var pipeline = new transformPipeline.TransformPipeline(context.result, transformableProperties);
            pipeline.forEach(function (property, transformer) {
                var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value.get(parseInt(property, 10)), property);
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

exports.FormArray = FormArray;

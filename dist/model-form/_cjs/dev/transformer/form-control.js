/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var raw = require('@banquette/model/_cjs/dev/transformer/type/raw');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var contants = require('../contants.js');
var formComponent_factory = require('../form-component.factory.js');
var form = require('./root/form.js');
var utils = require('./utils.js');

var factory = injector.Injector.Get(formComponent_factory.FormComponentFactory);
/**
 * Create a FormControl object containing the input value.
 */
function FormControl(transformer) {
    if (transformer === void 0) { transformer = raw.Raw(); }
    if (utils.isFormTransformer(transformer)) {
        throw new usage_exception.UsageException('A FormControl transformer cannot contain a form transformer.');
    }
    return {
        type: contants.FormControlTransformerSymbol,
        /**
         * @inheritDoc
         */
        getChild: function () {
            return transformer;
        },
        /**
         * @inheritDoc
         */
        transform: function (context) {
            if (context.property === null) {
                throw new usage_exception.UsageException('The "FormControl" transformer can only be applied on properties.');
            }
            if (!isUndefined.isUndefined(transformer.transform)) {
                var result_1 = transformer.transform(context);
                if (result_1.localPromise !== null) {
                    result_1.delayResponse((new Promise(function (resolve, reject) {
                        result_1.localPromise.then(resolve).catch(reject);
                    })).then(function () {
                        result_1.setResult(factory.createFormControl(context.ctor, context.property, result_1.result));
                    }));
                }
                else {
                    result_1.setResult(factory.createFormControl(context.ctor, context.property, result_1.result));
                }
                return result_1;
            }
            context.result.setResult(factory.createFormControl(context.ctor, context.property, context.value));
            return context.result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            var value = context.value.value;
            if (!isUndefined.isUndefined(transformer.transformInverse)) {
                var result_2 = transformer.transformInverse(new transformContext.TransformContext(context, form.FormTransformerSymbol, context.ctor, value, context.property));
                if (result_2.localPromise !== null) {
                    result_2.delayResponse((new Promise(function (resolve, reject) {
                        result_2.localPromise.then(resolve).catch(reject);
                    })).then(function () {
                        result_2.setResult(result_2.result);
                    }));
                }
                else {
                    result_2.setResult(result_2.result);
                }
                return result_2;
            }
            else {
                context.result.setResult(value);
            }
            return context.result;
        }
    };
}

exports.FormControl = FormControl;

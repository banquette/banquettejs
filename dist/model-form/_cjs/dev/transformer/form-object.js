/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var formObject = require('@banquette/form/_cjs/dev/form-object');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var model = require('@banquette/model/_cjs/dev/transformer/type/model');
var utils = require('@banquette/model/_cjs/dev/utils');
var contants = require('../contants.js');
var formComponent_factory = require('../form-component.factory.js');

var factory = injector.Injector.Get(formComponent_factory.FormComponentFactory);
/**
 * Transform the input object into a FormObject.
 *
 * Because this calls a root transformer, the transform service is responsible for calling the good one.
 * So this transformer is actually an alias of the "Model" transformer.
 *
 * It is kept as a separate transformer to make things clearer for the end user.
 */
function FormObject() {
    var modelTransformer = utils.ensureCompleteTransformer(model.Model());
    return {
        type: contants.FormObjectTransformerSymbol,
        /**
         * @inheritDoc
         */
        getChild: function () {
            return modelTransformer;
        },
        /**
         * @inheritDoc
         */
        transform: function (context) {
            var result = modelTransformer.transform(context);
            if (result.result === null) {
                result.setResult(factory.createFormObject(context.ctor, context.property));
            }
            return result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            if (!(context.value instanceof formObject.FormObject) || !context.value.length) {
                context = new transformContext.TransformContext(context.parent, context.type, context.ctor, null, context.property);
            }
            return modelTransformer.transformInverse(context);
        }
    };
}

exports.FormObject = FormObject;

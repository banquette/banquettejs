/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constants = require('../../../constants.js');
var transformContext = require('../../transform-context.js');
var abstractRootTransformer = require('./abstract-root-transformer.js');

var PojoTransformerSymbol = Symbol('pojo');
var PojoTransformer = /** @class */ (function (_super) {
    _tslib.__extends(PojoTransformer, _super);
    function PojoTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    PojoTransformer.prototype.getTransformerSymbol = function () {
        return PojoTransformerSymbol;
    };
    /**
     * @inheritDoc
     */
    PojoTransformer.prototype.doTransform = function (context, pipeline) {
        var result = {};
        pipeline.forEach(function (property, transformer) {
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value[property], property);
            return transformer.transform(subContext);
        }, function (property, subResult) {
            result[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(result);
        });
        return context.result;
    };
    /**
     * @inheritDoc
     */
    PojoTransformer.prototype.doTransformInverse = function (context, model, pipeline) {
        pipeline.forEach(function (property, transformer) {
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, isObject.isObject(context.value) ? context.value[property] : null, property);
            return transformer.transformInverse(subContext);
        }, function (property, subResult) {
            model[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(model);
        });
        return context.result;
    };
    PojoTransformer = _tslib.__decorate([
        module_decorator.Module(constants.ModelTransformerTag)
    ], PojoTransformer);
    return PojoTransformer;
}(abstractRootTransformer.AbstractRootTransformer));

exports.PojoTransformer = PojoTransformer;
exports.PojoTransformerSymbol = PojoTransformerSymbol;

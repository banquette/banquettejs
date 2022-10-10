/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../../_virtual/_tslib.js';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { isObject } from '@banquette/utils-type/is-object';
import { ModelTransformerTag } from '../../../constants.js';
import { TransformContext } from '../../transform-context.js';
import { AbstractRootTransformer } from './abstract-root-transformer.js';

var PojoTransformerSymbol = Symbol('pojo');
var PojoTransformer = /** @class */ (function (_super) {
    __extends(PojoTransformer, _super);
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
            var subContext = new TransformContext(context, context.type, context.ctor, context.value[property], property);
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
            var subContext = new TransformContext(context, context.type, context.ctor, isObject(context.value) ? context.value[property] : null, property);
            return transformer.transformInverse(subContext);
        }, function (property, subResult) {
            model[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(model);
        });
        return context.result;
    };
    PojoTransformer = __decorate([
        Module(ModelTransformerTag)
    ], PojoTransformer);
    return PojoTransformer;
}(AbstractRootTransformer));

export { PojoTransformer, PojoTransformerSymbol };

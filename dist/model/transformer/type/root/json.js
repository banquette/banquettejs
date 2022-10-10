/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../../_virtual/_tslib.js';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { ModelTransformerTag } from '../../../constants.js';
import { InvalidJsonException } from '../../../exception/invalid-json.exception.js';
import { TransformContext } from '../../transform-context.js';
import { AbstractRootTransformer } from './abstract-root-transformer.js';

var JsonTransformerSymbol = Symbol('json');
var JsonTransformer = /** @class */ (function (_super) {
    __extends(JsonTransformer, _super);
    function JsonTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    JsonTransformer.prototype.getTransformerSymbol = function () {
        return JsonTransformerSymbol;
    };
    /**
     * @inheritDoc
     */
    JsonTransformer.prototype.doTransform = function (context, pipeline) {
        var result = {};
        pipeline.forEach(function (property, transformer) {
            var subContext = new TransformContext(context, context.type, context.ctor, context.value[property], property);
            return transformer.transform(subContext);
        }, function (property, subResult) {
            result[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            if (context.parent === null) {
                context.result.setResult(JSON.stringify(result));
            }
            else {
                context.result.setResult(result);
            }
        });
        return context.result;
    };
    /**
     * @inheritDoc
     */
    JsonTransformer.prototype.doTransformInverse = function (context, model, pipeline) {
        if (context.parent === null && !isString(context.value)) {
            throw new UsageException('Invalid input value for inverse transform. Expecting a string.');
        }
        var decoded = this.decodeValue(context);
        pipeline.forEach(function (property, transformer) {
            var subContext = new TransformContext(context, context.type, context.ctor, decoded[property], property);
            return transformer.transformInverse(subContext);
        }, function (property, subResult) {
            model[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(model);
        });
        return context.result;
    };
    /**
     * Try to decode the context's value as JSON.
     */
    JsonTransformer.prototype.decodeValue = function (context) {
        if (context.parent !== null) {
            return context.value;
        }
        try {
            var decoded = JSON.parse(context.value);
            if (isObject(decoded)) {
                return decoded;
            }
        }
        catch (e) {
            throw new InvalidJsonException('Failed to decode JSON string.', ExceptionFactory.EnsureException(e));
        }
        throw new InvalidJsonException('JSON string didn\'t output an object.');
    };
    JsonTransformer = __decorate([
        Module(ModelTransformerTag)
    ], JsonTransformer);
    return JsonTransformer;
}(AbstractRootTransformer));

export { JsonTransformer, JsonTransformerSymbol };

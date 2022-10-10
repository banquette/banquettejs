/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var constants = require('../../../constants.js');
var invalidJson_exception = require('../../../exception/invalid-json.exception.js');
var transformContext = require('../../transform-context.js');
var abstractRootTransformer = require('./abstract-root-transformer.js');

var JsonTransformerSymbol = Symbol('json');
var JsonTransformer = /** @class */ (function (_super) {
    _tslib.__extends(JsonTransformer, _super);
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
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value[property], property);
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
        if (context.parent === null && !isString.isString(context.value)) {
            throw new usage_exception.UsageException('Invalid input value for inverse transform. Expecting a string.');
        }
        var decoded = this.decodeValue(context);
        pipeline.forEach(function (property, transformer) {
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, decoded[property], property);
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
            if (isObject.isObject(decoded)) {
                return decoded;
            }
        }
        catch (e) {
            throw new invalidJson_exception.InvalidJsonException('Failed to decode JSON string.', exception_factory.ExceptionFactory.EnsureException(e));
        }
        throw new invalidJson_exception.InvalidJsonException('JSON string didn\'t output an object.');
    };
    JsonTransformer = _tslib.__decorate([
        module_decorator.Module(constants.ModelTransformerTag)
    ], JsonTransformer);
    return JsonTransformer;
}(abstractRootTransformer.AbstractRootTransformer));

exports.JsonTransformer = JsonTransformer;
exports.JsonTransformerSymbol = JsonTransformerSymbol;

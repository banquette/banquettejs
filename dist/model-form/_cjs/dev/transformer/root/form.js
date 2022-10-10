/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var formObject = require('@banquette/form/_cjs/dev/form-object');
var constants = require('@banquette/model/_cjs/dev/constants');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var modelTransformMetadata_service = require('@banquette/model/_cjs/dev/model-transform-metadata.service');
var model_factory_service = require('@banquette/model/_cjs/dev/model.factory.service');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var abstractRootTransformer = require('@banquette/model/_cjs/dev/transformer/type/root/abstract-root-transformer');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var formComponent_factory = require('../../form-component.factory.js');

var FormTransformerSymbol = Symbol('form-component');
var FormTransformer = /** @class */ (function (_super) {
    _tslib.__extends(FormTransformer, _super);
    function FormTransformer(modelMetadata, transformMetadata, modelFactory, formFactory) {
        var _this = _super.call(this, modelMetadata, transformMetadata, modelFactory) || this;
        _this.modelMetadata = modelMetadata;
        _this.transformMetadata = transformMetadata;
        _this.modelFactory = modelFactory;
        _this.formFactory = formFactory;
        return _this;
    }
    /**
     * @inheritDoc
     */
    FormTransformer.prototype.getTransformerSymbol = function () {
        return FormTransformerSymbol;
    };
    /**
     * @inheritDoc
     */
    FormTransformer.prototype.doTransform = function (context, pipeline) {
        var result = this.formFactory.createFormObject(context.ctor, context.property);
        pipeline.forEach(function (property, transformer) {
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value[property], property);
            return transformer.transform(subContext);
        }, function (property, subResult) {
            if (isObject.isObject(subResult.result)) {
                result.set(property, subResult.result);
            }
        });
        pipeline.onFinish(function () {
            context.result.setResult(result);
        });
        return context.result;
    };
    /**
     * @inheritDoc
     */
    FormTransformer.prototype.doTransformInverse = function (context, model, pipeline) {
        if (!(context.value instanceof formObject.FormObject)) {
            throw new usage_exception.UsageException('Invalid input value for inverse transform. Expecting a FormObject.');
        }
        pipeline.forEach(function (property, transformer) {
            if (!(context.value instanceof formObject.FormObject) || !context.value.has(property)) {
                context.result.setResult(null);
                return context.result;
            }
            var subContext = new transformContext.TransformContext(context, context.type, context.ctor, context.value.get(property), property);
            return transformer.transformInverse(subContext);
        }, function (property, subResult) {
            model[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(model);
        });
        return context.result;
    };
    FormTransformer = _tslib.__decorate([
        module_decorator.Module(constants.ModelTransformerTag),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__param(2, inject_decorator.Inject(model_factory_service.ModelFactoryService)),
        _tslib.__param(3, inject_decorator.Inject(formComponent_factory.FormComponentFactory)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService,
            model_factory_service.ModelFactoryService,
            formComponent_factory.FormComponentFactory])
    ], FormTransformer);
    return FormTransformer;
}(abstractRootTransformer.AbstractRootTransformer));

exports.FormTransformer = FormTransformer;
exports.FormTransformerSymbol = FormTransformerSymbol;

/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __param, __metadata } from '../../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { FormObject } from '@banquette/form/form-object';
import { ModelTransformerTag } from '@banquette/model/constants';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { ModelTransformMetadataService } from '@banquette/model/model-transform-metadata.service';
import { ModelFactoryService } from '@banquette/model/model.factory.service';
import { TransformContext } from '@banquette/model/transformer/transform-context';
import { AbstractRootTransformer } from '@banquette/model/transformer/type/root/abstract-root-transformer';
import { isObject } from '@banquette/utils-type/is-object';
import { FormComponentFactory } from '../../form-component.factory.js';

var FormTransformerSymbol = Symbol('form-component');
var FormTransformer = /** @class */ (function (_super) {
    __extends(FormTransformer, _super);
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
            var subContext = new TransformContext(context, context.type, context.ctor, context.value[property], property);
            return transformer.transform(subContext);
        }, function (property, subResult) {
            if (isObject(subResult.result)) {
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
        if (!(context.value instanceof FormObject)) {
            throw new UsageException('Invalid input value for inverse transform. Expecting a FormObject.');
        }
        pipeline.forEach(function (property, transformer) {
            if (!(context.value instanceof FormObject) || !context.value.has(property)) {
                context.result.setResult(null);
                return context.result;
            }
            var subContext = new TransformContext(context, context.type, context.ctor, context.value.get(property), property);
            return transformer.transformInverse(subContext);
        }, function (property, subResult) {
            model[property] = subResult.result;
        });
        pipeline.onFinish(function () {
            context.result.setResult(model);
        });
        return context.result;
    };
    FormTransformer = __decorate([
        Module(ModelTransformerTag),
        __param(0, Inject(ModelMetadataService)),
        __param(1, Inject(ModelTransformMetadataService)),
        __param(2, Inject(ModelFactoryService)),
        __param(3, Inject(FormComponentFactory)),
        __metadata("design:paramtypes", [ModelMetadataService,
            ModelTransformMetadataService,
            ModelFactoryService,
            FormComponentFactory])
    ], FormTransformer);
    return FormTransformer;
}(AbstractRootTransformer));

export { FormTransformer, FormTransformerSymbol };

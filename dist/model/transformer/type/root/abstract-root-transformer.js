/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from '../../../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { getSymbolDescription } from '@banquette/utils-object/get-symbol-description';
import { isCompound } from '@banquette/utils-type/is-compound';
import { isObject } from '@banquette/utils-type/is-object';
import { isScalar } from '@banquette/utils-type/is-scalar';
import { ModelMetadataService } from '../../../model-metadata.service.js';
import { ModelTransformMetadataService } from '../../../model-transform-metadata.service.js';
import { ModelFactoryService } from '../../../model.factory.service.js';
import { TransformPipeline } from '../../transform-pipeline.js';
import { ensureCompleteTransformer } from '../../../utils.js';

var AbstractRootTransformer = /** @class */ (function () {
    function AbstractRootTransformer(modelMetadata, transformMetadata, modelFactory) {
        this.modelMetadata = modelMetadata;
        this.transformMetadata = transformMetadata;
        this.modelFactory = modelFactory;
    }
    /**
     * @inheritDoc
     */
    AbstractRootTransformer.prototype.supports = function (context) {
        return context.type === this.getTransformerSymbol();
    };
    /**
     * @inheritDoc
     */
    /* final */ AbstractRootTransformer.prototype.transform = function (context) {
        var pipeline;
        var transformableProperties;
        try {
            transformableProperties = this.getTransformableProperties(context);
            pipeline = new TransformPipeline(context.result, transformableProperties);
        }
        catch (e) {
            throw new UsageException("Transform initialization failed for ".concat(context.ctor.name, "\n                (transformer: ").concat(getSymbolDescription(context.type)), ExceptionFactory.EnsureException(e));
        }
        return this.doTransform(context, pipeline);
    };
    /**
     * @inheritDoc
     */
    /* final */ AbstractRootTransformer.prototype.transformInverse = function (context) {
        var instance;
        var pipeline;
        try {
            instance = this.modelFactory.create(context.ctor, context);
            pipeline = new TransformPipeline(context.result, this.getTransformableProperties(context));
        }
        catch (e) {
            throw new UsageException("Transform inverse initialization failed for ".concat(context.ctor.name, "\n                (transformer: ").concat(getSymbolDescription(context.type)), ExceptionFactory.EnsureException(e));
        }
        return this.doTransformInverse(context, instance, pipeline);
    };
    /**
     * Get the map of transformable properties and their respective transformer.
     */
    AbstractRootTransformer.prototype.getTransformableProperties = function (context) {
        if (context.ctor === Object && isObject(context.value)) {
            var wildcardTransformer = this.transformMetadata.getWildcard(context.ctor, this.getTransformerSymbol());
            if (wildcardTransformer === null) {
                return {};
            }
            var completeTransformer_1 = ensureCompleteTransformer(wildcardTransformer);
            return Object.keys(context.value).filter(function (property) {
                var v = context.value[property];
                return isScalar(v) || isCompound(v);
            }).reduce(function (output, property) {
                output[property] = completeTransformer_1;
                return output;
            }, {});
        }
        return this.transformMetadata.getAll(context.ctor, this.getTransformerSymbol());
    };
    AbstractRootTransformer = __decorate([
        __param(0, Inject(ModelMetadataService)),
        __param(1, Inject(ModelTransformMetadataService)),
        __param(2, Inject(ModelFactoryService)),
        __metadata("design:paramtypes", [ModelMetadataService,
            ModelTransformMetadataService,
            ModelFactoryService])
    ], AbstractRootTransformer);
    return AbstractRootTransformer;
}());

export { AbstractRootTransformer };

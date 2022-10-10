/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getSymbolDescription = require('@banquette/utils-object/_cjs/dev/get-symbol-description');
var isCompound = require('@banquette/utils-type/_cjs/dev/is-compound');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isScalar = require('@banquette/utils-type/_cjs/dev/is-scalar');
var modelMetadata_service = require('../../../model-metadata.service.js');
var modelTransformMetadata_service = require('../../../model-transform-metadata.service.js');
var model_factory_service = require('../../../model.factory.service.js');
var transformPipeline = require('../../transform-pipeline.js');
var utils = require('../../../utils.js');

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
            pipeline = new transformPipeline.TransformPipeline(context.result, transformableProperties);
        }
        catch (e) {
            throw new usage_exception.UsageException("Transform initialization failed for ".concat(context.ctor.name, "\n                (transformer: ").concat(getSymbolDescription.getSymbolDescription(context.type)), exception_factory.ExceptionFactory.EnsureException(e));
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
            pipeline = new transformPipeline.TransformPipeline(context.result, this.getTransformableProperties(context));
        }
        catch (e) {
            throw new usage_exception.UsageException("Transform inverse initialization failed for ".concat(context.ctor.name, "\n                (transformer: ").concat(getSymbolDescription.getSymbolDescription(context.type)), exception_factory.ExceptionFactory.EnsureException(e));
        }
        return this.doTransformInverse(context, instance, pipeline);
    };
    /**
     * Get the map of transformable properties and their respective transformer.
     */
    AbstractRootTransformer.prototype.getTransformableProperties = function (context) {
        if (context.ctor === Object && isObject.isObject(context.value)) {
            var wildcardTransformer = this.transformMetadata.getWildcard(context.ctor, this.getTransformerSymbol());
            if (wildcardTransformer === null) {
                return {};
            }
            var completeTransformer_1 = utils.ensureCompleteTransformer(wildcardTransformer);
            return Object.keys(context.value).filter(function (property) {
                var v = context.value[property];
                return isScalar.isScalar(v) || isCompound.isCompound(v);
            }).reduce(function (output, property) {
                output[property] = completeTransformer_1;
                return output;
            }, {});
        }
        return this.transformMetadata.getAll(context.ctor, this.getTransformerSymbol());
    };
    AbstractRootTransformer = _tslib.__decorate([
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__param(2, inject_decorator.Inject(model_factory_service.ModelFactoryService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService,
            model_factory_service.ModelFactoryService])
    ], AbstractRootTransformer);
    return AbstractRootTransformer;
}());

exports.AbstractRootTransformer = AbstractRootTransformer;

/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from '../_virtual/_tslib.js';
import { InjectMultiple } from '@banquette/dependency-injection/decorator/inject-multiple.decorator';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { getSymbolDescription } from '@banquette/utils-object/get-symbol-description';
import { isArray } from '@banquette/utils-type/is-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ModelTransformerTag } from '../constants.js';
import { NoCompatibleTransformerFoundException } from '../exception/no-compatible-transformer-found.exception.js';
import { TransformFailedException } from '../exception/transform-failed.exception.js';
import { ModelMetadataService } from '../model-metadata.service.js';
import { ModelTransformMetadataService } from '../model-transform-metadata.service.js';
import { TransformResult } from '../transform-result.js';
import { ensureCompleteModelTransformer } from '../utils.js';
import { TransformContext } from './transform-context.js';

var TransformService = /** @class */ (function () {
    function TransformService(modelMetadata, transformMetadata, transformers) {
        this.modelMetadata = modelMetadata;
        this.transformMetadata = transformMetadata;
        this.transformers = transformers;
        this.sortedTransformers = [];
    }
    TransformService.prototype.transform = function (modelInstanceOrParentContext, transformType, extra, wildcardTransformer) {
        var _this = this;
        if (!(modelInstanceOrParentContext instanceof TransformContext) && isArray(modelInstanceOrParentContext)) {
            return this.transformCollection(modelInstanceOrParentContext, transformType, extra, wildcardTransformer);
        }
        var parentContext = null;
        var ctor = null;
        if (modelInstanceOrParentContext instanceof TransformContext) {
            parentContext = modelInstanceOrParentContext;
            transformType = modelInstanceOrParentContext.type;
            ctor = modelInstanceOrParentContext.ctor;
            modelInstanceOrParentContext = parentContext.value;
        }
        var context = new TransformContext(parentContext, transformType, ctor || modelInstanceOrParentContext.constructor, modelInstanceOrParentContext, null, extra || {});
        return this.transformWithWildcard(wildcardTransformer, context, function () {
            return _this.getTransformer(context).transform(context);
        });
    };
    TransformService.prototype.transformInverse = function (parentContextOrValue, modelType, transformType, extra, wildcardTransformer) {
        var _this = this;
        if (!(parentContextOrValue instanceof TransformContext) && isArray(parentContextOrValue)) {
            return this.transformCollectionInverse(parentContextOrValue, modelType, transformType, extra, wildcardTransformer);
        }
        var parentContext = null;
        if (parentContextOrValue instanceof TransformContext) {
            parentContext = parentContextOrValue;
            modelType = parentContextOrValue.ctor;
            transformType = parentContextOrValue.type;
            parentContextOrValue = parentContext.value;
        }
        var modelCtor = this.modelMetadata.resolveAlias(modelType);
        var context = new TransformContext(parentContext, transformType, modelCtor, parentContextOrValue, null, extra || {});
        return this.transformWithWildcard(wildcardTransformer, context, function () {
            return _this.getTransformer(context).transformInverse(context);
        });
    };
    /**
     * Transform a model from a custom format to another custom format.
     */
    TransformService.prototype.transformTransversal = function (value, inverseTransformType, modelType, transformType) {
        var _this = this;
        return this.transformSequential([
            function () { return _this.transformInverse(value, modelType, inverseTransformType); },
            function (previous) { return _this.transform(previous.result, transformType); }
        ]);
    };
    /**
     * Do a series of transforms sequentially.
     */
    TransformService.prototype.transformSequential = function (sequence) {
        var result = new TransformResult();
        var currentIndex = -1;
        var lastResult = new TransformResult();
        var promiseResolve = null;
        var promiseReject = null;
        var next = function () {
            if (!isFunction(sequence[++currentIndex])) {
                result.setResult(lastResult.result);
                if (promiseResolve) {
                    promiseResolve();
                }
                return;
            }
            try {
                var subResult_1 = sequence[currentIndex](lastResult);
                if (subResult_1.promise) {
                    result.delayResponse(new Promise(function (resolve, reject) {
                        promiseResolve = resolve;
                        promiseReject = reject;
                    }));
                    subResult_1.promise.then(function () {
                        lastResult = subResult_1;
                        next();
                    }).catch(promiseReject);
                }
                else {
                    lastResult = subResult_1;
                    next();
                }
            }
            catch (e) {
                if (promiseReject !== null) {
                    promiseReject(e);
                }
                else {
                    throw e;
                }
                return;
            }
        };
        next();
        return result;
    };
    /**
     * Generic way to apply a transform to multiple items in parallel while handling asynchronicity and keeping results in order.
     */
    TransformService.prototype.transformParallel = function (items, callback) {
        var result = new TransformResult();
        var promises = [];
        var map = new WeakMap();
        var transformedItems = {};
        var buildFinalArray = function () {
            var output = [];
            for (var i = 0; i < items.length; ++i) {
                output.push(transformedItems[i]);
            }
            return output;
        };
        for (var i = 0; i < items.length; ++i) {
            var subResult = callback(items[i]);
            if (subResult.promise !== null) {
                promises.push(subResult.promise);
                // Transformers are executed in parallel and some items may be asynchronous while other not.
                // So to ensure the ordering is preserved, keep a map between the sub transform result and the item's index.
                map.set(subResult, i);
            }
            else {
                transformedItems[i] = subResult.result;
            }
        }
        if (promises.length > 0) {
            result.delayResponse(new Promise(function (resolve, reject) {
                Promise.all(promises).then(function (transformResults) {
                    for (var _i = 0, transformResults_1 = transformResults; _i < transformResults_1.length; _i++) {
                        var transformResult = transformResults_1[_i];
                        var index = map.get(transformResult);
                        if (!isUndefined(index)) {
                            transformedItems[index] = transformResult.result;
                        }
                    }
                    result.setResult(buildFinalArray());
                    resolve();
                }).catch(reject);
            }));
        }
        else {
            result.setResult(buildFinalArray());
        }
        return result;
    };
    /**
     * Call `transform` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    TransformService.prototype.transformCollection = function (items, transformType, extra, wildcardTransformer) {
        var _this = this;
        return this.transformParallel(items, function (item) {
            return _this.transform(item, transformType, extra, wildcardTransformer);
        });
    };
    /**
     * Call `transformInverse` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    TransformService.prototype.transformCollectionInverse = function (values, modelType, transformType, extra, wildcardTransformer) {
        var _this = this;
        return this.transformParallel(values, function (value) {
            return _this.transformInverse(value, modelType, transformType, extra, wildcardTransformer);
        });
    };
    /**
     * Get the list of available root transformers.
     */
    TransformService.prototype.getTransformers = function () {
        if (this.transformers.length !== this.sortedTransformers.length) {
            this.sortedTransformers = this.transformers.map(function (transformer) { return ensureCompleteModelTransformer(transformer); })
                .sort(function (a, b) {
                return b.getPriority() - a.getPriority();
            });
        }
        return this.sortedTransformers;
    };
    /**
     * Try to find the transformer corresponding to a type.
     */
    TransformService.prototype.getTransformer = function (context) {
        var transformers = this.getTransformers();
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var candidate = transformers_1[_i];
            if (candidate.supports(context)) {
                return candidate;
            }
        }
        throw new NoCompatibleTransformerFoundException(context, 'No compatible transformer has been found for this context.');
    };
    /**
     * Wrap a callback so a wildcard transformer can be applied if necessary.
     */
    TransformService.prototype.transformWithWildcard = function (wildcardTransformer, context, cb) {
        var oldWildcard = this.transformMetadata.getWildcard(context.ctor, context.type);
        if (!isNullOrUndefined(wildcardTransformer)) {
            this.transformMetadata.registerWildcard(context.ctor, context.type, wildcardTransformer);
        }
        var result = this.transformWithErrorHandling(context, cb);
        if (oldWildcard === null) {
            this.transformMetadata.removeWildcard(context.ctor, context.type);
        }
        else {
            this.transformMetadata.registerWildcard(context.ctor, context.type, oldWildcard);
        }
        return result;
    };
    /**
     * Wrap a callback to handle the possible throws.
     */
    TransformService.prototype.transformWithErrorHandling = function (context, cb) {
        try {
            return cb();
        }
        catch (e) {
            var exception = new TransformFailedException("Failed to transform \"".concat(context.ctor.name, "\" (transformer: ").concat(getSymbolDescription(context.type), ")."), ExceptionFactory.EnsureException(e));
            context.result.fail(exception);
            return context.result;
        }
    };
    TransformService = __decorate([
        Service(),
        __param(0, Inject(ModelMetadataService)),
        __param(1, Inject(ModelTransformMetadataService)),
        __param(2, InjectMultiple(ModelTransformerTag)),
        __metadata("design:paramtypes", [ModelMetadataService,
            ModelTransformMetadataService, Array])
    ], TransformService);
    return TransformService;
}());

export { TransformService };

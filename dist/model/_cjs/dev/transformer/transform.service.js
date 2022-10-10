/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var injectMultiple_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-multiple.decorator');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var getSymbolDescription = require('@banquette/utils-object/_cjs/dev/get-symbol-description');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('../constants.js');
var noCompatibleTransformerFound_exception = require('../exception/no-compatible-transformer-found.exception.js');
var transformFailed_exception = require('../exception/transform-failed.exception.js');
var modelMetadata_service = require('../model-metadata.service.js');
var modelTransformMetadata_service = require('../model-transform-metadata.service.js');
var transformResult = require('../transform-result.js');
var utils = require('../utils.js');
var transformContext = require('./transform-context.js');

var TransformService = /** @class */ (function () {
    function TransformService(modelMetadata, transformMetadata, transformers) {
        this.modelMetadata = modelMetadata;
        this.transformMetadata = transformMetadata;
        this.transformers = transformers;
        this.sortedTransformers = [];
    }
    TransformService.prototype.transform = function (modelInstanceOrParentContext, transformType, extra, wildcardTransformer) {
        var _this = this;
        if (!(modelInstanceOrParentContext instanceof transformContext.TransformContext) && isArray.isArray(modelInstanceOrParentContext)) {
            return this.transformCollection(modelInstanceOrParentContext, transformType, extra, wildcardTransformer);
        }
        var parentContext = null;
        var ctor = null;
        if (modelInstanceOrParentContext instanceof transformContext.TransformContext) {
            parentContext = modelInstanceOrParentContext;
            transformType = modelInstanceOrParentContext.type;
            ctor = modelInstanceOrParentContext.ctor;
            modelInstanceOrParentContext = parentContext.value;
        }
        var context = new transformContext.TransformContext(parentContext, transformType, ctor || modelInstanceOrParentContext.constructor, modelInstanceOrParentContext, null, extra || {});
        return this.transformWithWildcard(wildcardTransformer, context, function () {
            return _this.getTransformer(context).transform(context);
        });
    };
    TransformService.prototype.transformInverse = function (parentContextOrValue, modelType, transformType, extra, wildcardTransformer) {
        var _this = this;
        if (!(parentContextOrValue instanceof transformContext.TransformContext) && isArray.isArray(parentContextOrValue)) {
            return this.transformCollectionInverse(parentContextOrValue, modelType, transformType, extra, wildcardTransformer);
        }
        var parentContext = null;
        if (parentContextOrValue instanceof transformContext.TransformContext) {
            parentContext = parentContextOrValue;
            modelType = parentContextOrValue.ctor;
            transformType = parentContextOrValue.type;
            parentContextOrValue = parentContext.value;
        }
        var modelCtor = this.modelMetadata.resolveAlias(modelType);
        var context = new transformContext.TransformContext(parentContext, transformType, modelCtor, parentContextOrValue, null, extra || {});
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
        var result = new transformResult.TransformResult();
        var currentIndex = -1;
        var lastResult = new transformResult.TransformResult();
        var promiseResolve = null;
        var promiseReject = null;
        var next = function () {
            if (!isFunction.isFunction(sequence[++currentIndex])) {
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
        var result = new transformResult.TransformResult();
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
                        if (!isUndefined.isUndefined(index)) {
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
            this.sortedTransformers = this.transformers.map(function (transformer) { return utils.ensureCompleteModelTransformer(transformer); })
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
        throw new noCompatibleTransformerFound_exception.NoCompatibleTransformerFoundException(context, 'No compatible transformer has been found for this context.');
    };
    /**
     * Wrap a callback so a wildcard transformer can be applied if necessary.
     */
    TransformService.prototype.transformWithWildcard = function (wildcardTransformer, context, cb) {
        var oldWildcard = this.transformMetadata.getWildcard(context.ctor, context.type);
        if (!isNullOrUndefined.isNullOrUndefined(wildcardTransformer)) {
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
            var exception = new transformFailed_exception.TransformFailedException("Failed to transform \"".concat(context.ctor.name, "\" (transformer: ").concat(getSymbolDescription.getSymbolDescription(context.type), ")."), exception_factory.ExceptionFactory.EnsureException(e));
            context.result.fail(exception);
            return context.result;
        }
    };
    TransformService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__param(2, injectMultiple_decorator.InjectMultiple(constants.ModelTransformerTag)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService, Array])
    ], TransformService);
    return TransformService;
}());

exports.TransformService = TransformService;

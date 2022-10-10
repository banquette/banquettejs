/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var injectLazy_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-lazy.decorator');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var httpResponse = require('@banquette/http/_cjs/dev/http-response');
var constants = require('@banquette/model/_cjs/dev/constants');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var modelTransformMetadata_service = require('@banquette/model/_cjs/dev/model-transform-metadata.service');
var model_factory_service = require('@banquette/model/_cjs/dev/model.factory.service');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var transformPipeline = require('@banquette/model/_cjs/dev/transformer/transform-pipeline');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var pojo = require('@banquette/model/_cjs/dev/transformer/type/root/pojo');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var notEmpty = require('@banquette/validation/_cjs/dev/type/not-empty');
var apiEndpointStorage_service = require('../api-endpoint-storage.service.js');

var HttpTransformerSymbol = Symbol('http');
var HttpTransformer = /** @class */ (function (_super) {
    _tslib.__extends(HttpTransformer, _super);
    function HttpTransformer(modelMetadata, transformMetadata, modelFactory, endpointStorage, transformService) {
        var _this = _super.call(this, modelMetadata, transformMetadata, modelFactory) || this;
        _this.modelMetadata = modelMetadata;
        _this.transformMetadata = transformMetadata;
        _this.modelFactory = modelFactory;
        _this.endpointStorage = endpointStorage;
        _this.transformService = transformService;
        return _this;
    }
    /**
     * @inheritDoc
     */
    HttpTransformer.prototype.getTransformerSymbol = function () {
        return HttpTransformerSymbol;
    };
    /**
     * @inheritDoc
     */
    HttpTransformer.prototype.doTransform = function (context, pipeline) {
        if (context.parent !== null && context.parent.type === HttpTransformerSymbol) {
            return _super.prototype.doTransform.call(this, context, pipeline);
        }
        var _a = context.getValidatedExtra({
            endpoint: [notEmpty.NotEmpty(), null],
            parameters: [null, {}]
        }), endpoint = _a.endpoint, parameters = _a.parameters;
        var endpointObject = this.endpointStorage.getEndpoint(endpoint, context.ctor);
        _super.prototype.doTransform.call(this, context, pipeline);
        var respond = function (endpoint, payload) {
            for (var _i = 0, _a = Object.keys(payload); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!isUndefined.isUndefined(endpoint.params[prop]) && isUndefined.isUndefined(parameters[prop])) {
                    parameters[prop] = payload[prop];
                }
            }
            context.result.setResult(endpoint.buildRequest(payload, parameters));
            return context.result;
        };
        var localPromise = context.result.localPromise;
        if (localPromise === null) {
            return respond(endpointObject, context.result.result);
        }
        context.result.delayResponse(new Promise(function (resolve, reject) {
            localPromise.then(function () {
                resolve(respond(endpointObject, context.result.result));
            }).catch(reject);
        }));
        return context.result;
    };
    /**
     * @inheritDoc
     */
    HttpTransformer.prototype.doTransformInverse = function (context, model, pipeline) {
        var _this = this;
        if (context.parent !== null && context.parent.type === HttpTransformerSymbol) {
            return _super.prototype.doTransformInverse.call(this, context, model, pipeline);
        }
        if (!(context.value instanceof httpResponse.HttpResponse)) {
            throw new usage_exception.UsageException('The inverse transform of HttpTransformer expect an HttpResponse.');
        }
        var resolve = null;
        var reject = null;
        var delayResponse = function () {
            context.result.delayResponse(new Promise(function (_resolve, _reject) {
                resolve = _resolve;
                reject = _reject;
            }));
        };
        var transformResponseResult = function (result, done) {
            var model = _this.modelFactory.create(context.ctor, context);
            var contextClone = new transformContext.TransformContext(context, context.type, context.ctor, result, context.property, context.extra);
            var pipelineClone = new transformPipeline.TransformPipeline(contextClone.result, _this.getTransformableProperties(context));
            var subResult = _super.prototype.doTransformInverse.call(_this, contextClone, model, pipelineClone);
            if (subResult.promise !== null) {
                if (resolve === null) {
                    delayResponse();
                }
                subResult.promise.then(function () {
                    done(subResult);
                });
            }
            else {
                done(subResult);
            }
        };
        var transformResponse = function () {
            var hasMultipleResults = isArray.isArray(context.value.result);
            var results = hasMultipleResults ? context.value.result : [context.value.result];
            var subResults = [];
            var index = 0;
            var next = function () {
                if (index >= results.length) {
                    if (subResults.length > 0) {
                        context.result.setResult(hasMultipleResults ? subResults : subResults[0]);
                    }
                    if (resolve !== null) {
                        resolve();
                    }
                    return;
                }
                transformResponseResult(results[index++], function (subResult) {
                    if (subResult.error) {
                        context.result.fail(subResult.errorDetail);
                        if (reject !== null) {
                            reject(subResult.errorDetail);
                        }
                        return;
                    }
                    subResults.push(subResult.result);
                    next();
                });
            };
            next();
        };
        if (context.value.isPending && context.value.promise !== null) {
            delayResponse();
            context.value.promise.then(transformResponse);
        }
        else {
            transformResponse();
        }
        return context.result;
    };
    HttpTransformer = _tslib.__decorate([
        module_decorator.Module(constants.ModelTransformerTag),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__param(2, inject_decorator.Inject(model_factory_service.ModelFactoryService)),
        _tslib.__param(3, inject_decorator.Inject(apiEndpointStorage_service.ApiEndpointStorageService)),
        _tslib.__param(4, injectLazy_decorator.InjectLazy(function () { return transform_service.TransformService; })),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService,
            model_factory_service.ModelFactoryService,
            apiEndpointStorage_service.ApiEndpointStorageService,
            transform_service.TransformService])
    ], HttpTransformer);
    return HttpTransformer;
}(pojo.PojoTransformer));

exports.HttpTransformer = HttpTransformer;
exports.HttpTransformerSymbol = HttpTransformerSymbol;

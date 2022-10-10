/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __param, __metadata } from '../_virtual/_tslib.js';
import { InjectLazy } from '@banquette/dependency-injection/decorator/inject-lazy.decorator';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { HttpResponse } from '@banquette/http/http-response';
import { ModelTransformerTag } from '@banquette/model/constants';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { ModelTransformMetadataService } from '@banquette/model/model-transform-metadata.service';
import { ModelFactoryService } from '@banquette/model/model.factory.service';
import { TransformContext } from '@banquette/model/transformer/transform-context';
import { TransformPipeline } from '@banquette/model/transformer/transform-pipeline';
import { TransformService } from '@banquette/model/transformer/transform.service';
import { PojoTransformer } from '@banquette/model/transformer/type/root/pojo';
import { isArray } from '@banquette/utils-type/is-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { NotEmpty } from '@banquette/validation/type/not-empty';
import { ApiEndpointStorageService } from '../api-endpoint-storage.service.js';

var HttpTransformerSymbol = Symbol('http');
var HttpTransformer = /** @class */ (function (_super) {
    __extends(HttpTransformer, _super);
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
            endpoint: [NotEmpty(), null],
            parameters: [null, {}]
        }), endpoint = _a.endpoint, parameters = _a.parameters;
        var endpointObject = this.endpointStorage.getEndpoint(endpoint, context.ctor);
        _super.prototype.doTransform.call(this, context, pipeline);
        var respond = function (endpoint, payload) {
            for (var _i = 0, _a = Object.keys(payload); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!isUndefined(endpoint.params[prop]) && isUndefined(parameters[prop])) {
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
        if (!(context.value instanceof HttpResponse)) {
            throw new UsageException('The inverse transform of HttpTransformer expect an HttpResponse.');
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
            var contextClone = new TransformContext(context, context.type, context.ctor, result, context.property, context.extra);
            var pipelineClone = new TransformPipeline(contextClone.result, _this.getTransformableProperties(context));
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
            var hasMultipleResults = isArray(context.value.result);
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
    HttpTransformer = __decorate([
        Module(ModelTransformerTag),
        __param(0, Inject(ModelMetadataService)),
        __param(1, Inject(ModelTransformMetadataService)),
        __param(2, Inject(ModelFactoryService)),
        __param(3, Inject(ApiEndpointStorageService)),
        __param(4, InjectLazy(function () { return TransformService; })),
        __metadata("design:paramtypes", [ModelMetadataService,
            ModelTransformMetadataService,
            ModelFactoryService,
            ApiEndpointStorageService,
            TransformService])
    ], HttpTransformer);
    return HttpTransformer;
}(PojoTransformer));

export { HttpTransformer, HttpTransformerSymbol };

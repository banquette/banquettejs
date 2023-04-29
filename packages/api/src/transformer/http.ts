import { InjectLazy, Inject, Module } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { HttpResponse } from "@banquette/http";
import {
    ModelTransformerTag,
    ModelMetadataService,
    ModelTransformMetadataService,
    ModelFactoryService,
    TransformResult,
    TransformContext,
    TransformPipeline,
    TransformService,
    PojoTransformer
} from "@banquette/model";
import { isArray, isUndefined } from "@banquette/utils-type";
import { NotEmpty } from "@banquette/validation";
import { ApiEndpoint } from "../api-endpoint";
import { ApiEndpointStorageService } from "../api-endpoint-storage.service";

export const HttpTransformerSymbol = Symbol('http');

@Module(ModelTransformerTag)
export class HttpTransformer extends PojoTransformer {
    public constructor(@Inject(ModelMetadataService) protected modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) protected transformMetadata: ModelTransformMetadataService,
                       @Inject(ModelFactoryService) protected modelFactory: ModelFactoryService,
                       @Inject(ApiEndpointStorageService) private endpointStorage: ApiEndpointStorageService,
                       @InjectLazy(() => TransformService) private transformService: TransformService) {
        super(modelMetadata, transformMetadata, modelFactory);
    }

    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return HttpTransformerSymbol;
    }

    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult {
        if (context.parent !== null && context.parent.type === HttpTransformerSymbol) {
            return super.doTransform(context, pipeline);
        }
        const {endpoint, parameters} = context.getValidatedExtra({
            endpoint: [NotEmpty(), null],
            parameters: [null, {}]
        });
        const endpointObject = this.endpointStorage.getEndpoint(endpoint, context.ctor);
        super.doTransform(context, pipeline);
        const respond = (endpoint: ApiEndpoint, payload: any) => {
            for (const prop of Object.keys(payload)) {
                if (!isUndefined(endpoint.params[prop]) && isUndefined(parameters[prop])) {
                    parameters[prop] = payload[prop];
                }
            }
            context.result.setResult(endpoint.buildRequest(payload, parameters));
            return context.result;
        };
        const localPromise = context.result.localPromise;
        if (localPromise === null) {
            return respond(endpointObject, context.result.result);
        }
        context.result.delayResponse(new Promise((resolve, reject) => {
            localPromise.then(() => {
                resolve(respond(endpointObject, context.result.result));
            }).catch(reject);
        }));
        return context.result;
    }

    /**
     * @inheritDoc
     */
    protected doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult {
        if (context.parent !== null && context.parent.type === HttpTransformerSymbol) {
            return super.doTransformInverse(context, model, pipeline);
        }
        if (!(context.value instanceof HttpResponse)) {
            throw new UsageException('The inverse transform of HttpTransformer expect an HttpResponse.');
        }
        let resolve: (() => any)|null = null;
        let reject: ((reason: any) => any)|null = null;
        const delayResponse = () => {
            context.result.delayResponse(new Promise<void>((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
            }));
        }
        const transformResponseResult = (result: any, done: (result: TransformResult) => void) => {
            const model = this.modelFactory.create(context.ctor, context);
            const contextClone = new TransformContext(context, context.type, context.ctor, result, context.property, context.extra);
            const pipelineClone = new TransformPipeline(contextClone.result, this.getTransformableProperties(context));
            const subResult = super.doTransformInverse(contextClone, model, pipelineClone);
            if (subResult.promise !== null) {
                if (resolve === null) {
                    delayResponse();
                }
                subResult.promise.then(() => {
                    done(subResult);
                });
            } else {
                done(subResult);
            }
        }
        const transformResponse = () => {
            const hasMultipleResults = isArray(context.value.result);
            const results = hasMultipleResults ? context.value.result : [context.value.result];
            let subResults: any[] = [];
            let index = 0;
            const next = () => {
                if (index >= results.length) {
                    if (subResults.length > 0) {
                        context.result.setResult(hasMultipleResults ? subResults : subResults[0]);
                    }
                    if (resolve !== null) {
                        resolve();
                    }
                    return ;
                }
                transformResponseResult(results[index++], (subResult: TransformResult) => {
                    if (subResult.error) {
                        context.result.fail(subResult.errorDetail);
                        if (reject !== null) {
                            reject(subResult.errorDetail);
                        }
                        return ;
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
        } else {
            transformResponse();
        }
        return context.result;
    }
}

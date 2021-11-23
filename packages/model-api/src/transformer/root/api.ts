import { ApiEndpoint } from "@banquette/api";
import { Module, Inject, InjectLazy } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { HttpResponse } from "@banquette/http";
import {
    ModelTransformerTag,
    TransformContext,
    TransformPipeline,
    TransformResult,
    ModelMetadataService,
    ModelTransformMetadataService,
    ModelFactoryService,
    TransformService,
    PojoTransformer
} from "@banquette/model";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { NotEmpty } from "@banquette/validation";
import { ModelApiMetadataService } from "../../model-api-metadata.service";

export const ApiTransformerSymbol = Symbol('api');

@Module(ModelTransformerTag)
export class ApiTransformer extends PojoTransformer {
    public constructor(@Inject(ModelMetadataService) protected modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) protected transformMetadata: ModelTransformMetadataService,
                       @Inject(ModelFactoryService) protected modelFactory: ModelFactoryService,
                       @Inject(ModelApiMetadataService) private apiMetadata: ModelApiMetadataService,
                       @InjectLazy(() => TransformService) private transformService: TransformService) {
        super(modelMetadata, transformMetadata, modelFactory);
    }

    /**
     * @inheritDoc
     */
    public getTransformerSymbol(): symbol {
        return ApiTransformerSymbol;
    }

    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult {
        if (context.parent !== null && context.parent.type === ApiTransformerSymbol) {
            return super.doTransform(context, pipeline);
        }
        const {endpoint, parameters} = context.getValidatedExtra({
            endpoint: [NotEmpty(), null],
            parameters: [null, {}]
        });
        const endpointObject = this.apiMetadata.getEndpoint(context.ctor, endpoint);
        super.doTransform(context, pipeline);
        const respond = (endpoint: ApiEndpoint, payload: any) => {
            for (const prop of Object.keys(payload)) {
                if (!isUndefined(endpoint.parameters[prop]) && isUndefined(parameters[prop])) {
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
        if (context.parent !== null && context.parent.type === ApiTransformerSymbol) {
            return super.doTransformInverse(context, model, pipeline);
        }
        if (!(context.value instanceof HttpResponse)) {
            throw new UsageException('The inverse transform of ApiTransformer expect an HttpResponse.');
        }
        let resolve: (() => any)|null = null;
        let reject: ((reason: any) => any)|null = null;
        const delayResponse = () => {
            context.result.delayResponse(new Promise<void>((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
            }));
        }
        const handleResult = (subResult: TransformResult) => {
            if (subResult.error) {
                context.result.fail(subResult.errorDetail);
                if (reject !== null) {
                    reject(subResult.errorDetail);
                }
            } else {
                context.result.setResult(subResult.result);
                if (resolve !== null) {
                    resolve();
                }
            }
        };
        const transformResponse = () => {
            const contextClone = new TransformContext(context, context.type, context.ctor, context.value.result, context.property, context.extra);
            const pipelineClone = new TransformPipeline(contextClone.result, this.getTransformableProperties(context));
            const subResult = super.doTransformInverse(contextClone, model, pipelineClone);
            if (subResult.promise !== null) {
                if (resolve === null) {
                    delayResponse();
                }
                subResult.promise.then(() => {
                    handleResult(subResult);
                });
            } else {
                handleResult(subResult);
            }
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

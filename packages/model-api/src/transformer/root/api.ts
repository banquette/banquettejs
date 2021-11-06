import { Module, Inject, InjectLazy } from "@banquette/dependency-injection";
import {
    ModelTransformerTag,
    TransformContext,
    TransformPipeline,
    TransformResult,
    TransformerInterface,
    ModelMetadataService,
    ModelTransformMetadataService,
    ModelFactoryService,
    TransformService,
    PojoTransformer
} from "@banquette/model";
import { Complete, isObject, isUndefined } from "@banquette/utils-type";
import { ApiEndpoint } from "@banquette/api";
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
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                isObject(context.value) ? context.value[property] : null,
                property
            );
            return transformer.transformInverse(subContext);
        }, (property: string, subResult: TransformResult) => {
            model[property] = subResult.result;
        });
        pipeline.onFinish(() => {
            context.result.setResult(model);
        });
        return context.result;
    }
}

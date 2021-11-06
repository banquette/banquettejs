import { Module, Inject, InjectLazy } from "@banquette/dependency-injection";
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
import { isUndefined, Writeable } from "@banquette/utils-type";
import { ApiEndpoint } from "@banquette/api";
import { NotEmpty } from "@banquette/validation";
import { ModelApiMetadataService } from "../../model-api-metadata.service";
import { HttpResponse } from "@banquette/http";
import { UsageException } from "@banquette/exception";

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
        if (!(context.value instanceof HttpResponse)) {
            throw new UsageException('The inverse transform of ApiTransformer expect an HttpResponse.');
        }
        const transformResponse = () => {
            (context as Writeable<TransformContext>).value = context.value.result;
            super.doTransformInverse(context, model, pipeline);
        };
        if (context.value.promise !== null) {
            context.result.delayResponse(context.value.promise);
            context.value.promise.then(transformResponse);
        } else {
            transformResponse();
        }
        return context.result;
    }
}

import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { ModelFactoryService } from "@banquette/model/model.factory.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformPipeline } from "@banquette/model/transformer/transform-pipeline";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformer } from "@banquette/model/transformer/type/root/pojo";
import { ApiEndpointStorageService } from "../api-endpoint-storage.service";
export declare const HttpTransformerSymbol: unique symbol;
export declare class HttpTransformer extends PojoTransformer {
    protected modelMetadata: ModelMetadataService;
    protected transformMetadata: ModelTransformMetadataService;
    protected modelFactory: ModelFactoryService;
    private endpointStorage;
    private transformService;
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService, modelFactory: ModelFactoryService, endpointStorage: ApiEndpointStorageService, transformService: TransformService);
    /**
     * @inheritDoc
     */
    getTransformerSymbol(): symbol;
    /**
     * @inheritDoc
     */
    protected doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult;
    /**
     * @inheritDoc
     */
    protected doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult;
}

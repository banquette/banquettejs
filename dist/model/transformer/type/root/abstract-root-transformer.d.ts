import { Complete } from "@banquette/utils-type/types";
import { ModelMetadataService } from "../../../model-metadata.service";
import { ModelTransformMetadataService } from "../../../model-transform-metadata.service";
import { ModelFactoryService } from "../../../model.factory.service";
import { TransformContext } from "../../transform-context";
import { TransformerInterface } from "../../transformer.interface";
import { RootTransformerInterface } from "../../root-transformer.interface";
import { TransformResult } from "../../../transform-result";
import { TransformPipeline } from "../../transform-pipeline";
export declare abstract class AbstractRootTransformer implements RootTransformerInterface {
    protected modelMetadata: ModelMetadataService;
    protected transformMetadata: ModelTransformMetadataService;
    protected modelFactory: ModelFactoryService;
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService, modelFactory: ModelFactoryService);
    /**
     * Get the symbol identifying the root transformer.
     */
    protected abstract getTransformerSymbol(): symbol;
    /**
     * Do the actual transformation.
     */
    protected abstract doTransform(context: TransformContext, pipeline: TransformPipeline): TransformResult;
    /**
     * Do the actual inverse transformation.
     */
    protected abstract doTransformInverse(context: TransformContext, model: any, pipeline: TransformPipeline): TransformResult;
    /**
     * @inheritDoc
     */
    supports(context: TransformContext): boolean;
    /**
     * @inheritDoc
     */
    transform(context: TransformContext): TransformResult;
    /**
     * @inheritDoc
     */
    transformInverse(context: TransformContext): TransformResult;
    /**
     * Get the map of transformable properties and their respective transformer.
     */
    protected getTransformableProperties(context: TransformContext): Record<string, Complete<TransformerInterface>>;
}

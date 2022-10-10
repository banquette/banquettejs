import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { ModelFactoryService } from "@banquette/model/model.factory.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformPipeline } from "@banquette/model/transformer/transform-pipeline";
import { AbstractRootTransformer } from "@banquette/model/transformer/type/root/abstract-root-transformer";
import { FormComponentFactory } from "../../form-component.factory";
export declare const FormTransformerSymbol: unique symbol;
export declare class FormTransformer extends AbstractRootTransformer {
    protected modelMetadata: ModelMetadataService;
    protected transformMetadata: ModelTransformMetadataService;
    protected modelFactory: ModelFactoryService;
    private formFactory;
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService, modelFactory: ModelFactoryService, formFactory: FormComponentFactory);
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

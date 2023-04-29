import { Inject } from "@banquette/dependency-injection";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import { getSymbolDescription } from "@banquette/utils-object";
import { isCompound, isObject, isScalar, Complete } from "@banquette/utils-type";
import { ModelMetadataService } from "../../../model-metadata.service";
import { ModelTransformMetadataService } from "../../../model-transform-metadata.service";
import { ModelFactoryService } from "../../../model.factory.service";
import { TransformResult } from "../../../transform-result";
import { ensureCompleteTransformer } from "../../../utils";
import { RootTransformerInterface } from "../../root-transformer.interface";
import { TransformContext } from "../../transform-context";
import { TransformPipeline } from "../../transform-pipeline";
import { TransformerInterface } from "../../transformer.interface";

export abstract class AbstractRootTransformer implements RootTransformerInterface {
    public constructor(@Inject(ModelMetadataService) protected modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) protected transformMetadata: ModelTransformMetadataService,
                       @Inject(ModelFactoryService) protected modelFactory: ModelFactoryService) {

    }

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
    public supports(context: TransformContext): boolean {
        return context.type === this.getTransformerSymbol();
    }

    /**
     * @inheritDoc
     */
    /* final */ public transform(context: TransformContext): TransformResult {
        let pipeline: TransformPipeline;
        let transformableProperties: Record<string, Complete<TransformerInterface>>;

        try {
            transformableProperties = this.getTransformableProperties(context);
            pipeline = new TransformPipeline(context.result, transformableProperties);
        } catch (e) {
            throw new UsageException(
                `Transform initialization failed for ${context.ctor.name}
                (transformer: ${getSymbolDescription(context.type)}`,
                ExceptionFactory.EnsureException(e)
            );
        }
        return this.doTransform(context, pipeline);
    }

    /**
     * @inheritDoc
     */
    /* final */ public transformInverse(context: TransformContext): TransformResult {
        let instance: any;
        let pipeline: TransformPipeline;
        try {
            instance = this.modelFactory.create(context.ctor, context);
            pipeline = new TransformPipeline(context.result, this.getTransformableProperties(context));
        } catch (e) {
            throw new UsageException(
                `Transform inverse initialization failed for ${context.ctor.name}
                (transformer: ${getSymbolDescription(context.type)}`,
                ExceptionFactory.EnsureException(e)
            );
        }
        return this.doTransformInverse(context, instance, pipeline);
    }

    /**
     * Get the map of transformable properties and their respective transformer.
     */
    protected getTransformableProperties(context: TransformContext): Record<string, Complete<TransformerInterface>> {
        if (context.ctor === Object && isObject(context.value)) {
            let wildcardTransformer = this.transformMetadata.getWildcard(context.ctor, this.getTransformerSymbol());
            if (wildcardTransformer === null) {
                return {};
            }
            const completeTransformer = ensureCompleteTransformer(wildcardTransformer);
            return Object.keys(context.value).filter((property: string) => {
                const v = context.value[property];
                return isScalar(v) || isCompound(v);
            }).reduce((output, property: string) => {
                output[property] = completeTransformer;
                return output;
            }, {} as Record<string, Complete<TransformerInterface>>);
        }
        return this.transformMetadata.getAll(context.ctor, this.getTransformerSymbol());
    }
}

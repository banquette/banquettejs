import { ModelMetadataService } from "../model-metadata.service";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformResult } from "../transform-result";
import { ModelExtendedIdentifier } from "../type";
import { RootTransformerInterface } from "./root-transformer.interface";
import { TransformContext } from "./transform-context";
import { TransformerInterface } from "./transformer.interface";
export declare class TransformService {
    private modelMetadata;
    private transformMetadata;
    private transformers;
    private sortedTransformers;
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService, transformers: RootTransformerInterface[]);
    /**
     * Transform a model instance into another format.
     */
    transform(parentContext: TransformContext): TransformResult;
    transform(modelInstance: object, transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface | null): TransformResult;
    /**
     * Transform a model from a custom format back to model entity.
     */
    transformInverse(parentContext: TransformContext): TransformResult;
    transformInverse(value: any, modelType: ModelExtendedIdentifier, transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface | null): TransformResult;
    /**
     * Transform a model from a custom format to another custom format.
     */
    transformTransversal(value: any, inverseTransformType: symbol, modelType: ModelExtendedIdentifier, transformType: symbol): TransformResult;
    /**
     * Do a series of transforms sequentially.
     */
    private transformSequential;
    /**
     * Generic way to apply a transform to multiple items in parallel while handling asynchronicity and keeping results in order.
     */
    private transformParallel;
    /**
     * Call `transform` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    private transformCollection;
    /**
     * Call `transformInverse` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    private transformCollectionInverse;
    /**
     * Get the list of available root transformers.
     */
    private getTransformers;
    /**
     * Try to find the transformer corresponding to a type.
     */
    private getTransformer;
    /**
     * Wrap a callback so a wildcard transformer can be applied if necessary.
     */
    private transformWithWildcard;
    /**
     * Wrap a callback to handle the possible throws.
     */
    private transformWithErrorHandling;
}

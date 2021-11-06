import { Service, InjectMultiple, Inject } from "@banquette/dependency-injection";
import { Constructor, Complete, isUndefined, isNullOrUndefined } from "@banquette/utils-type";
import { RootTransformerInterface } from "./root-transformer.interface";
import { ModelTransformerTag } from "../constants";
import { NoCompatibleTransformerFoundException } from "../exception/no-compatible-transformer-found.exception";
import { TransformContext } from "./transform-context";
import { TransformResult } from "../transform-result";
import { ensureCompleteModelTransformer } from "../utils";
import { ModelExtendedIdentifier } from "../type";
import { ModelMetadataService } from "../model-metadata.service";
import { ExceptionFactory } from "@banquette/exception";
import { TransformFailedException } from "../exception/transform-failed.exception";
import { getSymbolDescription } from "@banquette/utils-object";
import { TransformerInterface } from "./transformer.interface";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";

@Service()
export class TransformService {
    private sortedTransformers: Array<Complete<RootTransformerInterface>> = [];

    public constructor(@Inject(ModelMetadataService) private modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) private transformMetadata: ModelTransformMetadataService,
                       @InjectMultiple(ModelTransformerTag) private transformers: RootTransformerInterface[]) {

    }

    /**
     * Transform a model instance into another format.
     */
    public transform(parentContext: TransformContext): TransformResult;
    public transform(modelInstance: object, transformType: symbol, wildcardTransformer?: TransformerInterface|null, extra?: Record<string, any>): TransformResult;
    public transform(modelInstanceOrParentContext: object|TransformContext, transformType?: symbol, wildcardTransformer?: TransformerInterface|null, extra?: Record<string, any>): TransformResult {
        let parentContext: TransformContext|null = null;
        if (modelInstanceOrParentContext instanceof TransformContext) {
            parentContext = modelInstanceOrParentContext;
            transformType = modelInstanceOrParentContext.type;
            modelInstanceOrParentContext = parentContext.value;
        }
        const context = new TransformContext(
            parentContext,
            transformType as symbol,
            modelInstanceOrParentContext.constructor as Constructor,
            modelInstanceOrParentContext,
            null,
            extra || {}
        );
        return this.transformWithWildcard(wildcardTransformer, context, () => {
            return this.getTransformer(context).transform(context);
        });
    }

    /**
     * Transform a model from a custom format back to model entity.
     */
    public transformInverse(parentContext: TransformContext): TransformResult;
    public transformInverse(value: any, modelType: ModelExtendedIdentifier, transformType: symbol, wildcardTransformer?: TransformerInterface|null, extra?: Record<string, any>): TransformResult;
    public transformInverse(parentContextOrValue: TransformContext|any, modelType?: ModelExtendedIdentifier, transformType?: symbol, wildcardTransformer?: TransformerInterface|null, extra?: Record<string, any>): TransformResult {
        let parentContext: TransformContext | null = null;
        if (parentContextOrValue instanceof TransformContext) {
            parentContext = parentContextOrValue;
            modelType = parentContextOrValue.ctor;
            transformType = parentContextOrValue.type;
            parentContextOrValue = parentContext.value;
        }
        const modelCtor = this.modelMetadata.resolveAlias(modelType as ModelExtendedIdentifier);
        const context = new TransformContext(
            parentContext,
            transformType as symbol,
            modelCtor,
            parentContextOrValue,
            null,
            extra || {}
        );
        return this.transformWithWildcard(wildcardTransformer, context, () => {
            return this.getTransformer(context).transformInverse(context);
        });
    }

    /**
     * Get the list of available root transformers.
     */
    private getTransformers(): Array<Complete<RootTransformerInterface>> {
        if (this.transformers.length !== this.sortedTransformers.length) {
            this.sortedTransformers = this.transformers.map((transformer) => ensureCompleteModelTransformer(transformer))
                .sort((a, b) => {
                    return b.getPriority() - a.getPriority();
                });
        }
        return this.sortedTransformers;
    }

    /**
     * Try to find the transformer corresponding to a type.
     */
    private getTransformer(context: TransformContext): Complete<RootTransformerInterface> {
        const transformers = this.getTransformers();
        for (const candidate of transformers) {
            if (candidate.supports(context)) {
                return candidate;
            }
        }
        throw new NoCompatibleTransformerFoundException(context, 'No compatible transformer has been found for this context.');
    }

    /**
     * Wrap a callback so a wildcard transformer can be applied if necessary.
     */
    private transformWithWildcard(wildcardTransformer: TransformerInterface|null|undefined, context: TransformContext, cb: () => TransformResult): TransformResult {
        const oldWildcard = this.transformMetadata.getWildcard(context.ctor, context.type);
        if (!isNullOrUndefined(wildcardTransformer)) {
            this.transformMetadata.registerWildcard(context.ctor, context.type, wildcardTransformer);
        }
        const result = this.transformWithErrorHandling(context, cb);
        if (oldWildcard === null) {
            this.transformMetadata.removeWildcard(context.ctor, context.type);
        } else {
            this.transformMetadata.registerWildcard(context.ctor, context.type, oldWildcard);
        }
        return result;
    }

    /**
     * Wrap a callback to handle the possible throws.
     */
    private transformWithErrorHandling(context: TransformContext, cb: () => TransformResult): TransformResult {
        try {
            return cb();
        } catch (e) {
            const exception = new TransformFailedException(
                `Failed to transform "${context.ctor.name}" (transformer: ${getSymbolDescription(context.type)}).`,
                ExceptionFactory.EnsureException(e)
            );
            context.result.fail(exception);
            return context.result;
        }
    }
}

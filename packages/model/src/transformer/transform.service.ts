import { InjectMultiple } from "@banquette/dependency-injection/decorator/inject-multiple.decorator";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { getSymbolDescription } from "@banquette/utils-object/get-symbol-description";
import { isArray } from "@banquette/utils-type/is-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Complete, Constructor } from "@banquette/utils-type/types";
import { ModelTransformerTag } from "../constants";
import { NoCompatibleTransformerFoundException } from "../exception/no-compatible-transformer-found.exception";
import { TransformFailedException } from "../exception/transform-failed.exception";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformResult } from "../transform-result";
import { ModelExtendedIdentifier } from "../type";
import { ensureCompleteModelTransformer } from "../utils";
import { RootTransformerInterface } from "./root-transformer.interface";
import { TransformContext } from "./transform-context";
import { TransformerInterface } from "./transformer.interface";

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
    public transform(modelInstance: object, transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult;
    public transform(modelInstanceOrParentContext: object|TransformContext, transformType?: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult {
        if (!(modelInstanceOrParentContext instanceof TransformContext) && isArray(modelInstanceOrParentContext)) {
            return this.transformCollection(modelInstanceOrParentContext, transformType as symbol, extra, wildcardTransformer);
        }
        let parentContext: TransformContext|null = null;
        let ctor: Constructor|null = null;
        if (modelInstanceOrParentContext instanceof TransformContext) {
            parentContext = modelInstanceOrParentContext;
            transformType = modelInstanceOrParentContext.type;
            ctor = modelInstanceOrParentContext.ctor;
            modelInstanceOrParentContext = parentContext.value;
        }
        const context = new TransformContext(
            parentContext,
            transformType as symbol,
            ctor || modelInstanceOrParentContext.constructor as Constructor,
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
    public transformInverse(value: any, modelType: ModelExtendedIdentifier, transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult;
    public transformInverse(parentContextOrValue: TransformContext|any, modelType?: ModelExtendedIdentifier, transformType?: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult {
        if (!(parentContextOrValue instanceof TransformContext) && isArray(parentContextOrValue)) {
            return this.transformCollectionInverse(parentContextOrValue, modelType as ModelExtendedIdentifier, transformType as symbol, extra, wildcardTransformer);
        }
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
     * Call `transform` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    private transformCollection(items: any[], transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult {
        return this.transformParallel(items, (item: any) => {
            return this.transform(item, transformType, extra, wildcardTransformer);
        });
    }

    /**
     * Call `transformInverse` on multiple items in parallel.
     *
     * @private to keep the public Api simple.
     */
    private transformCollectionInverse(values: any[], modelType: ModelExtendedIdentifier, transformType: symbol, extra?: Record<string, any>, wildcardTransformer?: TransformerInterface|null): TransformResult {
        return this.transformParallel(values, (value: any) => {
            return this.transformInverse(value, modelType, transformType, extra, wildcardTransformer);
        });
    }

    /**
     * Generic way to apply a transform to multiple items in parallel while handling asynchronicity and keeping results in order.
     */
    private transformParallel(items: any[], callback: (item: any) => TransformResult): TransformResult {
        const result = new TransformResult();
        const promises: Promise<any>[] = [];
        const map = new WeakMap<TransformResult, number>();
        const transformedItems: Record<number, any> = {};
        const buildFinalArray = () => {
            const output: any[] = [];
            for (let i = 0; i < items.length; ++i) {
                output.push(transformedItems[i]);
            }
            return output;
        };
        for (let i = 0; i < items.length; ++i) {
            const subResult = callback(items[i]);
            if (subResult.promise !== null) {
                promises.push(subResult.promise);

                // Transformers are executed in parallel and some items may be asynchronous while other not.
                // So to ensure the ordering is preserved, keep a map between the sub transform result and the item's index.
                map.set(subResult, i);
            } else {
                transformedItems[i] = subResult.result;
            }
        }
        if (promises.length > 0) {
            result.delayResponse(new Promise<void>((resolve, reject) => {
                Promise.all(promises).then((transformResults: TransformResult[]) => {
                    for (const transformResult of transformResults) {
                        const index: number|undefined = map.get(transformResult);
                        if (!isUndefined(index)) {
                            transformedItems[index] = transformResult.result;
                        }
                    }
                    result.setResult(buildFinalArray());
                    resolve();
                }).catch(reject);
            }));
        } else {
            result.setResult(buildFinalArray());
        }
        return result;
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

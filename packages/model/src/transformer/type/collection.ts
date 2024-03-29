import { Injector } from "@banquette/dependency-injection";
import { isArray, isNullOrUndefined, isUndefined, Complete } from "@banquette/utils-type";
import { ModelMetadataService } from "../../model-metadata.service";
import { TransformResult } from "../../transform-result";
import { ensureCompleteTransformer } from "../../utils";
import { TransformContext } from '../transform-context';
import { TransformPipeline } from "../transform-pipeline";
import { TransformerInterface } from "../transformer.interface";
import { Model } from "./model";
import { Raw } from './raw';

let modelMetadata: ModelMetadataService|null = null;

/**
 * Apply a transformer to a collection of values.
 */
export function Collection(transformer?: TransformerInterface): TransformerInterface {
    const apply = (fnName: keyof Omit<TransformerInterface, 'type'>, context: TransformContext): void => {
        if (isUndefined(transformer)) {
            if (modelMetadata === null) {
                modelMetadata = /**!PURE*/ Injector.Get(ModelMetadataService);
            }
            context = context.getHighestContextWithProperty();
            transformer = context.property !== null && modelMetadata.getRelation(context.ctor, context.property) ? Model() : Raw();
        }
        const completeTransformer = ensureCompleteTransformer(transformer);
        if (!isArray(context.value)) {
            context.result.setResult(isNullOrUndefined(context.value) ? context.value : []);
            return ;
        }
        const results: Record<string, any> = {};
        const transformableProperties: Record<string, Complete<TransformerInterface>> = {};
        for (let i = 0; i < context.value.length; ++i) {
            transformableProperties[i + ''] = completeTransformer;
        }
        const pipeline = new TransformPipeline(context.result, transformableProperties);
        pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
            const subContext = new TransformContext(
                context,
                context.type,
                context.ctor,
                context.value[property],
                property
            );
            return transformer[fnName](subContext);
        }, (property: string, subResult: TransformResult) => {
            results[property] = subResult.result;
        });
        pipeline.onFinish(() => {
            const output: any[] = [];
            for (let i = 0; i < context.value.length; ++i) {
                output.push(results[i + '']);
            }
            context.result.setResult(output);
        });
    };
    return {
        transform(context: TransformContext): TransformResult {
            apply('transform', context);
            return context.result;
        },
        transformInverse(context: TransformContext): TransformResult {
            apply('transformInverse', context);
            return context.result;
        }
    };
}

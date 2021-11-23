import { isArray } from "@banquette/utils-type/is-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { Complete } from "@banquette/utils-type/types";
import { TransformResult } from "../../transform-result";
import { ensureCompleteTransformer } from "../../utils";
import { TransformContext } from '../transform-context';
import { TransformPipeline } from "../transform-pipeline";
import { TransformerInterface } from "../transformer.interface";
import { Raw } from './raw';

/**
 * Apply a transformer to a collection of values.
 */
export function Collection(transformer: TransformerInterface = Raw()): TransformerInterface {
    const completeTransformer = ensureCompleteTransformer(transformer);
    const apply = (fnName: keyof Omit<TransformerInterface, 'type'>, context: TransformContext): void => {
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

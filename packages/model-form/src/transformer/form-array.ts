import { Injector } from "@banquette/dependency-injection/injector";

import { FormArray as FormArrayObject } from '@banquette/form/form-array';
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformPipeline } from "@banquette/model/transformer/transform-pipeline";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { ensureCompleteTransformer } from "@banquette/model/utils";
import { isArray } from "@banquette/utils-type/is-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Complete } from "@banquette/utils-type/types";
import { FormRelatedTransformers, FormArrayTransformerSymbol } from "../contants";
import { FormComponentFactory } from "../form-component.factory";
import { FormControl } from "./form-control";
import { FormTransformerInterface } from "./form-transformer.interface";

const factory = Injector.Get(FormComponentFactory);

/**
 * Transform the input array into a FormArray.
 */
export function FormArray(transformer: TransformerInterface = FormControl()): FormTransformerInterface {
    if (isUndefined(transformer.type) || FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = FormControl(transformer);
    }
    const completeTransformer = ensureCompleteTransformer(transformer) as Complete<FormTransformerInterface>;
    return {
        type: FormArrayTransformerSymbol,

        /**
         * @inheritDoc
         */
        getChild(): Complete<FormTransformerInterface> {
            return completeTransformer;
        },

        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            if (!isArray(context.value)) {
                const formArray = factory.createFormArray(context.ctor, context.property as string);
                context.result.setResult(formArray);
                return context.result;
            }
            const results: Record<string, FormComponentInterface> = {};
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
                    context.value[parseInt(property, 10)],
                    property
                );
                return transformer.transform(subContext);
            }, (property: string, subResult: TransformResult) => {
                results[property] = subResult.result as FormComponentInterface;
            });
            pipeline.onFinish(() => {
                const output = factory.createFormArray(context.ctor, context.property as string);
                const keys: string[] = Object.keys(results).sort();
                for (const key of keys) {
                    output.append(results[key]);
                }
                context.result.setResult(output);
            });
            return context.result;
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            if (!(context.value instanceof FormArrayObject)) {
                context.result.setResult([]);
                return context.result;
            }
            const transformableProperties: Record<string, Complete<TransformerInterface>> = {};
            for (let i = 0; i < context.value.length; ++i) {
                transformableProperties[i + ''] = completeTransformer;
            }
            const results: Record<string, any> = {};
            const pipeline = new TransformPipeline(context.result, transformableProperties);
            pipeline.forEach((property: string, transformer: Complete<TransformerInterface>) => {
                const subContext = new TransformContext(
                    context,
                    context.type,
                    context.ctor,
                    (context.value as FormArrayObject).get(parseInt(property, 10)),
                    property
                );
                return transformer.transformInverse(subContext);
            }, (property: string, subResult: TransformResult) => {
                results[property] = subResult.result;
            });
            pipeline.onFinish(() => {
                const output: any[] = [];
                for (const key of Object.keys(results).sort()) {
                    output.push(results[key]);
                }
                context.result.setResult(output);
            });
            return context.result;
        }
    };
}

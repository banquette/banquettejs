import { Injector } from "@banquette/dependency-injection/injector";
import { FormObject as FormObjectObject } from '@banquette/form/form-object';
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { Model } from "@banquette/model/transformer/type/model";
import { ensureCompleteTransformer } from "@banquette/model/utils";
import { Complete } from "@banquette/utils-type/types";
import { FormObjectTransformerSymbol } from "../contants";
import { FormComponentFactory } from "../form-component.factory";
import { FormTransformerInterface } from "./form-transformer.interface";

const factory = Injector.Get(FormComponentFactory);

/**
 * Transform the input object into a FormObject.
 *
 * Because this calls a root transformer, the transform service is responsible for calling the good one.
 * So this transformer is actually an alias of the "Model" transformer.
 *
 * It is kept as a separate transformer to make things clearer for the end user.
 */
export function FormObject(): FormTransformerInterface {
    const modelTransformer = ensureCompleteTransformer(Model());
    return {
        type: FormObjectTransformerSymbol,

        /**
         * @inheritDoc
         */
        getChild(): Complete<TransformerInterface> {
            return modelTransformer;
        },

        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            const result = modelTransformer.transform(context);
            if (result.result === null) {
                result.setResult(factory.createFormObject(context.ctor, context.property as string));
            }
            return result;
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            if (!(context.value instanceof FormObjectObject) || !context.value.length) {
                context = new TransformContext(context.parent, context.type, context.ctor, null, context.property);
            }
            return modelTransformer.transformInverse(context);
        }
    };
}

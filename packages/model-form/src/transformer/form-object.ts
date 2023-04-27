import { Injector } from "@banquette/dependency-injection";
import { FormObject as FormObjectObject } from '@banquette/form';
import { TransformResult, TransformContext, TransformerInterface, Model, ensureCompleteTransformer } from "@banquette/model";
import { Complete } from "@banquette/utils-type";
import { FormObjectTransformerSymbol } from "../contants";
import { FormComponentFactory } from "../form-component.factory";
import { FormTransformerInterface } from "./form-transformer.interface";

let factory: FormComponentFactory|null = null;

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
                if (factory === null) {
                    factory = Injector.Get(FormComponentFactory);
                }
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

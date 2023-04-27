import { TransformResult } from "../../transform-result";
import { TransformContext } from "../transform-context";
import { TransformerInterface } from "../transformer.interface";

/**
 * Placeholder transformer doing nothing.
 */
export function Raw(): TransformerInterface {
    console.warn('#Raw (decorator)');
    return {
        /**
         * @inheritDoc
         */
        transform: (context: TransformContext): TransformResult => {
            context.result.setResult(context.value);
            return context.result;
        },

        /**
         * @inheritDoc
         */
        transformInverse: (context: TransformContext): TransformResult => {
            context.result.setResult(context.value);
            return context.result;
        }
    };
}

import { TransformerInterface } from "../transformer.interface";
import { TransformContext } from "../transform-context";
import { TransformResult } from "../../transform-result";

/**
 * Placeholder transformer doing nothing.
 */
export function Raw(): TransformerInterface {
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

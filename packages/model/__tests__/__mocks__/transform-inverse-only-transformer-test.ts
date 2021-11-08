import { TransformerInterface, TransformContext, TransformResult } from "../../src";

/**
 * A transformer doing nothing but only allowing transforms in the direction "* -> model".
 */
export function TransformInverseOnlyTransformerTest(): TransformerInterface {
    return {
        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            context.result.setResult(context.value);
            return context.result;
        }
    }
}

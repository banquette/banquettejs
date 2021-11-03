import { TransformerInterface } from "../../transformer/transformer.interface";
import { TransformContext } from "../../transformer/transform-context";
import { TransformResult } from "../../transform-result";

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

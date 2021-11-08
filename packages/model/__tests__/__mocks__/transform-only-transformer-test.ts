import { TransformerInterface, TransformContext, TransformResult } from "../../src";

/**
 * A transformer doing nothing but only allowing transforms in the direction "model -> *".
 */
export function TransformOnlyTransformerTest(): TransformerInterface {
    return {
        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            context.result.setResult(context.value);
            return context.result;
        }
    }
}

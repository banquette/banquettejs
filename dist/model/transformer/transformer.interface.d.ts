import { TransformContext } from './transform-context';
import { TransformResult } from "../transform-result";
export interface TransformerInterface {
    /**
     * A unique symbol that can be used to identify the transformer.
     */
    type?: symbol;
    /**
     * Transform the input value from the model value to the target format.
     */
    transform?(context: TransformContext): TransformResult;
    /**
     * Transform the input value from the target format to the model value.
     */
    transformInverse?(context: TransformContext): TransformResult;
}

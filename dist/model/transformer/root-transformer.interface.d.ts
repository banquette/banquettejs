import { TransformContext } from './transform-context';
import { TransformerInterface } from "./transformer.interface";
/**
 * A type of transformer meant to be called by the transform service.
 */
export interface RootTransformerInterface extends TransformerInterface {
    /**
     * Used by the transform service to test if the transformer is applicable in a given context.
     */
    supports(context: TransformContext): boolean;
    /**
     * The priority is used to decide which transformer to use when multiple
     * transformers use the same type symbol.
     *
     * The one with the highest priority is used.
     *
     * The method is optional as not defining it is equivalent to 0.
     */
    getPriority?(): number;
}

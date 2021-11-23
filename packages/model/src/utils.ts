import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Complete } from "@banquette/utils-type/types";
import { TransformInverseNotSupportedException } from "./exception/transform-inverse-not-supported.exception";
import { TransformNotSupportedException } from "./exception/transform-not-supported.exception";
import { RootTransformerInterface } from "./transformer/root-transformer.interface";
import { TransformerInterface } from "./transformer/transformer.interface";

/**
 * Ensure all methods defined in TransformerInterface are implemented
 * by adding the missing methods that will throw an error if called.
 *
 * This gives the end user the flexibility to only define what's needed while
 * making it easy for the rest of the system that will not have to check for the methods
 * existence each time they are used.
 */
export function ensureCompleteTransformer(transformer: TransformerInterface): Complete<TransformerInterface> {
    if (isUndefined(transformer.transform)) {
        transformer.transform = () => {
            throw new TransformNotSupportedException();
        };
    }
    if (isUndefined(transformer.transformInverse)) {
        transformer.transformInverse = () => {
            throw new TransformInverseNotSupportedException();
        };
    }
    return transformer as Complete<TransformerInterface>;
}

/**
 * Same as ensureCompleteTransformer with the addition of methods specific to ModelTransformerInterface.
 */
export function ensureCompleteModelTransformer(transformer: RootTransformerInterface): Complete<RootTransformerInterface> {
    transformer = ensureCompleteTransformer(transformer) as RootTransformerInterface;
    if (isUndefined(transformer.getPriority)) {
        transformer.getPriority = () => 0;
    }
    return transformer as Complete<RootTransformerInterface>;
}

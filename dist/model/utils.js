/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { TransformInverseNotSupportedException } from './exception/transform-inverse-not-supported.exception.js';
import { TransformNotSupportedException } from './exception/transform-not-supported.exception.js';

/**
 * Ensure all methods defined in TransformerInterface are implemented
 * by adding the missing methods that will throw an error if called.
 *
 * This gives the end user the flexibility to only define what's needed while
 * making it easy for the rest of the system that will not have to check for the methods
 * existence each time they are used.
 */
function ensureCompleteTransformer(transformer) {
    if (isUndefined(transformer.transform)) {
        transformer.transform = function () {
            throw new TransformNotSupportedException();
        };
    }
    if (isUndefined(transformer.transformInverse)) {
        transformer.transformInverse = function () {
            throw new TransformInverseNotSupportedException();
        };
    }
    return transformer;
}
/**
 * Same as ensureCompleteTransformer with the addition of methods specific to ModelTransformerInterface.
 */
function ensureCompleteModelTransformer(transformer) {
    transformer = ensureCompleteTransformer(transformer);
    if (isUndefined(transformer.getPriority)) {
        transformer.getPriority = function () { return 0; };
    }
    return transformer;
}

export { ensureCompleteModelTransformer, ensureCompleteTransformer };

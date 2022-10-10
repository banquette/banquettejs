/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FormRelatedTransformers } from '../contants.js';

/**
 * Test if a transformer is a form transformer specialization.
 */
function isFormTransformer(transformer) {
    return !isUndefined(transformer.type) && FormRelatedTransformers.indexOf(transformer.type) > -1;
}

export { isFormTransformer };

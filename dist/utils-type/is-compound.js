/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from './is-array.js';
import { isObjectLiteral } from './is-object.js';

/**
 * Determines if the input is a composite of primitive values.
 */
function isCompound(value) {
    return isArray(value) || isObjectLiteral(value);
}

export { isCompound };

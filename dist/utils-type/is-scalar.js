/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isBoolean } from './is-boolean.js';
import { isNullOrUndefined } from './is-null-or-undefined.js';
import { isNumber } from './is-number.js';
import { isString } from './is-string.js';

/**
 * Test if the input is a scalar type.
 */
function isScalar(value) {
    return isString(value) ||
        isNumber(value) ||
        isBoolean(value) ||
        isNullOrUndefined(value);
}

export { isScalar };

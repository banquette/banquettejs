/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from './is-array.js';
import { isNullOrUndefined } from './is-null-or-undefined.js';

/**
 * Ensure the input is always a valid array.
 */
function ensureArray(input) {
    if (isNullOrUndefined(input)) {
        return [];
    }
    if (!isArray(input)) {
        return [input];
    }
    return input;
}

export { ensureArray };

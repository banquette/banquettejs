/*!
 * Banquette UtilsArray v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { enumToArray } from './enum-to-array.js';

/**
 * Ensure the input is always part of an enumeration.
 */
function ensureInEnum(input, enumeration, defaultValue) {
    if (!isNullOrUndefined(input) && enumToArray(enumeration).indexOf(input) > -1) {
        return input;
    }
    return defaultValue;
}

export { ensureInEnum };

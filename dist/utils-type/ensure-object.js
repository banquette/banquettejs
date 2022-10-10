/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObject } from './is-object.js';

/**
 * Ensure the input is converted to an object.
 */
function ensureObject(input, defaultValue) {
    if (defaultValue === void 0) { defaultValue = {}; }
    return isObject(input) ? input : defaultValue;
}

export { ensureObject };

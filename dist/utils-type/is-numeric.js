/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObject } from './is-object.js';

/**
 * Test if a variable represent number or not.
 */
function isNumeric(value) {
    return !isObject(value) && !isNaN(parseFloat(value)) && isFinite(value);
}

export { isNumeric };

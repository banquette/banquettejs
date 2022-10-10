/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isValidNumber } from './is-valid-number.js';

/**
 * Test if the input is an integer.
 * Notice: "1" will return false because it's a string.
 */
function isInteger(value) {
    return isValidNumber(value) && value % 1 === 0;
}

export { isInteger };

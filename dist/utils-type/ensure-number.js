/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isString } from './is-string.js';
import { isValidNumber } from './is-valid-number.js';

/**
 * Ensure the input is converted to a valid number.
 */
function ensureNumber(input, defaultValue) {
    if (defaultValue === void 0) { defaultValue = 0; }
    if (isString(input)) {
        if (input.indexOf(".") < 0) {
            input = parseInt(input, 10);
        }
        else {
            input = parseFloat(input);
        }
    }
    return isValidNumber(input) ? input : defaultValue;
}

export { ensureNumber };
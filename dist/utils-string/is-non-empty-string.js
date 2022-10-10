/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isNumber } from '@banquette/utils-type/is-number';
import { isString } from '@banquette/utils-type/is-string';
import { trim } from './format/trim.js';

/**
 * Test if the input is a non empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
function isNonEmptyString(input) {
    return (isString(input) || isNumber(input)) && trim('' + input).length > 0;
}

export { isNonEmptyString };

/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('./is-string.js');
var isValidNumber = require('./is-valid-number.js');

/**
 * Ensure the input is converted to a valid number.
 */
function ensureInteger(input, defaultValue) {
    if (defaultValue === void 0) { defaultValue = 0; }
    if (isString.isString(input)) {
        input = parseInt(input, 10);
    }
    return isValidNumber.isValidNumber(input) ? input : defaultValue;
}

exports.ensureInteger = ensureInteger;

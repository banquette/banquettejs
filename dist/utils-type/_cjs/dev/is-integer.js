/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isValidNumber = require('./is-valid-number.js');

/**
 * Test if the input is an integer.
 * Notice: "1" will return false because it's a string.
 */
function isInteger(value) {
    return isValidNumber.isValidNumber(value) && value % 1 === 0;
}

exports.isInteger = isInteger;

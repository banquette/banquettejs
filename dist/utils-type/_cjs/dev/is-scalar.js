/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isBoolean = require('./is-boolean.js');
var isNullOrUndefined = require('./is-null-or-undefined.js');
var isNumber = require('./is-number.js');
var isString = require('./is-string.js');

/**
 * Test if the input is a scalar type.
 */
function isScalar(value) {
    return isString.isString(value) ||
        isNumber.isNumber(value) ||
        isBoolean.isBoolean(value) ||
        isNullOrUndefined.isNullOrUndefined(value);
}

exports.isScalar = isScalar;

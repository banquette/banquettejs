/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var enumToArray = require('./enum-to-array.js');

/**
 * Ensure the input is always part of an enumeration.
 */
function ensureInEnum(input, enumeration, defaultValue) {
    if (!isNullOrUndefined.isNullOrUndefined(input) && enumToArray.enumToArray(enumeration).indexOf(input) > -1) {
        return input;
    }
    return defaultValue;
}

exports.ensureInEnum = ensureInEnum;

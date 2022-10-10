/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('./is-array.js');
var isNullOrUndefined = require('./is-null-or-undefined.js');

/**
 * Ensure the input is always a valid array.
 */
function ensureArray(input) {
    if (isNullOrUndefined.isNullOrUndefined(input)) {
        return [];
    }
    if (!isArray.isArray(input)) {
        return [input];
    }
    return input;
}

exports.ensureArray = ensureArray;

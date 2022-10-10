/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('./is-object.js');

/**
 * Ensure the input is converted to an object.
 */
function ensureObject(input, defaultValue) {
    if (defaultValue === void 0) { defaultValue = {}; }
    return isObject.isObject(input) ? input : defaultValue;
}

exports.ensureObject = ensureObject;

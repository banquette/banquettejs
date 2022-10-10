/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('./is-object.js');

/**
 * Test if a variable represent number or not.
 */
function isNumeric(value) {
    return !isObject.isObject(value) && !isNaN(parseFloat(value)) && isFinite(value);
}

exports.isNumeric = isNumeric;

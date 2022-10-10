/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('./is-array.js');
var isObject = require('./is-object.js');

/**
 * Determines if the input is a composite of primitive values.
 */
function isCompound(value) {
    return isArray.isArray(value) || isObject.isObjectLiteral(value);
}

exports.isCompound = isCompound;

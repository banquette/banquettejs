/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNullOrUndefined = require('./is-null-or-undefined.js');

/**
 * Determines if a value is iterable.
 */
function isIterable(value) {
    return !isNullOrUndefined.isNullOrUndefined(value) && typeof value[Symbol.iterator] === 'function';
}

exports.isIterable = isIterable;

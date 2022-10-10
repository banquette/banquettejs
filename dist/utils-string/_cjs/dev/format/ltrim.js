/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var trim = require('./trim.js');

/**
 * Trim the left side of a string.
 *
 * Alias of `trim(input, chars, TrimStrategy.LEFT)`.
 */
function ltrim(input, chars) {
    return trim.trim(input, chars, trim.TrimStrategy.LEFT);
}

exports.ltrim = ltrim;

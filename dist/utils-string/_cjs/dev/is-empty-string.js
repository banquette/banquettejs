/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var trim = require('./format/trim.js');

/**
 * Test if the input is an empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
function isEmptyString(input) {
    return (isString.isString(input) || isNumber.isNumber(input)) && !trim.trim("" + input).length;
}

exports.isEmptyString = isEmptyString;

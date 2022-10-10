/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var trim = require('@banquette/utils-string/_cjs/dev/format/trim');

/**
 * Trim each element of a string array.
 */
function trimArray(input) {
    for (var i = 0; i < input.length; ++i) {
        input[i] = trim.trim(input[i]);
    }
    return input;
}

exports.trimArray = trimArray;

/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');

/**
 * Parse a css duration into a number of milliseconds.
 */
function parseCssDuration(input) {
    if (isString.isString(input)) {
        var asNum = parseFloat(input);
        if (input.match(/[^m]s\s*$/)) {
            asNum *= 1000;
        }
        return asNum;
    }
    return ensureNumber.ensureNumber(input);
}

exports.parseCssDuration = parseCssDuration;

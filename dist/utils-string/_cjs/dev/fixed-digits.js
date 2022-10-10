/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Converts a number into a string while ensuring there are at least {digits} number of digits in it.
 */
function fixedDigits(num, digits) {
    var str = num.toString();
    var prefix = '';
    if (str[0] === '-') {
        prefix = '-';
        str = str.substring(1);
    }
    return prefix + '0'.repeat(Math.max(0, digits - str.length)) + str;
}

exports.fixedDigits = fixedDigits;

/*!
 * Banquette UtilsDate v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fixedDigits = require('@banquette/utils-string/_cjs/dev/fixed-digits');

/**
 * Convert a Date object into a datetime string.
 */
function toDateTime(date) {
    return date.getFullYear() + "-" +
        fixedDigits.fixedDigits(1 + date.getMonth(), 2) + "-" +
        fixedDigits.fixedDigits(date.getDate(), 2) + " " +
        fixedDigits.fixedDigits(date.getHours(), 2) + ":" +
        fixedDigits.fixedDigits(date.getMinutes(), 2) + ":" +
        fixedDigits.fixedDigits(date.getSeconds(), 2);
}

exports.toDateTime = toDateTime;

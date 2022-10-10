/*!
 * Banquette UtilsDate v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fixedDigits = require('@banquette/utils-string/_cjs/dev/fixed-digits');

/**
 * Convert a Date object into a UTC datetime string.
 */
function toUTCDateTime(date) {
    return date.getUTCFullYear() + "-" +
        fixedDigits.fixedDigits(1 + date.getUTCMonth(), 2) + "-" +
        fixedDigits.fixedDigits(date.getUTCDate(), 2) + " " +
        fixedDigits.fixedDigits(date.getUTCHours(), 2) + ":" +
        fixedDigits.fixedDigits(date.getUTCMinutes(), 2) + ":" +
        fixedDigits.fixedDigits(date.getUTCSeconds(), 2);
}

exports.toUTCDateTime = toUTCDateTime;

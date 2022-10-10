/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Determines if a value is a date.
 */
function isDate(value) {
    return Object.prototype.toString.call(value) === "[object Date]";
}

exports.isDate = isDate;

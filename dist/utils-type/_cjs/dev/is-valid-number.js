/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Test if the input is a number.
 * This function not only checks the type like the angular one, it aso check if it is an invalid number.
 */
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

exports.isValidNumber = isValidNumber;

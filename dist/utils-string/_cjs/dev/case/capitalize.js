/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Set the first character of a string to the uppercase.
 */
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

exports.capitalize = capitalize;

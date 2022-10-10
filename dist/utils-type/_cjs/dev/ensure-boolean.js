/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Ensure the input is converted to a boolean.
 */
function ensureBoolean(input) {
    return input === true || input === "true" || input === "on" || (!!input && input !== '0');
}

exports.ensureBoolean = ensureBoolean;

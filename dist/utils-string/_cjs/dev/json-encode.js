/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Exception safe `JSON.`.
 */
function jsonEncode(input) {
    try {
        return JSON.stringify(input);
    }
    catch (e) { }
    return null;
}

exports.jsonEncode = jsonEncode;

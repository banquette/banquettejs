/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('@banquette/utils-type/_cjs/dev/is-string');

/**
 * Exception safe `JSON.parse`.
 */
function jsonDecode(input) {
    if (!isString.isString(input)) {
        return null;
    }
    try {
        return JSON.parse(input);
    }
    catch (e) { }
    return null;
}

exports.jsonDecode = jsonDecode;

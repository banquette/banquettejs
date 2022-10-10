/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Generic type guard that takes a callback that will check if the value matches the generic type T.
 */
function isType(value, callback) {
    return callback(value);
}

exports.isType = isType;

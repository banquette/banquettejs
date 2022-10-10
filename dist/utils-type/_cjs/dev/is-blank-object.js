/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Determine if a value is an object with a null prototype
 */
function isBlankObject(value) {
    return value !== null && typeof value === "object" && !Object.getPrototypeOf(value);
}

exports.isBlankObject = isBlankObject;

/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Test if the input is a File object.
 */
function isFile(value) {
    return Object.prototype.toString.call(value) === "[object File]";
}

exports.isFile = isFile;

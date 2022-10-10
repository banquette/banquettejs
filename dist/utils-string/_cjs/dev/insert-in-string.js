/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Insert a string into another at a specified index.
 * If the index is negative it will count from the end of the target string.
 */
function insertInString(str, index, inserted) {
    if (index < 0) {
        index = Math.min(0, index + str.length);
    }
    if (index > 0) {
        return str.substring(0, index) + inserted + str.substring(index);
    }
    return inserted + str;
}

exports.insertInString = insertInString;

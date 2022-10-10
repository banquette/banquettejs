/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Create a copy of the input array free of duplicates.
 */
function arrayUnique(array) {
    return array.filter(function (value, index, arr) { return arr.indexOf(value) === index; });
}

exports.arrayUnique = arrayUnique;

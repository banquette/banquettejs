/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var capitalize = require('./capitalize.js');

/**
 * Convert a string to the camelCase case.
 */
function camelCase(input) {
    var string = input.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce(function (result, word) { return result + capitalize.capitalize(word.toLowerCase()); });
    return string.charAt(0).toLowerCase() + string.slice(1);
}

exports.camelCase = camelCase;

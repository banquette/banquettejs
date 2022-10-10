/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');

/**
 * Convert an enum into an array containing its values.
 */
function enumToArray(enumeration) {
    return getObjectKeys.getObjectKeys(enumeration)
        .filter(function (key) { return !isNumeric.isNumeric(key); })
        .map(function (key) { return enumeration[key]; })
        .filter(function (val) { return typeof val === 'number' || typeof val === 'string'; });
}

exports.enumToArray = enumToArray;

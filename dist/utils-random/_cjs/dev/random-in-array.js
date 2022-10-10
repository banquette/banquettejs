/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var randomInt = require('./random-int.js');

/**
 * Return a random element from an array.
 */
function randomInArray(arr) {
    return arr[randomInt.randomInt(0, arr.length - 1)];
}

exports.randomInArray = randomInArray;

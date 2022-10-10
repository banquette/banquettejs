/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Same api as `Array.filter` but without creating a new array.
 * The array given as parameter is mutated.
 */
function arrayFilterInPlace(array, callback) {
    var to = 0;
    for (var i = 0; i < array.length; ++i) {
        if (callback(array[i], i, array)) {
            array[to++] = array[i];
        }
    }
    array.length = to;
}

exports.arrayFilterInPlace = arrayFilterInPlace;

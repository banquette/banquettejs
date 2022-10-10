/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Generates a random integer between two values.
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.randomInt = randomInt;

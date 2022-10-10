/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Increasing velocity until stop
function easeInCirc(t) {
    var scaledTime = t / 1;
    return -1 * (Math.sqrt(1 - scaledTime * t) - 1);
}

exports.easeInCirc = easeInCirc;

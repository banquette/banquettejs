/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Accelerating from zero velocity
function easeInCubic(t) {
    return t * t * t;
}

exports.easeInCubic = easeInCubic;

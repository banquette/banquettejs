/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Decelerating to zero velocity
function easeOutQuad(t) {
    return t * (2 - t);
}

exports.easeOutQuad = easeOutQuad;

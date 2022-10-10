/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Accelerate exponentially until finish
function easeInExpo(t) {
    if (t === 0) {
        return 0;
    }
    return Math.pow(2, 10 * (t - 1));
}

exports.easeInExpo = easeInExpo;

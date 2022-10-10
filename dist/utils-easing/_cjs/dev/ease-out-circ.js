/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Start fast, decreasing velocity until stop
function easeOutCirc(t) {
    var t1 = t - 1;
    return Math.sqrt(1 - t1 * t1);
}

exports.easeOutCirc = easeOutCirc;

/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Fast acceleration, bounces to zero
function easeOutElastic(t, magnitude) {
    if (magnitude === void 0) { magnitude = 0.7; }
    var p = 1 - magnitude;
    var scaledTime = t * 2;
    if (t === 0 || t === 1) {
        return t;
    }
    var s = p / (2 * Math.PI) * Math.asin(1);
    return (Math.pow(2, -10 * scaledTime) *
        Math.sin((scaledTime - s) * (2 * Math.PI) / p)) + 1;
}

exports.easeOutElastic = easeOutElastic;

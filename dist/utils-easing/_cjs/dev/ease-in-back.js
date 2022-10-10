/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Slow movement backwards then fast snap to finish
function easeInBack(t, magnitude) {
    if (magnitude === void 0) { magnitude = 1.70158; }
    return t * t * ((magnitude + 1) * t - magnitude);
}

exports.easeInBack = easeInBack;

/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Fast snap to backwards point then slow resolve to finish
function easeOutBack(t, magnitude) {
    if (magnitude === void 0) { magnitude = 1.70158; }
    var scaledTime = (t / 1) - 1;
    return (scaledTime * scaledTime * ((magnitude + 1) * scaledTime + magnitude)) + 1;
}

exports.easeOutBack = easeOutBack;

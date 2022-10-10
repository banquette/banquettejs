/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Bounce to completion
function easeOutBounce(t) {
    var scaledTime = t / 1;
    if (scaledTime < (1 / 2.75)) {
        return 7.5625 * scaledTime * scaledTime;
    }
    else if (scaledTime < (2 / 2.75)) {
        var scaledTime2 = scaledTime - (1.5 / 2.75);
        return (7.5625 * scaledTime2 * scaledTime2) + 0.75;
    }
    else if (scaledTime < (2.5 / 2.75)) {
        var scaledTime2 = scaledTime - (2.25 / 2.75);
        return (7.5625 * scaledTime2 * scaledTime2) + 0.9375;
    }
    else {
        var scaledTime2 = scaledTime - (2.625 / 2.75);
        return (7.5625 * scaledTime2 * scaledTime2) + 0.984375;
    }
}

exports.easeOutBounce = easeOutBounce;

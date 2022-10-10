/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var easeOutBounce = require('./ease-out-bounce.js');

// Bounce increasing in velocity until completion
function easeInBounce(t) {
    return 1 - easeOutBounce.easeOutBounce(1 - t);
}

exports.easeInBounce = easeInBounce;

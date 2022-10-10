/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easeOutElastic=function easeOutElastic(t,e){void 0===e&&(e=.7);var a=1-e,r=2*t;if(0===t||1===t)return t;var s=a/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*r)*Math.sin((r-s)*(2*Math.PI)/a)+1};

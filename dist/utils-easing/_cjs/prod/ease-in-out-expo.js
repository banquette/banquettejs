/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easeInOutExpo=function easeInOutExpo(e){if(0===e||1===e)return e;var t=2*e,r=t-1;return t<1?.5*Math.pow(2,10*r):.5*(2-Math.pow(2,-10*r))};

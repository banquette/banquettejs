/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./ease-in-bounce.js"),u=require("./ease-out-bounce.js");exports.easeInOutBounce=function easeInOutBounce(n){return n<.5?.5*e.easeInBounce(2*n):.5*u.easeOutBounce(2*n-1)+.5};

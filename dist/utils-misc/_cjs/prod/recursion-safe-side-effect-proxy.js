/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-function");exports.recursionSafeSideEffectProxy=function recursionSafeSideEffectProxy(r){var t=0;return function(i){++t,e.isFunction(i)&&i(),0==--t&&r()}};

/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),r=require("./enum-to-array.js");exports.ensureInEnum=function ensureInEnum(n,u,t){return!e.isNullOrUndefined(n)&&r.enumToArray(u).indexOf(n)>-1?n:t};

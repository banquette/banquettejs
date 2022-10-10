/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-boolean.js"),r=require("./is-null-or-undefined.js"),i=require("./is-number.js"),s=require("./is-string.js");exports.isScalar=function isScalar(n){return s.isString(n)||i.isNumber(n)||e.isBoolean(n)||r.isNullOrUndefined(n)};

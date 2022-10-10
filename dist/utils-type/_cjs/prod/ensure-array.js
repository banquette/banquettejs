/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./is-array.js"),e=require("./is-null-or-undefined.js");exports.ensureArray=function ensureArray(s){return e.isNullOrUndefined(s)?[]:r.isArray(s)?s:[s]};

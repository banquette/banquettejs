/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-function.js"),i=require("./is-object.js"),s=require("./is-undefined.js");exports.isValidMomentDate=function isValidMomentDate(t){return i.isObject(t)&&(!s.isUndefined(t.isMoment)||!s.isUndefined(t._isAMomentObject))&&(e.isFunction(t.isValid)&&t.isValid()||!0===t._isValid)};

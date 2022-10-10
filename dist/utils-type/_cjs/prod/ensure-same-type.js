/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./ensure-array.js"),r=require("./ensure-boolean.js"),s=require("./ensure-number.js"),u=require("./ensure-object.js"),n=require("./ensure-string.js"),t=require("./is-array.js");exports.ensureSameType=function ensureSameType(a,i){switch(null===i?"null":typeof i){case"string":return n.ensureString(a);case"number":case"bigint":return s.ensureNumber(a);case"boolean":return r.ensureBoolean(a);case"object":return t.isArray(i)?e.ensureArray(a):u.ensureObject(a)}return a};

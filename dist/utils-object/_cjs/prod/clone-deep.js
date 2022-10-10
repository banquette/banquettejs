/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array"),t=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("./extend.js");exports.cloneDeep=function cloneDeep(i){return e.isArray(i)?r.extend([],[i],!0):t.isObject(i)?r.extend({},[i],!0):i};

/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-number"),r=require("@banquette/utils-type/_cjs/prod/is-string");exports.parseCssDuration=function parseCssDuration(t){if(r.isString(t)){var s=parseFloat(t);return t.match(/[^m]s\s*$/)&&(s*=1e3),s}return e.ensureNumber(t)};

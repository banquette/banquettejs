/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-string.js"),r=require("./is-valid-number.js");exports.ensureInteger=function ensureInteger(s,i){return void 0===i&&(i=0),e.isString(s)&&(s=parseInt(s,10)),r.isValidNumber(s)?s:i};

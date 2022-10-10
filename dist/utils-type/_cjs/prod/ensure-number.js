/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-string.js"),r=require("./is-valid-number.js");exports.ensureNumber=function ensureNumber(s,i){return void 0===i&&(i=0),e.isString(s)&&(s=s.indexOf(".")<0?parseInt(s,10):parseFloat(s)),r.isValidNumber(s)?s:i};

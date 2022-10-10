/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-number"),t=require("@banquette/utils-type/_cjs/prod/is-string"),r=require("./format/trim.js");exports.isEmptyString=function isEmptyString(i){return(t.isString(i)||e.isNumber(i))&&!r.trim(""+i).length};

/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-object/_cjs/prod/get-object-keys"),t=require("@banquette/utils-type/_cjs/prod/is-numeric");exports.enumToArray=function enumToArray(r){return e.getObjectKeys(r).filter((function(e){return!t.isNumeric(e)})).map((function(e){return r[e]})).filter((function(e){return"number"==typeof e||"string"==typeof e}))};

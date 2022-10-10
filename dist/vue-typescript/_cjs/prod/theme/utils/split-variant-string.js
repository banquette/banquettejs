/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/utils-string/_cjs/prod/format/trim");exports.splitVariantString=function splitVariantString(r){return r.split(" ").reduce((function(r,e){return(e=t.trim(e)).length&&r.push(e),r}),[]).sort()};

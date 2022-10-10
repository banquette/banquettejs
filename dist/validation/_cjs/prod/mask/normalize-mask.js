/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array");exports.normalizeMasks=function normalizeMasks(r,t){for(var s=[],a=0,n=e.ensureArray(r);a<n.length;a++){var u=n[a];u.length&&("/"!==u[0]&&":"!==u[0]&&(u=t+("/"!==t[t.length-1]?"/":"")+u),s.push(u))}return s};

/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-random/_cjs/prod/random-string"),r=[];exports.getUniqueRandomId=function getUniqueRandomId(){var t;do{t="bt-"+e.randomString(6).toLowerCase()}while(r.indexOf(t)>-1);return r.push(t),t};

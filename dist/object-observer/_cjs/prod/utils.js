/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object"),t=require("./constant.js");exports.extractObserver=function extractObserver(r){return e.isObject(r)&&r[t.ObserverInstance]||null};

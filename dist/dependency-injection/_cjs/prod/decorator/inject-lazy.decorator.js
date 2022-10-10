/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined"),t=require("../utils.js");exports.InjectLazy=function InjectLazy(n){return function(r,i,u){t.registerExplicitDependency(e.isUndefined(i)?r:r.constructor,n,!0,i,u)}};

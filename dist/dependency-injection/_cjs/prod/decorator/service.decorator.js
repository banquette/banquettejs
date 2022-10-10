/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array"),r=require("../injector.js"),t=require("../utils.js");exports.Service=function Service(i,n){return void 0===n&&(n=null),function(s){var u=t.registerImplicitDependencies(n||s);u.ctor=s,u.singleton=!0,u.tags=e.ensureArray(i),r.Injector.Register(u)}};

/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array"),r=require("../injector.js"),t=require("../utils.js");exports.Module=function Module(u){return function(i){var s=t.registerImplicitDependencies(i);s.tags=e.ensureArray(u),r.Injector.Register(s)}};

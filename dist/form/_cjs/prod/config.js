/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/config/_cjs/prod/config/configuration.service"),r=require("@banquette/dependency-injection/_cjs/prod/injector"),t=Symbol("form");r.Injector.Get(e.ConfigurationService).register(t,{factory:{extendedNamePrefix:null,extendedNameSuffix:"$"}},!0),exports.FormConfigurationSymbol=t;

/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/config/_cjs/prod/config/configuration.service"),r=require("@banquette/dependency-injection/_cjs/prod/injector"),i=Symbol("api");r.Injector.Get(e.ConfigurationService).register(i,{eventsPriorities:{beforeRequest:100,beforeResponse:-100,requestSuccess:0,requestFailure:0}},!0),exports.ApiConfigurationSymbol=i;

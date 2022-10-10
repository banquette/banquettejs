/*!
 * Banquette Log v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/config/_cjs/prod/config/configuration.service"),o=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("./constants.js"),t=Symbol("log");o.Injector.Get(e.ConfigurationService).register(t,{level:r.LogLevel.ALL,storageKey:"_logs",maximumCount:50},!0),exports.LogConfigurationSymbol=t;

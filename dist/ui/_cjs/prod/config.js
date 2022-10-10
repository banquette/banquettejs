/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/config/_cjs/prod/config/configuration.service"),t=require("@banquette/dependency-injection/_cjs/prod/injector"),r=Symbol("ui");t.Injector.Get(e.ConfigurationService).register(r,{table:{pagination:{pageParameterName:"page",itemsPerPageParameterName:"itemsPerPage",strategyParameterName:"strategy"},filtering:{flattenConcatenator:"."},apiEventsPriorities:{beforeRequest:1,beforeResponse:1}}},!0),exports.UiConfigurationSymbol=r;

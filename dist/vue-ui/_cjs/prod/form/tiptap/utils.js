/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("./tiptap-configuration.service.js"),t={};exports.ModulesToolbarAliases=t,exports.registerModuleToolbarAlias=function registerModuleToolbarAlias(e,r){t[r]=e},exports.registerTiptapConfiguration=function registerTiptapConfiguration(t,i){return e.Injector.Get(r.TiptapConfigurationService).set(t,i)};

/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("../model-metadata.service.js"),r=e.Injector.Get(t.ModelMetadataService);exports.Factory=function Factory(e){return function(t){r.registerFactory(t,e)}};

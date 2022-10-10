/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("reflect-metadata");var e=require("@banquette/utils-type/_cjs/prod/ensure-array");exports.getConstructorArgumentsTypes=function getConstructorArgumentsTypes(t){return e.ensureArray(Reflect.getMetadata("design:paramtypes",t))};

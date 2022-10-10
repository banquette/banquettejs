/*!
 * Banquette Inversify v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("./injector.js");exports.useInversifyContainer=function useInversifyContainer(n){e.Injector.UseAdapter(new r.InversifyAdapter(n))};

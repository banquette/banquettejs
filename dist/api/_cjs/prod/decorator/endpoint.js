/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/exception/_cjs/prod/usage.exception"),n=require("@banquette/utils-type/_cjs/prod/is-constructor"),i=require("../api-endpoint-storage.service.js"),r=e.Injector.Get(i.ApiEndpointStorageService);exports.Endpoint=function Endpoint(e,i,o,c){return function(s){if(!n.isConstructor(s))throw new t.UsageException('You can only place "@Endpoint()" on a class.');r.registerEndpoint(e,i,o,c,s)}};

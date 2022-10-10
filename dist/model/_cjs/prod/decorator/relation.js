/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/exception/_cjs/prod/usage.exception"),n=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),i=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("../model-metadata.service.js"),o=e.Injector.Get(r.ModelMetadataService);exports.Relation=function Relation(e){return function(r,u){if(!n.isNonEmptyString(u)||i.isFunction(r.constructor.prototype[u]))throw new t.UsageException("You can only define a relation on properties.");o.registerRelation(r.constructor,u,e)}};

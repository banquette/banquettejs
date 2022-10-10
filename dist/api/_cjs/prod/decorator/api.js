/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/model/_cjs/prod/decorator/utils"),r=require("@banquette/model/_cjs/prod/transformer/type/raw"),t=require("../transformer/api.js");exports.Api=function Api(a){return e.createRelationAwareTransformableDecorator(t.ApiTransformerSymbol,a,r.Raw())};

/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array"),t=require("./validation-context.js");exports.createValidator=function createValidator(r,a,n){return{tags:e.ensureArray(a),groups:e.ensureArray(n),validate:function(e,a){return r.validate(t.ValidationContext.EnsureValidationContext(e,a))}}};

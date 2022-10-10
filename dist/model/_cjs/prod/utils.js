/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("./exception/transform-inverse-not-supported.exception.js"),n=require("./exception/transform-not-supported.exception.js");function ensureCompleteTransformer(t){return e.isUndefined(t.transform)&&(t.transform=function(){throw new n.TransformNotSupportedException}),e.isUndefined(t.transformInverse)&&(t.transformInverse=function(){throw new r.TransformInverseNotSupportedException}),t}exports.ensureCompleteModelTransformer=function ensureCompleteModelTransformer(r){return r=ensureCompleteTransformer(r),e.isUndefined(r.getPriority)&&(r.getPriority=function(){return 0}),r},exports.ensureCompleteTransformer=ensureCompleteTransformer;

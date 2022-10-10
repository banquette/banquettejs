/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("../contants.js");exports.isFormTransformer=function isFormTransformer(t){return!e.isUndefined(t.type)&&r.FormRelatedTransformers.indexOf(t.type)>-1};

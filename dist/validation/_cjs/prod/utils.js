/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array"),t=require("@banquette/utils-type/_cjs/prod/is-object"),s=require("@banquette/utils-type/_cjs/prod/is-string"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),n=require("./validation-result.js");exports.assignOptionsDefaults=function assignOptionsDefaults(t,n,r,a,u){return void 0===a&&(a=[]),void 0===u&&(u=[]),s.isString(t)&&(t={message:t}),{message:i.isUndefined(t.message)?n:t.message,type:t.type||r,tags:e.ensureArray(t.tags||a),groups:e.ensureArray(t.groups||u)}},exports.isValidationContext=function isValidationContext(e){return t.isObject(e)&&e.result instanceof n.ValidationResult},exports.isValidatorContainer=function isValidatorContainer(e){return t.isObject(e)&&"validate"in e&&"set"in e&&"remove"in e&&"has"in e},exports.splitPath=function splitPath(e){return(e.length>0&&"/"===e[0]?e.substring(1):e).split("/")};

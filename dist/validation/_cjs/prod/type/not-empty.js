/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),t=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("../constant.js"),s=require("../create-validator.js"),i=require("../utils.js");exports.NotEmpty=function NotEmpty(u){void 0===u&&(u={});var a=i.assignOptionsDefaults(u,"This is mandatory.","not-empty");return s.createValidator({validate:function(r){return(e.isNullOrUndefined(r.value)||""===r.value||t.isObject(r.value)&&!Object.keys(r.value).length)&&r.result.addViolation(a.type,a.message),r.result}},[r.SYNC_TAG].concat(a.tags),a.groups)};

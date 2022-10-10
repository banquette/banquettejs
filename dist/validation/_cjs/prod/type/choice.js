/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-misc/_cjs/prod/are-equal"),t=require("@banquette/utils-type/_cjs/prod/is-object"),a=require("../constant.js"),i=require("../create-validator.js"),r=require("../utils.js");exports.Choice=function Choice(s,u){void 0===u&&(u={});var o=r.assignOptionsDefaults(u,"The value is not part of the expected choices.","choice");return i.createValidator({validate:function(a){if(t.isObject(a.value)){var i=void 0;for(i=0;i<s.length&&(!t.isObject(s[i])||!e.areEqual(s[i],a.value));++i);i>=s.length&&a.result.addViolation(o.type,o.message)}else s.indexOf(a.value)<0&&a.result.addViolation(o.type,o.message);return a.result}},[a.SYNC_TAG].concat(o.tags),o.groups)};

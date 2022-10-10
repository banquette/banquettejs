/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-string"),t=require("../constant.js"),r=require("../create-validator.js"),a=require("../utils.js");exports.Pattern=function Pattern(s,i){void 0===i&&(i={});var u=a.assignOptionsDefaults(i,"Invalid value.","pattern");return r.createValidator({validate:function(t){return!t.value||e.isString(t.value)&&s.test(t.value)||t.result.addViolation(u.type,u.message),s.lastIndex=0,t.result}},[t.SYNC_TAG].concat(u.tags),u.groups)};

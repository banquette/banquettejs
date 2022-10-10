/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-misc/_cjs/prod/are-equal"),t=require("@banquette/utils-type/_cjs/prod/ensure-same-type"),a=require("@banquette/utils-type/_cjs/prod/is-object"),u=require("../constant.js"),r=require("../create-validator.js"),s=require("../utils.js");exports.Equal=function Equal(i,l,n){void 0===l&&(l=!0),void 0===n&&(n={});var o=s.assignOptionsDefaults(n,"The value is not what is expected.","equal");return r.createValidator({validate:function(u){return a.isObject(i)?null!==u.value&&a.isObject(u.value)&&e.areEqual(i,u.value)||u.result.addViolation(o.type,o.message):(l&&i!==u.value||!l&&t.ensureSameType(u.value,i)!==i)&&u.result.addViolation(o.type,o.message),u.result}},[u.SYNC_TAG].concat(o.tags),o.groups)};

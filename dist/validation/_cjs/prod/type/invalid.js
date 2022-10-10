/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../constant.js"),t=require("../create-validator.js"),a=require("../utils.js");exports.Invalid=function Invalid(r){void 0===r&&(r={});var i=a.assignOptionsDefaults(r,"The value is invalid","invalid");return t.createValidator({validate:function(e){return e.result.addViolation(i.type,i.message),e.result}},[e.SYNC_TAG].concat(i.tags),i.groups)};

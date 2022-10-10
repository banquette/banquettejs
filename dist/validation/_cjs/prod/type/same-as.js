/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../constant.js"),t=require("../create-validator.js"),a=require("../utils.js");exports.SameAs=function SameAs(s,r){void 0===r&&(r={});var u=a.assignOptionsDefaults(r,'The value must be the same as "%path%".',"same-as");return t.createValidator({validate:function(e){var t=e.getOtherValue(s);return e.value!==t&&e.result.addViolation(u.type,u.message,{path:s}),e.result}},[e.SYNC_TAG].concat(u.tags),u.groups)};

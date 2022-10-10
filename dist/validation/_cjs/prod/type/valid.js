/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../constant.js"),r=require("../create-validator.js");exports.Valid=function(t){return void 0===t&&(t=[]),r.createValidator({validate:function(e){return e.result}},[e.SYNC_TAG].concat(t))};

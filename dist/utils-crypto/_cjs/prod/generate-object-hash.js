/*!
 * Banquette UtilsCrypto v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-serializable"),r=require("./md5.js");exports.generateObjectHash=function generateObjectHash(t){return r.md5(JSON.stringify(e.ensureSerializable(t)))};

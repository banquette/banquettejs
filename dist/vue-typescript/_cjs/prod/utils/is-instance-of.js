/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./converters.js");exports.isInstanceOf=function isInstanceOf(t,o){var r=e.anyToComponentCtor(t);return o=e.anyToComponentCtor(o),null!==r&&r.prototype===o.prototype};

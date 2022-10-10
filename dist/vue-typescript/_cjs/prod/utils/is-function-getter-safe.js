/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-function"),t=require("./get-property-descriptor.js");exports.isFunctionGetterSafe=function isFunctionGetterSafe(r,i){var s=t.getPropertyDescriptor(r,i);return!(!s||s.get||s.set)&&e.isFunction(s.value)};

/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined");exports.kebabCase=function kebabCase(r){if(!e.isNullOrUndefined(r)){var t=r.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g);return null===t?"":t.filter(Boolean).map((function(e){return e.toLowerCase()})).join("-")}return""};

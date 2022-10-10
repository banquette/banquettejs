/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-function"),t=require("../utils/get-or-create-component-metadata.js");exports.Composable=function Composable(o){return void 0===o&&(o={}),function(r){var a=t.getOrCreateComponentMetadata(r.prototype);e.isFunction(o)&&(o={factory:o}),a.composable=o}};

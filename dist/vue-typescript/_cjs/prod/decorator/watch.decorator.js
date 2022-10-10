/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("../utils/get-or-create-component-metadata.js");exports.ImmediateStrategy=void 0,(e=exports.ImmediateStrategy||(exports.ImmediateStrategy={})).Sync="sync",e.BeforeMount="beforeMount",e.Mounted="mounted",e.NextTick="nextTick",exports.Watch=function Watch(e,a){return void 0===a&&(a={}),function(i,o){var n=r.getOrCreateComponentMetadata(i);t.isUndefined(a.immediate)?a.immediate=exports.ImmediateStrategy.Mounted:!0===a.immediate&&(a.immediate=exports.ImmediateStrategy.Sync),n.watch.push({target:o,source:e,options:a})}};

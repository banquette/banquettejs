/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array"),t=require("@banquette/utils-type/_cjs/prod/is-object");exports.isTiptapConfiguration=function isTiptapConfiguration(i){return t.isObject(i)&&(e.isArray(i.toolbars)||t.isObject(i.modules)||e.isArray(i.extensions))};

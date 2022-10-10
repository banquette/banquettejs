/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),n=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("../utils/get-or-create-component-metadata.js");exports.InjectProvided=function InjectProvided(o,i){return function(u,a){var s=r.getOrCreateComponentMetadata(u);if(!t.isNonEmptyString(a)||n.isFunction(u.constructor.prototype[a]))throw new e.UsageException("You can only use @InjectProvided() on properties.");s.injected[a]={target:o,defaultValue:i}}};

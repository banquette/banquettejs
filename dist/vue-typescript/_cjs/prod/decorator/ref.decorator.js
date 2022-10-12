/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),n=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("../utils/get-or-create-component-metadata.js");exports.Ref=function Ref(){return function(o,i){if(!t.isNonEmptyString(i)||n.isFunction(o.constructor.prototype[i]))throw new e.UsageException("You can only use @Ref() on properties.");r.getOrCreateComponentMetadata(o).reactive.push(i)}};
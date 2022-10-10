/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),n=require("@banquette/utils-type/_cjs/prod/ensure-array"),r=require("@banquette/utils-type/_cjs/prod/is-function"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),o=require("../utils/get-or-create-component-metadata.js");exports.Lifecycle=function Lifecycle(u){return function(s,a){var c=o.getOrCreateComponentMetadata(s);if(!t.isNonEmptyString(a)||!r.isFunction(s.constructor.prototype[a]))throw new e.UsageException("You can only use @Lifecycle() on methods.");for(var p=0,y=n.ensureArray(u);p<y.length;p++){var f=y[p];i.isUndefined(c.hooks[f])&&(c.hooks[f]=[]),c.hooks[f].indexOf(a)<0&&c.hooks[f].push(a)}}};

/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/format/trim"),r=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),i=require("@banquette/utils-type/_cjs/prod/is-function"),n=require("@banquette/utils-type/_cjs/prod/is-object"),u=require("@banquette/utils-type/_cjs/prod/is-type"),a=require("../utils/get-or-create-component-metadata.js");exports.ThemeVar=function ThemeVar(o,s){return function(p,c){if(!r.isNonEmptyString(c)||i.isFunction(p.constructor.prototype[c]))throw new e.UsageException("You can only use @ThemeVar() on properties.");u.isType(o,n.isObject)||(o={name:o,defaultValue:s}),o.name=t.trim(o.name),a.getOrCreateComponentMetadata(p).themeVars[c]=o}};

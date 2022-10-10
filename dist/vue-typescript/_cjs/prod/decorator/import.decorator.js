/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),r=require("@banquette/utils-type/_cjs/prod/is-function"),i=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),n=require("@banquette/utils-type/_cjs/prod/is-undefined"),o=require("../utils/get-or-create-component-metadata.js");exports.Import=function Import(s,u){return function(p,a){var c=o.getOrCreateComponentMetadata(p);if(!t.isNonEmptyString(a)||r.isFunction(p.constructor.prototype[a]))throw new e.UsageException("You can only use @Import() on properties.");if(!n.isUndefined(c.imports[a]))throw new e.UsageException("You cannot define multiple @Import on the same property (".concat(a,")."));var l=r.isFunction(s)?{composable:s}:s;l.prefixOrAlias=n.isUndefined(l.prefixOrAlias)?u:l.prefixOrAlias,i.isNullOrUndefined(l.prefixOrAlias)&&(l.prefixOrAlias=function(e){return a+e[0].toUpperCase()+e.substring(1)}),c.imports[a]=l}};

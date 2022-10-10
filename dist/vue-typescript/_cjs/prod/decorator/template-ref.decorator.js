/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),n=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("../utils/get-or-create-component-metadata.js");exports.TemplateRef=function TemplateRef(o,i){return void 0===i&&(i=!1),function(s,u){if(!t.isNonEmptyString(u)||n.isFunction(s.constructor.prototype[u]))throw new e.UsageException("You can only use @TemplateRef() on properties.");r.getOrCreateComponentMetadata(s).templateRefs[u]={name:o,resolve:i}}};

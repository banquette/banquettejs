/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),r=require("@banquette/utils-type/_cjs/prod/is-function"),o=require("../utils/get-or-create-component-metadata.js");exports.Provide=function Provide(n,i){return void 0===n&&(n=null),void 0===i&&(i=!0),function(u,s){var a=o.getOrCreateComponentMetadata(u);if(!t.isNonEmptyString(s)||r.isFunction(u.constructor.prototype[s]))throw new e.UsageException("You can only use @Provide() on properties.");a.provided[s]={provideAs:n||s,readonly:i}}};

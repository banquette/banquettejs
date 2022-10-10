/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-object/_cjs/prod/get-object-value"),o=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),r=require("@banquette/utils-type/_cjs/prod/is-object"),s=require("../utils/get-or-create-component-metadata.js");exports.Expose=function Expose(n,i){return void 0===n&&(n=null),void 0===i&&(i=!0),function(u,a){if(!o.isNonEmptyString(a))throw new e.UsageException("You can only use @Expose() on properties or methods.");var p=s.getOrCreateComponentMetadata(u),c=null!==n&&r.isObject(n);p.exposed[a]={exposeAs:c?t.getObjectValue(n,"exposeAs",a):n||a,observe:c?t.getObjectValue(n,"observe",i):i}}};

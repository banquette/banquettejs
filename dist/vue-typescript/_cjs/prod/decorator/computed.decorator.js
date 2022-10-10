/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-object/_cjs/prod/get-object-value"),o=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("@banquette/utils-type/_cjs/prod/is-undefined"),i=require("../utils/get-or-create-component-metadata.js"),u=require("./expose.decorator.js");exports.Computed=function Computed(n,a,s,d){return void 0===n&&(n={}),void 0===d&&(d=null),function(c,p){if(r.isUndefined(p))throw new e.UsageException("You can only use @Computed() on properties.");var l=i.getOrCreateComponentMetadata(c),b=null!==n&&o.isObject(n);l.computed[p]={onTrigger:b?t.getObjectValue(n,"onTrigger",void 0):a||void 0,onTrack:b?t.getObjectValue(n,"onTrack",void 0):s||void 0},!1!==(d=b?t.getObjectValue(n,"exposeAs",null):n)&&r.isUndefined(l.exposed[p])&&u.Expose(d)(c,p)}};

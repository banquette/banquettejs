/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-type/_cjs/prod/is-function"),i=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("@banquette/utils-type/_cjs/prod/is-string"),u=require("@banquette/utils-type/_cjs/prod/is-type"),n=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.resolveImportPublicName=function resolveImportPublicName(s,o,c){if(!s)return o;if(null===c)return s+o;if(!1===c)return o;if(r.isString(c))return c+o;if(u.isType(c,i.isObject))return n.isUndefined(c[o])?o:c[o];if(t.isFunction(c))return c(o);throw new e.UsageException("Unable to resolve the public name of ".concat(o,". Please check your decorator's configuration."))};

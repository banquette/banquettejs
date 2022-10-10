/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array"),r=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.compareObjects=function compareObjects(t,s,n){void 0===n&&(n=!1);var a={};if(!r.isObject(t)||!r.isObject(s))return a;for(var o in t)if(!t.hasOwnProperty||t.hasOwnProperty(o)){var u=t[o];if(i.isUndefined(s[o])){if(i.isUndefined(u))continue;a[o]=n?{a:u,b:void 0}:void 0}else if((r.isObjectLiteral(u)||e.isArray(u))&&(r.isObjectLiteral(s[o])||e.isArray(s[o]))){var b=compareObjects(u,s[o],n);Object.keys(b).length>0&&(a[o]=b)}else u!==s[o]&&(a[o]=n?{a:u,b:s[o]}:s[o])}for(var o in s)s.hasOwnProperty&&!s.hasOwnProperty(o)||!i.isUndefined(t[o])||i.isUndefined(s[o])||(a[o]=n?{a:void 0,b:s[o]}:s[o]);return a};

/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array"),t=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("./clone-deep.js");exports.cloneObjectWithMask=function cloneObjectWithMask(s,n){var c=e.isArray(s),u=c?[]:{};if(!t.isObject(s))return s;if(t.isObject(n,!0)){var a=Object.keys(n);if(1===a.length&&"*"===a[0])for(var b=0,l=Object.keys(s);b<l.length;b++){var o=l[b],j=void 0,f=c?Number(o):o;if(t.isObject(s[f]))j=cloneObjectWithMask(s[f],n["*"]);else{if(!1===n)continue;j=s[f]}c?u.push(j):u[f]=j}else for(var O=0,p=Object.keys(n);O<p.length;O++){f=p[O];t.isObject(s[f])?u[f]=cloneObjectWithMask(s[f],n[f]):!1===n||i.isUndefined(s[f])||(u[f]=s[f])}}else if(!0===n)return r.cloneDeep(s);return u};

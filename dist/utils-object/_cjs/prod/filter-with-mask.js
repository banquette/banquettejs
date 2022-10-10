/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object");exports.filterWithMask=function filterWithMask(t,r){for(var i=0,s=Object.keys(t);i<s.length;i++){var a=s[i];a in r?e.isObject(t[a])&&e.isObject(r[a])&&(t[a]=filterWithMask(t[a],r[a])):delete t[a]}return t};

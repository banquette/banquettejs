/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("@banquette/utils-type/_cjs/prod/is-array");exports.areEqual=function areEqual(t,u){var a=null===t?"null":typeof t;if(a!==(null===u?"null":typeof u))return!1;if("object"!==a||!r.isArray(t)&&!e.isObjectLiteral(t)||!r.isArray(u)&&!e.isObjectLiteral(u))return t===u;var l=Object.keys(t),i=Object.keys(u);if(l.length!==i.length)return!1;for(var n=0,s=l;n<s.length;n++){var o=s[n];if(!areEqual(t[o],u[o]))return!1}return!0};

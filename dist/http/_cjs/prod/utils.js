/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined"),t=require("./constants.js");function buildQueryParameters(e){for(var t=[],r=0,n=Object.keys(e);r<n.length;r++){var u=n[r];t.push(u+"="+encodeURIComponent(e[u]))}return t.length>0?"?"+t.join("&"):""}exports.appendQueryParameters=function appendQueryParameters(e,t){var r=buildQueryParameters(t);return e.indexOf("?")>=0?e+"&"+r.substring(1):e+r},exports.buildQueryParameters=buildQueryParameters,exports.httpStatusToText=function httpStatusToText(r){return e.isUndefined(t.HttpStatus[r])?"Unknown":t.HttpStatus[r]};

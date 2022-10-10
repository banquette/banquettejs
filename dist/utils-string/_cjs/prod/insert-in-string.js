/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertInString=function insertInString(t,e,n){return e<0&&(e=Math.min(0,e+t.length)),e>0?t.substring(0,e)+n+t.substring(e):n+t};

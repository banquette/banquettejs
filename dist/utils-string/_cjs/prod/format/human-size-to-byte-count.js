/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={k:1,m:2,g:3,t:4};exports.humanSizeToByteCount=function humanSizeToByteCount(t){var r=t.match(/(\d*\.?\d*)\s*([a-z]+)/i);if(!r)return parseFloat(t);var a=parseFloat(r[1]),o=r[2];if(o.length<2)return Math.round("b"===o?a/8:a);var n="KB"===o||"i"===o[1]?1024:1e3,u=a*Math.pow(n,e[o[0].toLowerCase()]||1);return Math.round("b"===o[o.length-1]?u/8:u)};

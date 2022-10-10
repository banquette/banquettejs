/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fixedDigits=function fixedDigits(e,t){var i=e.toString(),r="";return"-"===i[0]&&(r="-",i=i.substring(1)),r+"0".repeat(Math.max(0,t-i.length))+i};

/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.arrayIntersect=function arrayIntersect(e,r){if(r.length>e.length){var t=r;r=e,e=t}return e.filter((function(e){return r.indexOf(e)>-1}))};

/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.utf8Size=function utf8Size(e){for(var t=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);t+=o<128?1:o<2048?2:3}return t};

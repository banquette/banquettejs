/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.arrayFilterInPlace=function arrayFilterInPlace(e,r){for(var t=0,a=0;a<e.length;++a)r(e[a],a,e)&&(e[t++]=e[a]);e.length=t};

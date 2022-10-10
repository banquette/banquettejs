/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.getFirstOf=function getFirstOf(){for(var t=arguments,r=[],n=0;n<arguments.length;n++)r[n]=t[n];if(0!==r.length){for(var i=0,f=r;i<f.length;i++){var s=f[i];if(!e.isUndefined(s))return s}return r[r.length-1]}};

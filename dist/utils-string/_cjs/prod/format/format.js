/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.format=function format(e){for(var r=arguments,t=[],n=1;n<arguments.length;n++)t[n-1]=r[n];var o=0;return e.replace(/\{(\w*)\}/gi,(function(e){var r,n=null;if("{}"===e)r=o,o++;else{var l=~~(r=e.substr(1,e.length-2));l.toString()===r?r=l:(n=r,r=0)}return r>=t.length?"":n?t[r][n]||"":t[r]}))};

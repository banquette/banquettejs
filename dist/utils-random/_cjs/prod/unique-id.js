/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=[];exports.uniqueId=function uniqueId(r,t){void 0===r&&(r=9),void 0===t&&(t=!0);var i="";for(r=Math.max(1,r);;){var n=Math.random().toString(36).substring(2,r-i.length+2);if(""===i&&(n=n.replace(/^[0-9]+/,"")),!((i+=n).length<r)){if(!t||e.indexOf(i)<0)return e.push(i),i;i=""}}};

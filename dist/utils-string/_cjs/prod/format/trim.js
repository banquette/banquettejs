/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TrimStrategy=void 0,(r=exports.TrimStrategy||(exports.TrimStrategy={}))[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT",r[r.BOTH=3]="BOTH",exports.trim=function trim(r,t,e){void 0===t&&(t=" \n\r\t"),void 0===e&&(e=exports.TrimStrategy.BOTH);var i=0,T=r.length,o=t.length>1;if((e&exports.TrimStrategy.LEFT)===exports.TrimStrategy.LEFT)for(;i<T&&(!o&&r[i]===t||o&&t.indexOf(r[i])>=0);)++i;if((e&exports.TrimStrategy.RIGHT)===exports.TrimStrategy.RIGHT)for(;T>i&&(!o&&r[T-1]===t||o&&t.indexOf(r[T-1])>=0);)--T;return i>0||T<r.length?r.substring(i,T):r};

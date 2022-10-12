/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=function throttle(e,t,l){void 0===l&&(l=null);var n=0,u=null,o=[];return function(){var r=l||this,i=(new Date).getTime();o=arguments,null!==u&&clearTimeout(u),n&&i<n+t?u=setTimeout((function(){u=null,n=(new Date).getTime(),e.apply(r,o)}),n+t-i):(n=i,e.apply(r,o))}};

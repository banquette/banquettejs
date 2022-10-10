/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=function throttle(e,t,n){void 0===n&&(n=null);var o=0,i=null,l=[];return function(){var r=n||this,u=(new Date).getTime();l=arguments,i&&window.clearTimeout(i),o&&u<o+t?i=window.setTimeout((function(){i=null,o=(new Date).getTime(),e.apply(r,l)}),o+t-u):(o=u,e.apply(r,l))}};

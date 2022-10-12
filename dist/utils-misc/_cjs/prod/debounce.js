/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=function debounce(e,t,u){void 0===u&&(u=!0);var n=null;return function(){var o=this,l=arguments,later=function(){n=null,e.apply(o,l)},r=u&&!n;null!==n&&clearTimeout(n),n=setTimeout(later,t),r&&e.apply(o,l)}};

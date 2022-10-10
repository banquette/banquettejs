/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=function debounce(e,n,o){void 0===o&&(o=!0);var t=null;return function(){var u=this,i=arguments,later=function(){t=null,e.apply(u,i)},r=o&&!t;t&&window.clearTimeout(t),t=window.setTimeout(later,n),r&&e.apply(u,i)}};

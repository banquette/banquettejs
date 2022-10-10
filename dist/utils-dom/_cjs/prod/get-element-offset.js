/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getElementOffset=function getElementOffset(e,t){void 0===t&&(t=!0);for(var o=0,f=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)if(o+=e.offsetLeft-e.scrollLeft,f+=e.offsetTop-e.scrollTop,(e=e.offsetParent)&&!t){var s=window.getComputedStyle(e).getPropertyValue("position");if("relative"===s||"absolute"===s)break}return{top:f,left:o}};

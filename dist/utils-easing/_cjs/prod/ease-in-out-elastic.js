/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easeInOutElastic=function easeInOutElastic(t,a){void 0===a&&(a=.65);var e=1-a;if(0===t||1===t)return t;var s=2*t,r=s-1,i=e/(2*Math.PI)*Math.asin(1);return s<1?Math.pow(2,10*r)*Math.sin((r-i)*(2*Math.PI)/e)*-.5:Math.pow(2,-10*r)*Math.sin((r-i)*(2*Math.PI)/e)*.5+1};

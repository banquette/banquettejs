/*!
 * Banquette UtilsEasing v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easeInElastic=function easeInElastic(e,t){if(void 0===t&&(t=.7),0===e||1===e)return e;var a=e/1-1,s=1-t,r=s/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*a)*Math.sin((a-r)*(2*Math.PI)/s)};

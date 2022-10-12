/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setIntervalWithTimeout=function setIntervalWithTimeout(e,t,r){var n=setInterval(e,t);return setTimeout((function(){clearInterval(n)}),r),n};

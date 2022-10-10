/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseUrlFragment=function parseUrlFragment(){return window.location.hash.substr(1).split("&").reduce((function(e,r){var t=r.split("=");return 2===t.length&&(e[t[0]]=t[1]),e}),{})};

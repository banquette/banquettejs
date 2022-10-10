/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-array.js");function isObject(t,r){return void 0===r&&(r=!1),!(null===t||"object"!=typeof t||r&&e.isArray(t))}exports.isObject=isObject,exports.isObjectLiteral=function isObjectLiteral(e){return isObject(e)&&Object.getPrototypeOf(e)===Object.prototype&&"[object Object]"===e.toString()};

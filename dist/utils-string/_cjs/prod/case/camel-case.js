/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./capitalize.js");exports.camelCase=function camelCase(r){var a=r.toLowerCase().replace(/[^A-Za-z0-9]/g," ").split(" ").reduce((function(r,a){return r+e.capitalize(a.toLowerCase())}));return a.charAt(0).toLowerCase()+a.slice(1)};

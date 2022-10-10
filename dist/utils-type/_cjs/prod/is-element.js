/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-object.js");exports.isElement=function isElement(t){return!(!e.isObject(t)||!(t.nodeName||t.prop&&t.attr&&t.find))};

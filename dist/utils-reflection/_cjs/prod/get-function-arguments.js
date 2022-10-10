/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-function");exports.getFunctionArguments=function getFunctionArguments(t){var n=(e.isFunction(t)?t.toString():t).replace(/(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm,""),r=n.slice(n.indexOf("(")+1,n.indexOf(")")).match(/([^\s,]+)/g);return null!==r?r:[]};

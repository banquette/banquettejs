/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),t=function(t){function SystemException(e,r,i){var n=t.call(this,e||"Internal error",r,i)||this;return n.previous=r,n.extra=i,n}return e.__extends(SystemException,t),SystemException}(require("./exception.js").Exception);exports.SystemException=t;

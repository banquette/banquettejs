/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=function(t){function RequestTimeoutException(e,i,o,u){void 0===i&&(i="Timeout reached (".concat(e,")"));var r=t.call(this,!1,i,o,u)||this;return r.timeout=e,r}return e.__extends(RequestTimeoutException,t),RequestTimeoutException}(require("./network.exception.js").NetworkException);exports.RequestTimeoutException=t;

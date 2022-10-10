/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=function(t){function NetworkException(e,r,o,n){void 0===r&&(r="An error occurred during the transaction.");var i=t.call(this,r,o,n)||this;return i.retryable=e,i.slug="network",i}return e.__extends(NetworkException,t),NetworkException}(require("@banquette/exception/_cjs/prod/system.exception").SystemException);exports.NetworkException=t;

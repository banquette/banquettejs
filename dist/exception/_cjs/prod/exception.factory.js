/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object"),t=require("@banquette/utils-type/_cjs/prod/is-string"),n=require("./exception.js"),r=require("./usage.exception.js"),i=function(){function ExceptionFactory(){}return ExceptionFactory.EnsureException=function(i,o,s){return void 0===o&&(o="Unknown error"),i instanceof n.Exception?i:t.isString(i)?new r.UsageException(i,s):i instanceof Error?new r.UsageException(i.toString(),s,{originalError:i,stack:i.stack}):e.isObject(i)&&t.isString(i.message)?new r.UsageException(i.message,s,{originalError:i}):new r.UsageException(o,s)},ExceptionFactory}();exports.ExceptionFactory=i;

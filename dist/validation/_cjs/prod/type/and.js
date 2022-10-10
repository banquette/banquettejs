/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../_virtual/_tslib.js"),r=function(r){function AndValidator(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(AndValidator,r),AndValidator.prototype.onNextResult=function(t){return!t.violations.length},AndValidator}(require("../abstract-virtual-container.js").AbstractVirtualContainer);exports.And=function(){for(var t=arguments,n=[],e=0;e<arguments.length;e++)n[e]=t[e];return new r(n)},exports.AndValidator=r;

/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../_virtual/_tslib.js"),r=require("@banquette/utils-type/_cjs/prod/ensure-array"),e=function(r){function IfValidator(t,e,n){var a=r.call(this,e,!0,n)||this;return a.condition=t,a}return t.__extends(IfValidator,r),IfValidator.prototype.onStart=function(t){return this.condition(t)},IfValidator.prototype.onNextResult=function(t){return!0},IfValidator}(require("../abstract-virtual-container.js").AbstractVirtualContainer);exports.If=function If(t,n,a){return new e(t,r.ensureArray(n),r.ensureArray(a))},exports.IfValidator=e;

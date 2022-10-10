/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../_virtual/_tslib.js"),i=require("../abstract-virtual-container.js"),r=function(r){function OrValidator(){var t=null!==r&&r.apply(this,arguments)||this;return t.lastViolationsCount=0,t.skippedCount=0,t.failedCount=0,t}return t.__extends(OrValidator,r),OrValidator.prototype.onStart=function(t){return this.lastViolationsCount=0,this.failedCount=0,!0},OrValidator.prototype.onNextResult=function(t,r,o){var n=this.validators[r-1];o=o||n instanceof i.AbstractVirtualContainer&&n.skipped;var a=t.violations.length!==this.lastViolationsCount||o;return this.lastViolationsCount=t.violations.length,a&&++this.failedCount,o&&++this.skippedCount,a},OrValidator.prototype.onEnd=function(t,i){this.failedCount<this.validators.length-this.skippedCount&&t.result.clearViolations(!1)},OrValidator}(i.AbstractVirtualContainer);exports.Or=function Or(){for(var t=arguments,i=[],o=0;o<arguments.length;o++)i[o]=t[o];return new r(i)},exports.OrValidator=r;

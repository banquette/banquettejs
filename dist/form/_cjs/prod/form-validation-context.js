/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./_virtual/_tslib.js"),o=function(o){function FormValidationContext(t,e,i,n,r,a,l){void 0===a&&(a=[]),void 0===l&&(l=[]);var d=o.call(this,i,n,r,a,l)||this;return d.form=t,d.formPath=e,d}return t.__extends(FormValidationContext,o),FormValidationContext.prototype.getOtherValue=function(t,o){return void 0===o&&(o=null),o},FormValidationContext.prototype.createSubContext=function(t,o,e,i){return void 0===e&&(e=[]),void 0===i&&(i=[]),new FormValidationContext(this.form,this.formPath,this,t,o,e,i)},FormValidationContext}(require("@banquette/validation/_cjs/prod/validation-context").ValidationContext);exports.FormValidationContext=o;

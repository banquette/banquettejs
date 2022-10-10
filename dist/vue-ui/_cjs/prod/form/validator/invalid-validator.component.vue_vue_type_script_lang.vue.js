/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/invalid"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),n=function(n){function ValidateInvalidComponent(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(ValidateInvalidComponent,n),ValidateInvalidComponent.prototype.buildValidator=function(){return e.Invalid({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidateInvalidComponent=t.__decorate([a.Component({name:"bt-validate-invalid",template:!1})],ValidateInvalidComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=n;

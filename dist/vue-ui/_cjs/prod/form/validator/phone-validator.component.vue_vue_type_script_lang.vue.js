/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/validation/_cjs/prod/type/phone"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),n=function(n){function ValidatePhoneComponent(){return null!==n&&n.apply(this,arguments)||this}return e.__extends(ValidatePhoneComponent,n),ValidatePhoneComponent.prototype.buildValidator=function(){return t.Phone({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidatePhoneComponent=e.__decorate([o.Component({name:"bt-validate-phone",template:!1})],ValidatePhoneComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=n;

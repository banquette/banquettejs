/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/email"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),i=function(i){function ValidateEmailComponent(){return null!==i&&i.apply(this,arguments)||this}return t.__extends(ValidateEmailComponent,i),ValidateEmailComponent.prototype.buildValidator=function(){return e.Email({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidateEmailComponent=t.__decorate([a.Component({name:"bt-validate-email",template:!1})],ValidateEmailComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=i;

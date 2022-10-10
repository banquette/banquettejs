/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/not-empty"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),n=function(n){function ValidateNotEmptyComponent(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(ValidateNotEmptyComponent,n),ValidateNotEmptyComponent.prototype.buildValidator=function(){return e.NotEmpty({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidateNotEmptyComponent=t.__decorate([o.Component({name:"bt-validate-not-empty",template:!1})],ValidateNotEmptyComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=n;

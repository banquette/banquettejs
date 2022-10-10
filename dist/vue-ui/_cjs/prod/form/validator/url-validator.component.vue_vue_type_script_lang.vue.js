/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/url"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),o=function(o){function ValidateUrlComponent(){return null!==o&&o.apply(this,arguments)||this}return t.__extends(ValidateUrlComponent,o),ValidateUrlComponent.prototype.buildValidator=function(){return e.Url({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidateUrlComponent=t.__decorate([r.Component({name:"bt-validate-url",template:!1})],ValidateUrlComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=o;

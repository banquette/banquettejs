/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/validation/_cjs/prod/type/same-as"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),r=function(r){function ValidateSameAsComponent(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(ValidateSameAsComponent,r),ValidateSameAsComponent.prototype.buildValidator=function(){return t.SameAs(this.path,{message:this.message,type:this.type,tags:this.tags,groups:this.groups})},e.__decorate([o.Prop({type:String,required:!0}),e.__metadata("design:type",String)],ValidateSameAsComponent.prototype,"path",void 0),ValidateSameAsComponent=e.__decorate([a.Component({name:"bt-validate-same-as",template:!1})],ValidateSameAsComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=r;

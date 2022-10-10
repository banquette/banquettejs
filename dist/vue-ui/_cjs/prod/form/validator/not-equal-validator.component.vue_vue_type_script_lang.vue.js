/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/not-equal"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),r=function(r){function ValidateNotEqualComponent(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(ValidateNotEqualComponent,r),ValidateNotEqualComponent.prototype.buildValidator=function(){return e.NotEqual(this.value,this.strict,{message:this.message,type:this.type,tags:this.tags,groups:this.groups})},t.__decorate([a.Prop({required:!0}),t.__metadata("design:type",Object)],ValidateNotEqualComponent.prototype,"value",void 0),t.__decorate([a.Prop({type:Boolean,default:!0}),t.__metadata("design:type",Boolean)],ValidateNotEqualComponent.prototype,"strict",void 0),ValidateNotEqualComponent=t.__decorate([o.Component({name:"bt-validate-not-equal",template:!1})],ValidateNotEqualComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=r;

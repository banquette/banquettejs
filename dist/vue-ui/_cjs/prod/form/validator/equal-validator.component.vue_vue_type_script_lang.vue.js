/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/validation/_cjs/prod/type/equal"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),r=function(r){function ValidateEqualComponent(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(ValidateEqualComponent,r),ValidateEqualComponent.prototype.buildValidator=function(){return t.Equal(this.value,this.strict,{message:this.message,type:this.type,tags:this.tags,groups:this.groups})},e.__decorate([o.Prop({required:!0}),e.__metadata("design:type",Object)],ValidateEqualComponent.prototype,"value",void 0),e.__decorate([o.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],ValidateEqualComponent.prototype,"strict",void 0),ValidateEqualComponent=e.__decorate([a.Component({name:"bt-validate-equal",template:!1})],ValidateEqualComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=r;

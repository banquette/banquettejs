/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/pattern"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),n=function(n){function ValidatePatternComponent(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(ValidatePatternComponent,n),ValidatePatternComponent.prototype.buildValidator=function(){return e.Pattern(new RegExp(this.pattern,this.flags),{message:this.message,type:this.type,tags:this.tags,groups:this.groups})},t.__decorate([r.Prop({type:String,required:!0}),t.__metadata("design:type",String)],ValidatePatternComponent.prototype,"pattern",void 0),t.__decorate([r.Prop({type:String,default:void 0}),t.__metadata("design:type",String)],ValidatePatternComponent.prototype,"flags",void 0),ValidatePatternComponent=t.__decorate([a.Component({name:"bt-validate-pattern",template:!1})],ValidatePatternComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=n;

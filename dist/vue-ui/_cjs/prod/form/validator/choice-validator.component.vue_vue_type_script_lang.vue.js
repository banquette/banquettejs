/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/utils-type/_cjs/prod/ensure-array"),o=require("@banquette/validation/_cjs/prod/type/choice"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),i=function(i){function ValidateChoiceComponent(){return null!==i&&i.apply(this,arguments)||this}return e.__extends(ValidateChoiceComponent,i),ValidateChoiceComponent.prototype.buildValidator=function(){return o.Choice(this.choices,{message:this.message,type:this.type,tags:this.tags,groups:this.groups})},e.__decorate([a.Prop({type:Array,required:!0,transform:function(e){return t.ensureArray(e)}}),e.__metadata("design:type",Array)],ValidateChoiceComponent.prototype,"choices",void 0),ValidateChoiceComponent=e.__decorate([r.Component({name:"bt-validate-choice",template:!1})],ValidateChoiceComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=i;

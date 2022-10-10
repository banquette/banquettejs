/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var t=require("../../_virtual/_tslib.js"),e=require("@banquette/validation/_cjs/prod/type/empty"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=function(a){function ValidateEmptyComponent(){return null!==a&&a.apply(this,arguments)||this}return t.__extends(ValidateEmptyComponent,a),ValidateEmptyComponent.prototype.buildValidator=function(){return e.Empty({message:this.message,type:this.type,tags:this.tags,groups:this.groups})},ValidateEmptyComponent=t.__decorate([o.Component({name:"bt-validate-empty",template:!1})],ValidateEmptyComponent)}(require("./validator.component.js").ValidatorComponent);module.exports=a;

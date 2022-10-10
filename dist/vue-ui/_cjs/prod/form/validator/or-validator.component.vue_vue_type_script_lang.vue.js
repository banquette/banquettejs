/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/validation/_cjs/prod/type/or"),r=require("@banquette/validation/_cjs/prod/type/valid"),n=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/render.decorator"),o=require("vue"),i=function(i){function ValidateOrComponent(){return null!==i&&i.apply(this,arguments)||this}return e.__extends(ValidateOrComponent,i),ValidateOrComponent.prototype.buildValidator=function(){var e=this.children;return e.length>0?t.Or.apply(null,e):r.Valid()},ValidateOrComponent.prototype.render=function(e){return o.renderSlot(e.$slots,"default")},e.__decorate([a.Render(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",Object)],ValidateOrComponent.prototype,"render",null),ValidateOrComponent=e.__decorate([n.Component("bt-validate-or")],ValidateOrComponent)}(require("./container-validator.component.js").ContainerValidatorComponent);module.exports=i;

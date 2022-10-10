/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/validation/_cjs/prod/type/and"),n=require("@banquette/validation/_cjs/prod/type/valid"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/render.decorator"),o=require("vue"),d=function(d){function ValidateAndComponent(){return null!==d&&d.apply(this,arguments)||this}return e.__extends(ValidateAndComponent,d),ValidateAndComponent.prototype.buildValidator=function(){var e=this.children;return e.length>0?t.And.apply(null,e):n.Valid()},ValidateAndComponent.prototype.render=function(e){return o.renderSlot(e.$slots,"default")},e.__decorate([a.Render(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",Object)],ValidateAndComponent.prototype,"render",null),ValidateAndComponent=e.__decorate([r.Component("bt-validate-and")],ValidateAndComponent)}(require("./container-validator.component.js").ContainerValidatorComponent);module.exports=d;

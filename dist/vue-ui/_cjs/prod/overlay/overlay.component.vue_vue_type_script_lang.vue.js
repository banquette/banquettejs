/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../_virtual/_tslib.js"),t=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/computed.decorator"),n=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/theme-var.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),i=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),d=require("@banquette/vue-typescript/_cjs/prod/vue"),u=require("./theme-configuration.js"),m=function(d){function OverlayComponent(){var e=null!==d&&d.apply(this,arguments)||this;return e.zIndexIncrement=0,e}var m;return e.__extends(OverlayComponent,d),m=OverlayComponent,Object.defineProperty(OverlayComponent.prototype,"zIndex",{get:function(){return this.zIndexCssVar+this.zIndexIncrement},enumerable:!1,configurable:!0}),OverlayComponent.prototype.unmounted=function(){--m.zIndexIncrement},OverlayComponent.prototype.onVisibilityChange=function(){this.visible?this.zIndexIncrement=++m.zIndexIncrement:--m.zIndexIncrement},OverlayComponent.zIndexIncrement=0,e.__decorate([n.Prop({type:String,default:"fixed",transform:function(e){return"absolute"===e?e:"fixed"}}),e.__metadata("design:type",String)],OverlayComponent.prototype,"position",void 0),e.__decorate([n.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],OverlayComponent.prototype,"visible",void 0),e.__decorate([o.ThemeVar({name:"overlay-z-index",defaultValue:2e3}),e.__metadata("design:type",Number)],OverlayComponent.prototype,"zIndexCssVar",void 0),e.__decorate([r.Computed(),e.__metadata("design:type",Number),e.__metadata("design:paramtypes",[])],OverlayComponent.prototype,"zIndex",null),e.__decorate([i.Watch("visible",{immediate:i.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],OverlayComponent.prototype,"onVisibilityChange",null),OverlayComponent=m=e.__decorate([a.Themeable(u.ThemeConfiguration),t.Component({name:"bt-overlay",directives:[p.BindThemeDirective],emits:["update:visible"]})],OverlayComponent)}(d.Vue);module.exports=m;
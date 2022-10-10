/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("vue"),n=require("../decorator/component.decorator.js"),r=require("../decorator/prop.decorator.js"),s=require("../decorator/render.decorator.js"),o=require("../decorator/watch.decorator.js"),a=require("../vue.js"),i=require("./vue-themes.js"),m=function(a){function ThemeComponent(){var e=null!==a&&a.apply(this,arguments)||this;return e.themeInUse=null,e.unsubscribe=null,e}return e.__extends(ThemeComponent,a),ThemeComponent.prototype.render=function(e){var n=this,r={class:"bt-theme"};if(this.themeInUse!==this.name&&(null!==this.themeInUse&&i.VueThemes.Has(this.themeInUse)&&(i.VueThemes.Get(this.themeInUse).free(),this.themeInUse=null),this.name))if(i.VueThemes.Has(this.name)){var s=i.VueThemes.Get(this.name);r.class+=" "+s.id,null!==this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),s.use(),this.themeInUse=this.name}else null===this.unsubscribe&&(this.unsubscribe=i.VueThemes.OnCreated((function(e){e.theme&&e.theme.name===n.name&&n.$forceUpdate()})));return t.h("div",r,t.renderSlot(e.$slots,"default"))},ThemeComponent.prototype.onNameChange=function(){this.$forceUpdate()},e.__decorate([r.Prop({type:String,default:null}),e.__metadata("design:type",Object)],ThemeComponent.prototype,"name",void 0),e.__decorate([s.Render(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",Object)],ThemeComponent.prototype,"render",null),e.__decorate([o.Watch("name"),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],ThemeComponent.prototype,"onNameChange",null),ThemeComponent=e.__decorate([n.Component("bt-theme")],ThemeComponent)}(a.Vue);exports.ThemeComponent=m;

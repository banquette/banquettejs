/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../../_virtual/_tslib.js"),t=require("@banquette/utils-misc/_cjs/prod/is-server"),o=require("@banquette/vue-material-icons/_cjs/prod/close"),n=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/computed.decorator"),i=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/ref.decorator"),l=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),s=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),u=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),d=require("@banquette/vue-typescript/_cjs/prod/vue");require("../../../button/button/button.component.vue.js"),require("../../../button/button-group/button-group.component.vue.js"),require("../../../icon/icon.component.vue.js"),require("../../../progress/progress-horizontal/progress-horizontal.component.vue.js");var m=require("./theme-configuration.js"),_=require("../../../icon/icon.component.vue_vue_type_script_lang.vue.js"),c=require("../../../button/button/button.component.vue_vue_type_script_lang.vue.js"),y=require("../../../progress/progress-horizontal/progress-horizontal.component.vue_vue_type_script_lang.vue.js"),g=function(d){function AlertComponent(){var e=null!==d&&d.apply(this,arguments)||this;return e.timeLeft=null,e.internalVisible=!1,e.ttlStartTime=null,e.ttlTimeoutId=null,e}return e.__extends(AlertComponent,d),Object.defineProperty(AlertComponent.prototype,"isVisible",{get:function(){return!0===this.visible||this.internalVisible},set:function(e){this.$emit("update:visible",e)},enumerable:!1,configurable:!0}),AlertComponent.prototype.hasSlot=function(e){return d.prototype.hasSlot.call(this,e)},AlertComponent.prototype.mounted=function(){this.internalVisible=!0},AlertComponent.prototype.show=function(){this.isVisible=!0,this.internalVisible=!0,this.$forceUpdateComputed()},AlertComponent.prototype.close=function(){this.isVisible=!1,this.internalVisible=!1,this.$forceUpdateComputed()},AlertComponent.prototype.onAfterLeave=function(){this.$emit("close")},AlertComponent.prototype.onTTLChange=function(e){null!==e?(this.ttlStartTime=(new Date).getTime(),this.timeLeft=e,this.updateTimeLeft()):this.timeLeft=null},AlertComponent.prototype.onVisibilityChange=function(e){e?this.show():this.close()},AlertComponent.prototype.updateTimeLeft=function(){var e=this;null!==this.ttlTimeoutId||t.isServer()||(this.ttlTimeoutId=window.requestAnimationFrame((function(){var t=e.ttl;e.ttlTimeoutId=null,null!==t&&null!==e.ttlStartTime?e.timeLeft=Math.max(0,t-((new Date).getTime()-e.ttlStartTime)):e.timeLeft=null,e.timeLeft?e.updateTimeLeft():0===e.timeLeft&&e.close()})))},e.__decorate([a.Prop({type:String,default:null}),e.__metadata("design:type",Object)],AlertComponent.prototype,"title",void 0),e.__decorate([a.Prop({type:String,default:null}),e.__metadata("design:type",Object)],AlertComponent.prototype,"icon",void 0),e.__decorate([a.Prop({type:String,default:"material"}),e.__metadata("design:type",String)],AlertComponent.prototype,"iconSet",void 0),e.__decorate([a.Prop({type:Number,default:null,transform:function(e){return parseInt(String(e),10)||null}}),e.__metadata("design:type",Object)],AlertComponent.prototype,"ttl",void 0),e.__decorate([a.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],AlertComponent.prototype,"closable",void 0),e.__decorate([a.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],AlertComponent.prototype,"allowHtml",void 0),e.__decorate([a.Prop({type:[String,Boolean],default:void 0}),e.__metadata("design:type",Object)],AlertComponent.prototype,"transition",void 0),e.__decorate([a.Prop({type:Boolean,default:null}),e.__metadata("design:type",Object)],AlertComponent.prototype,"visible",void 0),e.__decorate([r.Computed(),e.__metadata("design:type",Boolean),e.__metadata("design:paramtypes",[Boolean])],AlertComponent.prototype,"isVisible",null),e.__decorate([i.Expose(),e.__metadata("design:type",Object)],AlertComponent.prototype,"timeLeft",void 0),e.__decorate([p.Ref(),e.__metadata("design:type",Boolean)],AlertComponent.prototype,"internalVisible",void 0),e.__decorate([i.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[String]),e.__metadata("design:returntype",Boolean)],AlertComponent.prototype,"hasSlot",null),e.__decorate([i.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],AlertComponent.prototype,"show",null),e.__decorate([i.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],AlertComponent.prototype,"close",null),e.__decorate([i.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],AlertComponent.prototype,"onAfterLeave",null),e.__decorate([s.Watch("ttl",{immediate:s.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],AlertComponent.prototype,"onTTLChange",null),e.__decorate([s.Watch("visible",{immediate:!1}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Boolean]),e.__metadata("design:returntype",void 0)],AlertComponent.prototype,"onVisibilityChange",null),AlertComponent=e.__decorate([l.Themeable(m.ThemeConfiguration),n.Component({name:"bt-alert",components:[_,c,y,o.IconMaterialClose],directives:[u.BindThemeDirective],emits:["update:visible","close"]})],AlertComponent)}(d.Vue);module.exports=g;
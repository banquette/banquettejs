/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../../_virtual/_tslib.js"),e=require("@banquette/exception/_cjs/prod/usage.exception"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/vue"),a=require("@tiptap/vue-3"),i=function(r){function AbstractTiptapModule(){var t=null!==r&&r.apply(this,arguments)||this;return t.enabled=!1,t}return t.__extends(AbstractTiptapModule,r),AbstractTiptapModule.prototype.beforeMount=function(){var t=this.getParent("bt-form-tiptap")||null;if(!t)throw new e.UsageException("A tiptap module must be child of a `bt-form-tiptap` component.");this.parent=t,this.parent.registerModule(this)},AbstractTiptapModule.prototype.beforeUnmount=function(){this.parent.unregisterModule(this)},AbstractTiptapModule.prototype.setEditor=function(t){this.editor=t},AbstractTiptapModule.prototype.getExtensions=function(){return[]},AbstractTiptapModule.prototype.disable=function(){this.enabled=!1},AbstractTiptapModule.prototype.enable=function(){this.enabled=!0},AbstractTiptapModule.prototype.onBeforeCreate=function(t){},AbstractTiptapModule.prototype.onCreate=function(t){},AbstractTiptapModule.prototype.onUpdate=function(t){},AbstractTiptapModule.prototype.onSelectionUpdate=function(t){},AbstractTiptapModule.prototype.onTransaction=function(t){},AbstractTiptapModule.prototype.onFocus=function(t){},AbstractTiptapModule.prototype.onBlur=function(t){},AbstractTiptapModule.prototype.onDestroy=function(t){},AbstractTiptapModule.prototype.getDefaultConfiguration=function(){return{}},t.__decorate([p.Prop({type:Object,default:{},transform:function(t){return Object.assign({},this.getDefaultConfiguration(),t||{})}}),t.__metadata("design:type",Object)],AbstractTiptapModule.prototype,"configuration",void 0),t.__decorate([o.Expose(),t.__metadata("design:type",Boolean)],AbstractTiptapModule.prototype,"enabled",void 0),t.__decorate([o.Expose(),t.__metadata("design:type",a.Editor)],AbstractTiptapModule.prototype,"editor",void 0),AbstractTiptapModule}(r.Vue);exports.AbstractTiptapModule=i;

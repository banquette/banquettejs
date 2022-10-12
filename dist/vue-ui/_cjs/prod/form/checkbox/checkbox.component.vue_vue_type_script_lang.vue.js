/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/utils-type/_cjs/prod/is-object"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),n=require("@banquette/vue-typescript/_cjs/prod/decorator/computed.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/import.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),i=require("@banquette/vue-typescript/_cjs/prod/decorator/template-ref.decorator"),c=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),m=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),d=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),u=require("../abstract-vue-form.component.js");require("../base-input/base-input.component.vue.js");var s=require("../base-input/base-input.composable.js"),h=require("../constant.js"),l=require("./checkbox.view-model.js"),_=require("./theme-configuration.js"),b=require("../base-input/base-input.component.vue_vue_type_script_lang.vue.js"),y=function(u){function FormCheckboxComponent(){var e=u.call(this)||this;return e.unsubscribeMethods=[],e.eventPipeline.subscribe(h.ViewModelEvents.Ready,(function(){e.unsubscribeMethods.push(e.proxy.onReady((function(){e.vm.group=e.group}))),e.unsubscribeMethods.push(e.proxy.onDetach((function(){e.vm.removeGroup()}))),e.checked&&e.vm.check(),e.indeterminate&&(e.vm.indeterminate=!0)})),e}var y;return e.__extends(FormCheckboxComponent,u),y=FormCheckboxComponent,Object.defineProperty(FormCheckboxComponent.prototype,"hasDefaultSlot",{get:function(){return this.hasNonEmptySlot("default")},enumerable:!1,configurable:!0}),Object.defineProperty(FormCheckboxComponent.prototype,"hasLabelSlot",{get:function(){return this.hasNonEmptySlot("label")},enumerable:!1,configurable:!0}),FormCheckboxComponent.prototype.beforeUnmount=function(){u.prototype.beforeUnmount.call(this);for(var e=0,t=this.unsubscribeMethods;e<t.length;e++){(0,t[e])()}},FormCheckboxComponent.prototype.onKeyDown=function(e){this.vm.onKeyDown(e)},FormCheckboxComponent.prototype.toggle=function(){this.disabled||this.vm.toggle()},FormCheckboxComponent.prototype.setupViewModel=function(){return new l.CheckboxViewModel(this.proxy,this.base)},FormCheckboxComponent.prototype.onModelValueChange=function(e){var o;e!==h.UndefinedValue&&(t.isObject(e)?(y.ModelValuesMap.has(e)||y.ModelValuesMap.set(e,this.proxy.getControl()),o=y.ModelValuesMap.get(e)):o=this.proxy.getControl(),this.proxy.setControl(o),o.setValue(e))},FormCheckboxComponent.prototype.syncConfigurationProps=function(){this.v.label=this.label,this.vm.checkedValue=this.checkedValue,this.vm.uncheckedValue=this.uncheckedValue,this.vm.uncheckable=this.uncheckable},FormCheckboxComponent.prototype.onCheckedChange=function(e){e?this.vm.check():!1===e&&this.vm.uncheck()},FormCheckboxComponent.prototype.onGroupChange=function(e){this.proxy.ready&&(this.vm.group=e)},FormCheckboxComponent.prototype.onIndeterminateChange=function(e){this.vm.indeterminate=e},FormCheckboxComponent.ModelValuesMap=new WeakMap,e.__decorate([r.Import(s.BaseInputComposable,{label:!1}),e.__metadata("design:type",s.BaseInputComposable)],FormCheckboxComponent.prototype,"base",void 0),e.__decorate([p.Prop({type:String,default:null}),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"label",void 0),e.__decorate([p.Prop({type:Boolean,default:null}),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"checked",void 0),e.__decorate([p.Prop({default:!0}),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"checkedValue",void 0),e.__decorate([p.Prop(),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"uncheckedValue",void 0),e.__decorate([p.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],FormCheckboxComponent.prototype,"indeterminate",void 0),e.__decorate([p.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"uncheckable",void 0),e.__decorate([p.Prop({type:String,default:null}),e.__metadata("design:type",Object)],FormCheckboxComponent.prototype,"group",void 0),e.__decorate([n.Computed(),e.__metadata("design:type",Boolean),e.__metadata("design:paramtypes",[])],FormCheckboxComponent.prototype,"hasDefaultSlot",null),e.__decorate([n.Computed(),e.__metadata("design:type",Boolean),e.__metadata("design:paramtypes",[])],FormCheckboxComponent.prototype,"hasLabelSlot",null),e.__decorate([i.TemplateRef("inputWrapper"),e.__metadata("design:type",HTMLElement)],FormCheckboxComponent.prototype,"inputWrapper",void 0),e.__decorate([a.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[KeyboardEvent]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"onKeyDown",null),e.__decorate([a.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"toggle",null),e.__decorate([m.Watch(["label","checkedValue","uncheckedValue","uncheckable"],{immediate:m.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"syncConfigurationProps",null),e.__decorate([m.Watch("checked",{immediate:m.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"onCheckedChange",null),e.__decorate([m.Watch("group",{immediate:!1}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"onGroupChange",null),e.__decorate([m.Watch("indeterminate",{immediate:!1}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Boolean]),e.__metadata("design:returntype",void 0)],FormCheckboxComponent.prototype,"onIndeterminateChange",null),FormCheckboxComponent=y=e.__decorate([c.Themeable(_.ThemeConfiguration),o.Component({name:"bt-form-checkbox",components:[b],directives:[d.BindThemeDirective]}),e.__metadata("design:paramtypes",[])],FormCheckboxComponent)}(u.AbstractVueFormComponent);module.exports=y;
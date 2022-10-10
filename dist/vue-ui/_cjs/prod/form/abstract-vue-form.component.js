/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/event/_cjs/prod/pipeline/event-pipeline"),o=require("@banquette/form/_cjs/prod/constant"),r=require("@banquette/utils-misc/_cjs/prod/proxy"),n=require("@banquette/utils-type/_cjs/prod/is-undefined"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),i=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),s=require("@banquette/vue-typescript/_cjs/prod/decorator/import.decorator"),u=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),c=require("@banquette/vue-typescript/_cjs/prod/vue"),l=require("./constant.js");require("./form/form.component.vue.js");var m=require("./form-control.proxy.js"),d=require("./form/form.component.vue_vue_type_script_lang.vue.js"),b=function(c){function AbstractVueFormComponent(){var e=c.call(this)||this;return e.eventPipeline=new t.EventPipeline,e.unsubscribeCallbacks=[],e.controlUnsubscribeCallbacks=[],e.eventPipeline.add([l.ViewModelEvents.Configure,l.ViewModelEvents.Initialize,l.ViewModelEvents.Ready],l.ViewModelSequence.Initialize),e.eventPipeline.subscribe(l.ViewModelEvents.Configure,r.proxy(e.configureViewModel,e)),e.eventPipeline.subscribe(l.ViewModelEvents.Configure,r.proxy(e.configureProxy,e)),e.eventPipeline.subscribe(l.ViewModelEvents.Initialize,r.proxy(e.initializeProxy,e)),e}var b;return e.__extends(AbstractVueFormComponent,c),b=AbstractVueFormComponent,AbstractVueFormComponent.prototype.beforeMount=function(){var e=this.eventPipeline.start(l.ViewModelSequence.Initialize);e.promise?e.promise.catch((function(){console.error(e.errorDetail)})):e.error&&console.error(e.errorDetail)},AbstractVueFormComponent.prototype.mounted=function(){this.autofocus&&this.forceFocus();var e=this.getParent("bt-form");null!==e&&e instanceof d&&(this.proxy.setFallbackForm(e.vm.form),this.proxy.setFallbackGetControl(r.proxy(e.vm.getControl,e.vm)))},AbstractVueFormComponent.prototype.beforeUnmount=function(){this.vm.dispose(),this.eventPipeline.dispose();for(var e=0,t=this.unsubscribeCallbacks;e<t.length;e++){(0,t[e])()}for(var o=0,r=this.controlUnsubscribeCallbacks;o<r.length;o++){(0,r[o])()}this.unsubscribeCallbacks=[],this.controlUnsubscribeCallbacks=[],this.proxy.unsetViewModel(),this.vm=void 0},AbstractVueFormComponent.prototype.hasSlot=function(e){return c.prototype.hasSlot.call(this,e)},AbstractVueFormComponent.prototype.setValue=function(e){this.v.control.value=e},AbstractVueFormComponent.prototype.focus=function(){this.vm.control.onFocus()},AbstractVueFormComponent.prototype.blur=function(){this.vm.control.onBlur()},AbstractVueFormComponent.prototype.onControlPropsChange=function(){this.v.control.tabIndex=this.tabindex,this.v.control.disabled=this.disabled,this.v.control.busy=this.busy},AbstractVueFormComponent.prototype.onFocusChanged=function(e){this.$emit(e?"focus":"blur")},AbstractVueFormComponent.prototype.onValueChange=function(e){this.$emit("change",e)},AbstractVueFormComponent.prototype.onModelValueChange=function(e){e!==l.UndefinedValue&&this.proxy.getControl().setValue(e)},AbstractVueFormComponent.prototype.configureViewModel=function(){this.vm=this.setupViewModel(),this.v=this.vm.viewData,this.vm.setViewData(this.v),this.v.control.focus=r.proxy(this.focus,this),this.v.control.blur=r.proxy(this.blur,this),this.vm.initialize()},AbstractVueFormComponent.prototype.configureProxy=function(){var e=this;this.proxy.setViewModel({id:++b.MaxId,setValue:function(t){e.vm.control.updateValueFromControl(t)},unsetControl:function(){e.proxy.unsetViewModel()},focus:r.proxy(this.focus,this),blur:r.proxy(this.blur,this)})},AbstractVueFormComponent.prototype.initializeProxy=function(){var e=this,t=!1,o=null;if(this.unsubscribeCallbacks.push(this.proxy.onReady((function(){e.proxy.pristine&&(e.proxy.setDefaultValue(e.vm.viewValueToControlValue(e.vm.controlValueToViewValue(n.isUndefined(e.originalDOMValue)||e.proxy.value?e.proxy.value:e.originalDOMValue))),e.proxy.reset()),e.assignControl(e.proxy),null!==o&&o(),t=!0}))),!t)return new Promise((function(e){return o=e}))},AbstractVueFormComponent.prototype.assignControl=function(e){for(var t=this,r=0,n=this.controlUnsubscribeCallbacks;r<n.length;r++){(0,n[r])()}this.controlUnsubscribeCallbacks=[],this.vm.setControl(e),this.controlUnsubscribeCallbacks.push(e.onStateChanged((function(e){e.state===o.BasicState.Focused&&e.newValue&&t.$nextTick((function(){t.vm.control.mutateInternalViewData((function(){t.vm.control.viewData.focused=t.proxy.focused}))}))}),-1)),this.controlUnsubscribeCallbacks.push(e.onValueChanged((function(e){t.$emit("update:modelValue",e.newValue)}))),this.autofocus&&this.forceFocus()},AbstractVueFormComponent.prototype.forceFocus=function(){var e=this,t=(new Date).getTime(),o=0,tryToFocus=function(){e.v.control.focused||e.focus(),window.setTimeout((function(){(o+=(new Date).getTime()-t)<500&&tryToFocus()}),50)};tryToFocus()},AbstractVueFormComponent.MaxId=0,e.__decorate([u.Prop({default:l.UndefinedValue}),e.__metadata("design:type",Object)],AbstractVueFormComponent.prototype,"modelValue",void 0),e.__decorate([u.Prop({name:"value",default:void 0}),e.__metadata("design:type",Object)],AbstractVueFormComponent.prototype,"originalDOMValue",void 0),e.__decorate([u.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],AbstractVueFormComponent.prototype,"disabled",void 0),e.__decorate([u.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],AbstractVueFormComponent.prototype,"busy",void 0),e.__decorate([u.Prop({type:Number,default:0}),e.__metadata("design:type",Number)],AbstractVueFormComponent.prototype,"tabindex",void 0),e.__decorate([u.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],AbstractVueFormComponent.prototype,"autofocus",void 0),e.__decorate([s.Import(m.FormControlProxy,!1),e.__metadata("design:type",m.FormControlProxy)],AbstractVueFormComponent.prototype,"proxy",void 0),e.__decorate([i.Expose(),e.__metadata("design:type",Object)],AbstractVueFormComponent.prototype,"v",void 0),e.__decorate([i.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[String]),e.__metadata("design:returntype",Boolean)],AbstractVueFormComponent.prototype,"hasSlot",null),e.__decorate([p.Watch(["tabindex","disabled","busy"],{immediate:p.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],AbstractVueFormComponent.prototype,"onControlPropsChange",null),e.__decorate([p.Watch("v.control.focused",{immediate:p.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Boolean]),e.__metadata("design:returntype",void 0)],AbstractVueFormComponent.prototype,"onFocusChanged",null),e.__decorate([p.Watch("v.control.value",{immediate:!1}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],AbstractVueFormComponent.prototype,"onValueChange",null),e.__decorate([p.Watch("modelValue",{immediate:p.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],AbstractVueFormComponent.prototype,"onModelValueChange",null),AbstractVueFormComponent=b=e.__decorate([a.Component({emits:["change","focus","blur","update:modelValue"]}),e.__metadata("design:paramtypes",[])],AbstractVueFormComponent)}(c.Vue);exports.AbstractVueFormComponent=b;

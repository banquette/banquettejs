/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/exception/_cjs/prod/usage.exception"),e=require("@banquette/utils-misc/_cjs/prod/proxy"),o=require("@banquette/utils-object/_cjs/prod/extend"),n=require("@banquette/utils-object/_cjs/prod/get-object-keys"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("./noop.value-transformer.js"),a=function(){function ControlModule(e,o){void 0===o&&(o=r.NoopTransformer);var n,a=this;this.valueTransformer=o,this.allowProtectedMutations=!1,this.protectedViewData={},this.unsubscribeMethods=[],this.updatingControl=!1,this.externalEvents={},this.subscribeToExternalEvent=(n=0,function(t,e){var o=++n;return a.externalEvents[o]={type:t,callback:e,unsubscribe:a.activeControl[t](e)},function(){i.isUndefined(a.externalEvents[o])||(a.externalEvents[o].unsubscribe(),delete a.externalEvents[o])}}),this.defineReadOnlyProxy=function(t,e,o){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:o})},this.defineMutableProxy=function(e,o,n,r){var l=!i.isUndefined(r);a.protectedViewData[o]=n,Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:function(){return a.protectedViewData[o]},set:function(e){if(l)r(e);else{if(!a.allowProtectedMutations)throw new t.UsageException("You can't change the value of \"".concat(o,'" from the view.'));a.protectedViewData[o]=e}}})},this.defineUserMutableFlagProxy=function(t,e,o,n,i){a.defineMutableProxy(t,e,o,(function(t){a.allowProtectedMutations?a.protectedViewData[e]=t:a.setWriteableFlag(t,n,i)}))},this.activeControl=e,this.viewData=this.buildViewData({}),this.setControl(e)}return ControlModule.prototype.setViewData=function(t){this.viewData=this.buildViewData(t)},ControlModule.prototype.setControl=function(t){var e=this;this.activeControl=t,this.mutateInternalViewData((function(){e.viewData.invalid=e.activeControl.invalid,e.viewData.notValidated=e.activeControl.notValidated,e.viewData.validating=e.activeControl.validating,e.viewData.dirty=e.activeControl.dirty,e.viewData.touched=e.activeControl.touched,e.viewData.changed=e.activeControl.changed,e.viewData.focused=e.activeControl.focused,e.viewData.disabled=e.activeControl.disabled,e.viewData.busy=e.activeControl.busy,e.viewData.errors=e.activeControl.errors.slice(0)}));for(var o=0,r=this.unsubscribeMethods;o<r.length;o++){(0,r[o])()}this.unsubscribeMethods=[this.activeControl.onValueChanged((function(t){e.updateValueFromControl(t.newValue)})),this.activeControl.onStateChanged((function(t){i.isUndefined(e.viewData[t.state])||e.mutateInternalViewData((function(){e.viewData[t.state]=t.newValue}))})),this.activeControl.onErrorsChanged((function(t){e.mutateInternalViewData((function(){e.viewData.errors=t.errors.slice(0)}))}))];for(var a=0,l=n.getObjectKeys(this.externalEvents);a<l.length;a++){var u=l[a],s=this.externalEvents[u];s.unsubscribe(),s.unsubscribe=this.activeControl[s.type](s.callback)}},ControlModule.prototype.onBeforeValueChange=function(t){return this.subscribeToExternalEvent("onBeforeValueChange",t)},ControlModule.prototype.onValueChanged=function(t){return this.subscribeToExternalEvent("onValueChanged",t)},ControlModule.prototype.onStateChanged=function(t){return this.subscribeToExternalEvent("onStateChanged",t)},ControlModule.prototype.updateValueFromControl=function(t){this.updatingControl||(this.updatingControl=!0,this.viewData.value=this.valueTransformer.controlToView(t),this.updatingControl=!1)},ControlModule.prototype.onFocus=function(){this.viewData.disabled||this.activeControl.markAsFocused()},ControlModule.prototype.onBlur=function(){this.activeControl.markAsBlurred()},ControlModule.prototype.mutateInternalViewData=function(t){this.allowProtectedMutations=!0;try{t()}finally{this.allowProtectedMutations=!1}},ControlModule.prototype.buildViewData=function(t){var n=this,i=this;return this.defineReadOnlyProxy(t,"id",(function(){return n.activeControl.id})),this.defineReadOnlyProxy(t,"formId",(function(){return n.activeControl.formId})),this.defineReadOnlyProxy(t,"fullId",(function(){return n.activeControl.formId?n.activeControl.formId+"_"+n.activeControl.id:null})),this.defineMutableProxy(t,"invalid",this.activeControl.invalid),this.defineMutableProxy(t,"notValidated",this.activeControl.notValidated),this.defineMutableProxy(t,"validating",this.activeControl.validating),this.defineMutableProxy(t,"dirty",this.activeControl.dirty),this.defineMutableProxy(t,"touched",this.activeControl.touched),this.defineMutableProxy(t,"changed",this.activeControl.changed),this.defineMutableProxy(t,"focused",this.activeControl.focused),this.defineMutableProxy(t,"errors",this.activeControl.errors.slice(0)),this.defineUserMutableFlagProxy(t,"disabled",this.activeControl.disabled,"markAsDisabled","markAsEnabled"),this.defineUserMutableFlagProxy(t,"busy",this.activeControl.busy,"markAsBusy","markAsNotBusy"),t=o.extend(t,{tabIndex:0,get valid(){return i.activeControl.valid},get validated(){return i.activeControl.validated},get notValidating(){return i.activeControl.notValidating},get validatedAndValid(){return i.activeControl.validatedAndValid},get pristine(){return i.activeControl.pristine},get untouched(){return i.activeControl.untouched},get unchanged(){return i.activeControl.unchanged},get unfocused(){return i.activeControl.unfocused},get notBusy(){return i.activeControl.notBusy},get enabled(){return i.activeControl.enabled},get errorsMap(){return i.activeControl.errors.reduce((function(t,e){return t[e.type]=e.message,t}),{})},get value(){return i.activeControlViewValue},set value(t){i.activeControlViewValue=t,i.updatingControl||(i.updatingControl=!0,i.activeControl.setValue(i.valueTransformer.viewToControl(i.activeControlViewValue)),i.updatingControl=!1)},onFocus:e.proxy(this.onFocus,this),onBlur:e.proxy(this.onBlur,this),focus:e.proxy(this.onFocus,this),blur:e.proxy(this.onBlur,this)})},ControlModule.prototype.setWriteableFlag=function(t,e,o){this.activeControl[t?e:o]()},ControlModule}();exports.ControlModule=a;

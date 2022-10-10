/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/injector"),o=require("@banquette/exception/_cjs/prod/usage.exception"),n=require("@banquette/utils-string/_cjs/prod/case/kebab-case"),i=require("@banquette/utils-string/_cjs/prod/format/trim"),r=require("@banquette/utils-type/_cjs/prod/is-array"),a=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined"),p=require("@banquette/utils-type/_cjs/prod/is-string"),u=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),d=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),l=require("@banquette/vue-typescript/_cjs/prod/decorator/import.decorator"),c=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),m=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),f=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),g=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),h=require("@tiptap/extension-document"),v=require("@tiptap/extension-paragraph"),b=require("@tiptap/extension-text"),y=require("@tiptap/vue-3"),C=require("../abstract-vue-form.component.js"),q=require("../base-input/base-input.composable.js"),T=require("./tiptap-configuration.service.js"),_=require("./tiptap.view-model.js"),x=require("./type.js"),j=require("./utils.js");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var F=_interopDefaultLegacy(h),w=_interopDefaultLegacy(v),E=_interopDefaultLegacy(b),O=function(h){function FormTiptapComponent(){var e,t,o,n=null!==h&&h.apply(this,arguments)||this;return n.editor=null,n.innerConfiguration=null,n.modulesInitializingCount=0,n.modules=[],n.buildEditor=(t=[F.default,w.default,E.default],o=[],function(r){var a=n.vm.viewData.control.value||"";n.editor&&(a=n.editor.getHTML(),n.editor.destroy());var p=!1,u=[].concat(t),addExtensions=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];u.indexOf(i)<0&&(u.push(i),o.indexOf(i)<0&&(p=!0))}};addExtensions(r.extensions||[]);for(var s=0,d=n.modules;s<d.length;s++)addExtensions(d[s].getExtensions());n.editor&&!p&&u.length===o.length||(n.editor=new y.Editor({content:a,extensions:u,onUpdate:n.createEventHandler("onUpdate",(function(){i.trim(e.getText()).length>0?n.vm.viewData.control.value=e.getHTML():n.vm.viewData.control.value=""})),onTransaction:n.createEventHandler("onTransaction")}));for(var l=0,c=n.modules;l<c.length;l++){var m=c[l];m.setEditor(n.editor),m.enable()}o=u,e=n.editor}),n}return e.__extends(FormTiptapComponent,h),FormTiptapComponent.prototype.beforeMount=function(){h.prototype.beforeMount.call(this),this.base.floatingLabel=!1},FormTiptapComponent.prototype.beforeUnmount=function(){h.prototype.beforeUnmount.call(this),this.editor&&(this.editor.destroy(),this.editor=null)},FormTiptapComponent.prototype.registerModule=function(e){var t=this;if(!this.innerConfiguration)throw new o.UsageException("Inner configuration not ready.");if(this.modules.indexOf(e)>-1)throw new o.UsageException("You can't register the same module twice.");this.modules.push(e),0==--this.modulesInitializingCount&&queueMicrotask((function(){t.buildEditor(t.innerConfiguration)}))},FormTiptapComponent.prototype.unregisterModule=function(e){var t=this.modules.indexOf(e);t>-1&&this.modules.splice(t,1)},FormTiptapComponent.prototype.setupViewModel=function(){return new _.TiptapViewModel(this.proxy,this.base)},FormTiptapComponent.prototype.onConfChange=function(e){var t=null!==this.innerConfiguration?Object.keys(this.innerConfiguration.modules):[];this.innerConfiguration=this.resolveConfiguration(e);var o=Object.keys(this.innerConfiguration.modules);this.modulesInitializingCount=0;for(var n=0,i=o;n<i.length;n++){var r=i[n];t.indexOf(r)<0&&this.modulesInitializingCount++}this.modulesInitializingCount||this.buildEditor(this.innerConfiguration)},FormTiptapComponent.prototype.onValueChange=function(e){h.prototype.onValueChange.call(this,e),this.editor&&this.editor.getHTML()!==e&&this.editor.commands.setContent(e)},FormTiptapComponent.prototype.resolveConfiguration=function(e){var t=this,o={toolbars:[],modules:{},extensions:e.extensions||[]},resolveComponentName=function(e){var o=n.kebabCase(e),i=["bt-form-tiptap-"+o,o];if(!u.isUndefined(j.ModulesToolbarAliases[e])){var r=j.ModulesToolbarAliases[e];i.push.apply(i,["bt-form-tiptap-"+r,r])}for(var a=0,p=i;a<p.length;a++){var s=p[a];if(Object.keys(t.$.root.appContext.components).indexOf(s)>-1)return s}return console.warn('Failed to find an existing Vue component for name "'.concat(o,'". The following names have been tried: ').concat(i.join(", "))),null};if(r.isArray(e.toolbars))for(var i=0,a=e.toolbars;i<a.length;i++){for(var p=[],s=0,d=a[i];s<d.length;s++){null!==(m=resolveComponentName(m=d[s]))&&(p.push(m),o.modules[m]={inToolbar:!0,configuration:{}})}p.length>0&&o.toolbars.push(p)}if(!u.isUndefined(e.modules))for(var l=0,c=Object.keys(e.modules);l<c.length;l++){var m,f=c[l];null!==(m=resolveComponentName(f))&&(u.isUndefined(o.modules[m])?o.modules[m]={inToolbar:!1,configuration:e.modules[f]}:o.modules[m].configuration=e.modules[f])}return o},FormTiptapComponent.prototype.createEventHandler=function(e,t){var o=this;return function(){for(var n=arguments,i=[],r=0;r<arguments.length;r++)i[r]=n[r];for(var a=0,p=o.modules;a<p.length;a++){var s=p[a];s[e].apply(s,i)}u.isUndefined(t)||t.apply(this,i)}},e.__decorate([l.Import(q.BaseInputComposable,{floatingLabel:!1}),e.__metadata("design:type",q.BaseInputComposable)],FormTiptapComponent.prototype,"base",void 0),e.__decorate([c.Prop({type:[String,Object],transform:function(e){if(a.isNullOrUndefined(e))return{};if(p.isString(e)){var n=t.Injector.Get(T.TiptapConfigurationService).get(e);if(!n)throw new o.UsageException('No configuration named "'.concat(e,'" have been found.'));e=n}if(!x.isTiptapConfiguration(e))throw new o.UsageException("Invalid configuration. Expecting a `TiptapConfigurationInterface` object.");return e}}),e.__metadata("design:type",Object)],FormTiptapComponent.prototype,"conf",void 0),e.__decorate([d.Expose(),e.__metadata("design:type",Object)],FormTiptapComponent.prototype,"editor",void 0),e.__decorate([d.Expose(),e.__metadata("design:type",Object)],FormTiptapComponent.prototype,"innerConfiguration",void 0),e.__decorate([f.Watch("conf",{immediate:f.ImmediateStrategy.BeforeMount,deep:!0}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Object]),e.__metadata("design:returntype",void 0)],FormTiptapComponent.prototype,"onConfChange",null),FormTiptapComponent=e.__decorate([m.Themeable(),s.Component({name:"bt-form-tiptap",directives:[g.BindThemeDirective],components:{"editor-content":y.EditorContent}})],FormTiptapComponent)}(C.AbstractVueFormComponent);module.exports=O;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../_virtual/_tslib.js"),t=require("@banquette/http/_cjs/prod/constants"),o=require("@banquette/ui/_cjs/prod/form/file/form-file"),n=require("@banquette/utils-array/_cjs/prod/ensure-in-enum"),a=require("@banquette/utils-string/_cjs/prod/format/human-size-to-byte-count"),r=require("@banquette/utils-type/_cjs/prod/is-string"),i=require("@banquette/vue-material-icons/_cjs/prod/close"),p=require("@banquette/vue-material-icons/_cjs/prod/description"),m=require("@banquette/vue-material-icons/_cjs/prod/done"),u=require("@banquette/vue-material-icons/_cjs/prod/error"),d=require("@banquette/vue-material-icons/_cjs/prod/file-upload"),s=require("@banquette/vue-material-icons/_cjs/prod/play-arrow"),l=require("@banquette/vue-material-icons/_cjs/prod/stop"),c=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),_=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),y=require("@banquette/vue-typescript/_cjs/prod/decorator/import.decorator"),F=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),g=require("@banquette/vue-typescript/_cjs/prod/decorator/themeable.decorator"),v=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),h=require("@banquette/vue-typescript/_cjs/prod/theme/bind-theme.directive"),b=require("../abstract-vue-form.component.js");require("../base-input/base-input.component.vue.js");var f=require("../base-input/base-input.composable.js"),C=require("./file.view-model.js"),q=require("./i18n-defaults.js"),S=require("./theme-configuration.js"),P=require("../base-input/base-input.component.vue_vue_type_script_lang.vue.js"),j=function(b){function FormFileComponent(){return null!==b&&b.apply(this,arguments)||this}return e.__extends(FormFileComponent,b),FormFileComponent.prototype.beforeMount=function(){b.prototype.beforeMount.call(this),this.base.floatingLabel=!1},FormFileComponent.prototype.mounted=function(){b.prototype.mounted.call(this),this.vm.input=this.$refs.input},FormFileComponent.prototype.setupViewModel=function(){return new C.FileViewModel(this.proxy,this.base,this.i18n)},FormFileComponent.prototype.browse=function(){this.v.control.disabled||this.$refs.input.click()},FormFileComponent.prototype.onKeyDown=function(e){"Enter"===e.key&&e.target===this.$el&&(e.preventDefault(),e.stopPropagation(),this.browse())},FormFileComponent.prototype.onFileSelectionChange=function(e){this.vm.onFileSelectionChange(e)},FormFileComponent.prototype.cancel=function(e){this.vm.cancel(e)},FormFileComponent.prototype.pause=function(e){this.vm.pause(e)},FormFileComponent.prototype.start=function(e){this.vm.start(e)},FormFileComponent.prototype.syncConfigurationProps=function(){this.vm.maxIndividualSize=this.maxIndividualSize,this.vm.maxTotalSize=this.maxTotalSize,this.vm.multiple=this.multiple,this.vm.accept=this.accept,this.vm.autoStartUpload=this.autoStart,this.vm.ignoreNonUploadedFiles=this.ignoreNonUploadedFiles},FormFileComponent.prototype.syncRemoteConfiguration=function(){this.vm.remote.updateConfiguration({url:this.url,endpoint:this.endpoint,method:this.method,urlParams:this.urlParams,headers:this.headers})},e.__decorate([y.Import(f.BaseInputComposable,{floatingLabel:!1}),e.__metadata("design:type",f.BaseInputComposable)],FormFileComponent.prototype,"base",void 0),e.__decorate([F.Prop({type:Boolean,default:!1}),e.__metadata("design:type",Boolean)],FormFileComponent.prototype,"multiple",void 0),e.__decorate([F.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],FormFileComponent.prototype,"autoStart",void 0),e.__decorate([F.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],FormFileComponent.prototype,"ignoreNonUploadedFiles",void 0),e.__decorate([F.Prop({type:String,default:null}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"accept",void 0),e.__decorate([F.Prop({type:[String,Number],default:null,transform:function(e){return r.isString(e)?a.humanSizeToByteCount(e):e}}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"maxIndividualSize",void 0),e.__decorate([F.Prop({type:[String,Number],default:null,transform:function(e){return r.isString(e)?a.humanSizeToByteCount(e):e}}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"maxTotalSize",void 0),e.__decorate([F.Prop({type:String,default:null}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"url",void 0),e.__decorate([F.Prop({type:String,default:null}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"endpoint",void 0),e.__decorate([F.Prop({type:String,default:t.HttpMethod.POST,transform:function(e){return n.ensureInEnum(e,t.HttpMethod,t.HttpMethod.POST)}}),e.__metadata("design:type",String)],FormFileComponent.prototype,"method",void 0),e.__decorate([F.Prop({type:Object,default:{}}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"urlParams",void 0),e.__decorate([F.Prop({type:Object,default:{}}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"headers",void 0),e.__decorate([F.Prop({type:Object,default:q.I18nDefaults}),e.__metadata("design:type",Object)],FormFileComponent.prototype,"i18n",void 0),e.__decorate([_.Expose(),e.__metadata("design:type",Object)],FormFileComponent.prototype,"v",void 0),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"browse",null),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[KeyboardEvent]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"onKeyDown",null),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Event]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"onFileSelectionChange",null),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[o.FormFile]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"cancel",null),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[o.FormFile]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"pause",null),e.__decorate([_.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[o.FormFile]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"start",null),e.__decorate([v.Watch(["multiple","autoStart","accept","maxIndividualSize","maxTotalSize","ignoreNonUploadedFiles"],{immediate:v.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"syncConfigurationProps",null),e.__decorate([v.Watch(["url","endpoint","method","urlParams","headers"],{immediate:v.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],FormFileComponent.prototype,"syncRemoteConfiguration",null),FormFileComponent=e.__decorate([g.Themeable(S.ThemeConfiguration),c.Component({name:"bt-form-file",components:[P,i.IconMaterialClose,p.IconMaterialDescription,m.IconMaterialDone,u.IconMaterialError,d.IconMaterialFileUpload,s.IconMaterialPlayArrow,l.IconMaterialStop],directives:[h.BindThemeDirective]})],FormFileComponent)}(b.AbstractVueFormComponent);module.exports=j;

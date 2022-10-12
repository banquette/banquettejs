/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),t=require("@banquette/http/_cjs/prod/constants"),o=require("@banquette/utils-array/_cjs/prod/ensure-in-enum"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/composable.decorator"),a=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),d=function(){function RemoteComposable(){}return RemoteComposable.prototype.syncConfigurationProps=function(){this.module.updateConfiguration({url:this.url,endpoint:this.endpoint,method:this.method,urlParams:this.urlParams,headers:this.headers,model:this.model})},e.__decorate([a.Prop({type:String,default:null}),e.__metadata("design:type",Object)],RemoteComposable.prototype,"url",void 0),e.__decorate([a.Prop({type:String,default:null}),e.__metadata("design:type",Object)],RemoteComposable.prototype,"endpoint",void 0),e.__decorate([a.Prop({type:String,default:null}),e.__metadata("design:type",Object)],RemoteComposable.prototype,"model",void 0),e.__decorate([a.Prop({type:String,default:t.HttpMethod.GET,transform:function(e){return o.ensureInEnum(e,t.HttpMethod,t.HttpMethod.GET)}}),e.__metadata("design:type",String)],RemoteComposable.prototype,"method",void 0),e.__decorate([a.Prop({type:Object,default:{}}),e.__metadata("design:type",Object)],RemoteComposable.prototype,"urlParams",void 0),e.__decorate([a.Prop({type:Object,default:{}}),e.__metadata("design:type",Object)],RemoteComposable.prototype,"headers",void 0),e.__decorate([p.Watch(["url","endpoint","method","model","urlParams","headers"],{immediate:p.ImmediateStrategy.BeforeMount}),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",void 0)],RemoteComposable.prototype,"syncConfigurationProps",null),RemoteComposable=e.__decorate([r.Composable()],RemoteComposable)}();exports.RemoteComposable=d;
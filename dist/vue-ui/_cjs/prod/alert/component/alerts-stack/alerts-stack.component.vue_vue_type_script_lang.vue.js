/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("../../../_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/inject.decorator"),r=require("@banquette/dependency-injection/_cjs/prod/decorator/module.decorator"),o=require("@banquette/dependency-injection/_cjs/prod/injector"),n=require("@banquette/event/_cjs/prod/event-dispatcher.service"),a=require("@banquette/utils-array/_cjs/prod/ensure-in-enum"),i=require("@banquette/utils-array/_cjs/prod/enum-to-array"),s=require("@banquette/utils-misc/_cjs/prod/proxy"),c=require("@banquette/utils-object/_cjs/prod/get-object-keys"),p=require("@banquette/vue-typescript/_cjs/prod/decorator/component.decorator"),u=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),d=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),l=require("@banquette/vue-typescript/_cjs/prod/vue"),m=require("../../constant.js");require("../alert/alert.component.vue.js");var v=require("../alert/alert.component.vue_vue_type_script_lang.vue.js"),y=function(l){function AlertsStackComponent(e){var t=l.call(this)||this;return t.eventDispatcher=e,t.stack=Object.fromEntries(i.enumToArray(m.StackPosition).map((function(e){return[e,[]]}))),t.eventDispatcher.subscribe(m.AlertEvents.Show,s.proxy(t.onShow,t)),t.eventDispatcher.subscribe(m.AlertEvents.HideAll,s.proxy(t.onHideAll,t)),t}var y;return e.__extends(AlertsStackComponent,l),y=AlertsStackComponent,AlertsStackComponent.prototype.remove=function(e){for(var t=0,r=c.getObjectKeys(this.stack);t<r.length;t++){for(var o=r[t],n=0,a=0;a<this.stack[o].length;++a)this.stack[o][a].id===e?this.stack[o][a].visible=!1:this.stack[o][a].visible&&++n;n||(this.stack[o]=[])}},AlertsStackComponent.prototype.onShow=function(e){if(!this.id&&!e.options.stack||this.id===e.options.stack){var t=a.ensureInEnum(e.options.position,m.StackPosition,m.StackPosition.TopRight);return this.stack[t].push(Object.assign(e.options,{id:++y.MaxId,visible:!0})),!0}return!1},AlertsStackComponent.prototype.onHideAll=function(){},AlertsStackComponent.MaxId=0,e.__decorate([d.Prop({type:String,default:null}),e.__metadata("design:type",Object)],AlertsStackComponent.prototype,"id",void 0),e.__decorate([d.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],AlertsStackComponent.prototype,"fixed",void 0),e.__decorate([u.Expose(),e.__metadata("design:type",Object)],AlertsStackComponent.prototype,"stack",void 0),e.__decorate([u.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Number]),e.__metadata("design:returntype",void 0)],AlertsStackComponent.prototype,"remove",null),AlertsStackComponent=y=e.__decorate([r.Module(),p.Component({name:"bt-alerts-stack",components:[v],factory:function(){return o.Injector.Get(y)}}),e.__param(0,t.Inject(n.EventDispatcherService)),e.__metadata("design:paramtypes",[n.EventDispatcherService])],AlertsStackComponent)}(l.Vue);module.exports=y;
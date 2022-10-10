/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/vue-typescript/_cjs/prod/decorator/composable.decorator"),r=require("@banquette/vue-typescript/_cjs/prod/decorator/expose.decorator"),o=require("@banquette/vue-typescript/_cjs/prod/decorator/prop.decorator"),s=require("@banquette/vue-typescript/_cjs/prod/decorator/watch.decorator"),n=function(n){function AbstractProgressComponent(){var e=null!==n&&n.apply(this,arguments)||this;return e.animatedProgressText=0,e.progressTimeout=null,e}return e.__extends(AbstractProgressComponent,n),AbstractProgressComponent.prototype.isIndeterminate=function(){return null===this.progress},AbstractProgressComponent.prototype.progressPercent=function(){return null===this.progress?null:100*(this.progress-this.progressMin)/(this.progressMax-this.progressMin)},AbstractProgressComponent.prototype.onProgressChange=function(e){var t=this;if(null!==e){null!==this.progressTimeout&&window.cancelAnimationFrame(this.progressTimeout);var r=0,o=this.animatedProgressText||0,s=null,next=function(){t.progressTimeout=window.requestAnimationFrame((function(e){var n=t.progressPercent();null!==n&&(s||(s=e),r=e-s,t.animatedProgressText=Math.round(r*(1/300)*(n-o)+o),r<300?next():t.animatedProgressText=Math.round(n))}))};next()}else this.animatedProgressText=null},e.__decorate([o.Prop({type:[Number,String],default:null,transform:function(e){return null===e?null:(e=parseFloat(e),Math.max(this.progressMin,Math.min(this.progressMax,e)))}}),e.__metadata("design:type",Object)],AbstractProgressComponent.prototype,"progress",void 0),e.__decorate([o.Prop({type:[Number,String],default:0,transform:function(e){return parseFloat(e)}}),e.__metadata("design:type",Number)],AbstractProgressComponent.prototype,"progressMin",void 0),e.__decorate([o.Prop({type:[Number,String],default:100,transform:function(e){return parseFloat(e)}}),e.__metadata("design:type",Number)],AbstractProgressComponent.prototype,"progressMax",void 0),e.__decorate([o.Prop({type:Boolean,default:!0}),e.__metadata("design:type",Boolean)],AbstractProgressComponent.prototype,"showProgressText",void 0),e.__decorate([r.Expose(),e.__metadata("design:type",Object)],AbstractProgressComponent.prototype,"animatedProgressText",void 0),e.__decorate([r.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",Boolean)],AbstractProgressComponent.prototype,"isIndeterminate",null),e.__decorate([r.Expose(),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[]),e.__metadata("design:returntype",Object)],AbstractProgressComponent.prototype,"progressPercent",null),e.__decorate([s.Watch("progress"),e.__metadata("design:type",Function),e.__metadata("design:paramtypes",[Number]),e.__metadata("design:returntype",void 0)],AbstractProgressComponent.prototype,"onProgressChange",null),AbstractProgressComponent=e.__decorate([t.Composable()],AbstractProgressComponent)}(require("@banquette/vue-typescript/_cjs/prod/vue").Vue);exports.AbstractProgressComponent=n;

/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("@banquette/utils-misc/_cjs/prod/proxy"),e=require("./control.module.js"),t=function(){function HeadlessControlViewModel(t){this.control=new e.ControlModule(t,{controlToView:o.proxy(this.controlValueToViewValue,this),viewToControl:o.proxy(this.viewValueToControlValue,this)}),this.viewData={control:this.control.viewData}}return HeadlessControlViewModel.prototype.initialize=function(){},HeadlessControlViewModel.prototype.dispose=function(){},HeadlessControlViewModel.prototype.setViewData=function(o){this.viewData=o,this.control.setViewData(this.viewData.control)},HeadlessControlViewModel.prototype.setControl=function(o){this.control.setControl(o)},HeadlessControlViewModel.prototype.controlValueToViewValue=function(o){return o},HeadlessControlViewModel.prototype.viewValueToControlValue=function(o){return o},HeadlessControlViewModel}();exports.HeadlessControlViewModel=t;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),t=require("@banquette/ui/_cjs/prod/form/text/headless-text-view.model"),i=require("@banquette/utils-type/_cjs/prod/ensure-string"),r=function(t){function TextViewModel(e,i){var r=t.call(this,e)||this;return r.base=i,r.viewData.base=i.viewData,r}return e.__extends(TextViewModel,t),TextViewModel.prototype.setViewData=function(e){t.prototype.setViewData.call(this,e),this.base.setViewData(e.base)},TextViewModel.prototype.controlValueToViewValue=function(e){return i.ensureString(e)},TextViewModel}(t.HeadlessTextViewModel);exports.TextViewModel=r;

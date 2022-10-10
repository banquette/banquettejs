/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),t=require("@banquette/ui/_cjs/prod/form/text/headless-text-view.model"),i=require("@banquette/utils-type/_cjs/prod/ensure-string"),a=function(t){function TiptapViewModel(e,i){var a=t.call(this,e)||this;return a.base=i,a.viewData.base=i.viewData,a}return e.__extends(TiptapViewModel,t),TiptapViewModel.prototype.setViewData=function(e){t.prototype.setViewData.call(this,e),this.base.setViewData(e.base)},TiptapViewModel.prototype.controlValueToViewValue=function(e){return i.ensureString(e)},TiptapViewModel}(t.HeadlessTextViewModel);exports.TiptapViewModel=a;

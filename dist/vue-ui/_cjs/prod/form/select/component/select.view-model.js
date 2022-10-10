/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../_virtual/_tslib.js"),t=require("@banquette/ui/_cjs/prod/form/select/headless-select.view-model"),i=require("@banquette/utils-object/_cjs/prod/extend"),l=function(t){function SelectViewModel(e,l){var s=t.call(this,e)||this;s.base=l;var a=s;return s.viewData.base=l.viewData,i.extend(s.viewData,{selected:{},selectedInPopover:[],selectedPopoverVisible:!1,isHeightLocked:!1,isInputReadonly:!0,inputValue:"",inputPlaceholder:"",isInputFocused:!1,get needsSelectionPopover(){return a.viewData.multiple&&a.viewData.isHeightLocked}}),s}return e.__extends(SelectViewModel,t),SelectViewModel.prototype.setViewData=function(e){t.prototype.setViewData.call(this,e),this.base.setViewData(e.base)},SelectViewModel}(t.HeadlessSelectViewModel);exports.SelectViewModel=l;

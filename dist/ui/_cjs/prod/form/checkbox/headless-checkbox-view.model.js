/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),t=require("@banquette/utils-type/_cjs/prod/is-array"),o=require("@banquette/utils-type/_cjs/prod/is-string"),i=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=require("../headless-control.view-model.js"),a=require("./constant.js"),l=function(s){function HeadlessCheckboxViewModel(){var e=null!==s&&s.apply(this,arguments)||this;return e.checkedValue=!0,e.uncheckable=!1,e.unsubscribeCallbacks=[],e._group={name:a.NullGroup,controlId:e.control.viewData.id},e}return e.__extends(HeadlessCheckboxViewModel,s),Object.defineProperty(HeadlessCheckboxViewModel.prototype,"indeterminate",{set:function(e){this.viewData.indeterminate=e},enumerable:!1,configurable:!0}),Object.defineProperty(HeadlessCheckboxViewModel.prototype,"group",{get:function(){return o.isString(this._group.name)?this._group.name:null},set:function(e){if(this.removeGroup(),this._group={name:e||a.NullGroup,controlId:this.control.viewData.id},this._group.controlId>0){var t=null===e?a.NullGroup:e;i.isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId])&&(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId]={}),i.isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][t])&&(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][t]=[]),HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][t].push(this)}this.viewData.hasGroup=this._group.name!==a.NullGroup,this.updateChecked(this.control.viewData.value)},enumerable:!1,configurable:!0}),Object.defineProperty(HeadlessCheckboxViewModel.prototype,"multiple",{get:function(){var e=this.getGroupsMap(),t=Object.getOwnPropertySymbols(e).concat(Object.keys(e));return t.length>1||1===t.length&&t[0]===a.NullGroup&&e[t[0]].length>1},enumerable:!1,configurable:!0}),HeadlessCheckboxViewModel.prototype.initialize=function(){var e=this;this.updateChecked(this.viewData.control.value),this.unsubscribeCallbacks.push(this.control.onBeforeValueChange((function(o){if(e.multiple&&(t.isArray(o.newValue)||(o.newValue=[o.newValue]),e._group.name!==a.NullGroup)){var s=e.getGroupsMap(),l=[];o.newValue=o.newValue.filter((function(t){for(var o=0,a=s[e._group.name];o<a.length;o++){var r=a[o];if(r.checkedValue===t||!i.isUndefined(r.uncheckedValue)&&r.uncheckedValue===t)return l.indexOf(e._group.name)<0&&(l.push(e._group.name),!0)}return!0}))}}))),this.unsubscribeCallbacks.push(this.control.onValueChanged((function(o){e.multiple&&(t.isArray(o.newValue)||(o.newValue=[o.newValue])),e.updateChecked(o.newValue)})))},HeadlessCheckboxViewModel.prototype.dispose=function(){s.prototype.dispose.call(this),this.removeGroup();for(var e=0,t=this.unsubscribeCallbacks;e<t.length;e++){(0,t[e])()}this.unsubscribeCallbacks=[]},HeadlessCheckboxViewModel.prototype.setViewData=function(e){s.prototype.setViewData.call(this,e),e.checked=!1,e.hasGroup=!1},HeadlessCheckboxViewModel.prototype.onKeyDown=function(e){"Enter"!==e.key||this.viewData.control.disabled||this.toggle()},HeadlessCheckboxViewModel.prototype.toggle=function(){this.viewData.checked?this.uncheck():this.check()},HeadlessCheckboxViewModel.prototype.check=function(){this.viewData.checked=!0,this.updateValue()},HeadlessCheckboxViewModel.prototype.uncheck=function(){var e=this;if(this.viewData.hasGroup&&!this.uncheckable){if(!this.multiple||!t.isArray(this.viewData.control.value))return;var o=this.getGroupsMap();if(this.viewData.control.value.reduce((function(t,i){for(var s=0,a=o[e._group.name];s<a.length;s++){if(a[s].checkedValue===i)return t+1}return t}),0)<=1)return}this.viewData.checked=!1,this.updateValue()},HeadlessCheckboxViewModel.prototype.removeGroup=function(){var e=this._group.name,t=this._group.controlId;if(t>0&&!i.isUndefined(HeadlessCheckboxViewModel.GroupsMap[t])&&!i.isUndefined(HeadlessCheckboxViewModel.GroupsMap[t][e])){var o=HeadlessCheckboxViewModel.GroupsMap[t][e].indexOf(this);o>-1&&(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][e].splice(o,1),HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][e].length||delete HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][e])}this._group={name:a.NullGroup,controlId:0}},HeadlessCheckboxViewModel.prototype.getGroupsMap=function(){return this._group.controlId>0&&!i.isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId])?HeadlessCheckboxViewModel.GroupsMap[this._group.controlId]:{}},HeadlessCheckboxViewModel.prototype.updateChecked=function(e){var o=!1;this.multiple?t.isArray(e)&&e.indexOf(this.checkedValue)>-1&&(o=!0):e===this.checkedValue&&(o=!0),this.viewData.checked=o},HeadlessCheckboxViewModel.prototype.updateValue=function(){var e=this;if(this.multiple){var o=this.viewData.control.value,s=this.getGroupsMap();t.isArray(o)||(o=i.isUndefined(o)?[]:[o]),this._group.name!==a.NullGroup&&(o=o.filter((function(t){for(var o=0,a=s[e._group.name];o<a.length;o++){var l=a[o];if(l.checkedValue===t||!i.isUndefined(l.uncheckedValue)&&l.uncheckedValue===t)return!1}return!0})));for(var l=0,r=[this.checkedValue,this.uncheckedValue];l<r.length;l++){var u=r[l];if(!i.isUndefined(u)){var n=o.indexOf(u);n>-1&&o.splice(n,1)}}this.viewData.checked?o.push(this.checkedValue):this.viewData.checked||i.isUndefined(this.uncheckedValue)||o.push(this.uncheckedValue),this.viewData.control.value=o}else this.viewData.checked?this.viewData.control.value=this.checkedValue:this.viewData.control.value=this.uncheckedValue},HeadlessCheckboxViewModel.GroupsMap={},HeadlessCheckboxViewModel}(s.HeadlessControlViewModel);exports.HeadlessCheckboxViewModel=l;

/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/format/slugify"),i=require("./constant.js"),t=function(){function Choice(e,t,s,l,r,n){this.group=null,this.origin=i.ChoiceOrigin.Default,this.allowHtml=!1,this.selected=!1,this.focused=!1,this.disabled=!1,this.visible=!0,this.external=!0,this.new=!0,this.identifier=e,this.label=t,this.value=s,this.group=l,this.origin=r,this.originalValue=n}return Object.defineProperty(Choice.prototype,"label",{get:function(){return this._label},set:function(i){this._label=i,this.labelSlug=e.slugify(i)},enumerable:!1,configurable:!0}),Choice}();exports.Choice=t;

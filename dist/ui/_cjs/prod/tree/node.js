/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/format/slugify"),t=require("./constant.js"),i=function(){function Node(e,i){void 0===i&&(i=null),this.parent=i,this.id=++Node.MaxId,this._label="/",this.labelSlug=null,this.allowHtml=!1,this.focused=!1,this.disabled=!1,this.expanded=!1,this.visible=!0,this.fetched=!1,this.childrenVisibleCount=0,this.remoteFetchStatus=t.NodeRemoteFetchStatus.Idle,this.remotePending=!1,this.remoteFetchError=null,this.children=[],this.originalValue=e}return Object.defineProperty(Node.prototype,"label",{get:function(){return this._label},set:function(t){this._label=t,this.labelSlug="/"!==t?e.slugify(t):null},enumerable:!1,configurable:!0}),Node.MaxId=0,Node}();exports.Node=i;

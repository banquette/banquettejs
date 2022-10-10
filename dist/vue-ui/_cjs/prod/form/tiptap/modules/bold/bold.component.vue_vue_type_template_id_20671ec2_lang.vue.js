/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue");exports.render=function render(t,o,r,n,a,i){var l=e.resolveComponent("i-material-format-bold"),d=e.resolveComponent("bt-popover"),c=e.resolveComponent("bt-button");return t.editor?(e.openBlock(),e.createBlock(c,{key:0,class:"toolbar-button",onClick:o[0]||(o[0]=function(e){return t.toggle()}),disabled:!t.enabled,"data-active":t.editor.isActive("bold")?"":null},{default:e.withCtx((function(){return[e.createVNode(l,{crop:""}),t.i18n.popover?(e.openBlock(),e.createBlock(d,{key:0,"show-delay":500,"hide-delay":0},{default:e.withCtx((function(){return[e.createTextVNode(e.toDisplayString(t.i18n.popover),1)]})),_:1})):e.createCommentVNode("v-if",!0)]})),_:1},8,["disabled","data-active"])):e.createCommentVNode("v-if",!0)};

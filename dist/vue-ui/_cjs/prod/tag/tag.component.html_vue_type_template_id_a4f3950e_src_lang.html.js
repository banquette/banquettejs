/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue");exports.render=function render(t,r,o,a,l,n){var c=e.resolveComponent("i-material-close"),i=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.tagName),{href:t.href,target:t.target,class:"bt-tag","data-interactive":null!==t.href?"":null,"data-closable":t.closable?"":null},{default:e.withCtx((function(){return[e.renderSlot(t.$slots,"default"),t.closable?(e.openBlock(),e.createElementBlock("span",{key:0,class:"close-icon",onClick:r[0]||(r[0]=e.withModifiers((function(e){return t.close()}),["stop","prevent"]))},[e.createVNode(c)])):e.createCommentVNode("v-if",!0)]})),_:3},8,["href","target","data-interactive","data-closable"])),[[i]])};

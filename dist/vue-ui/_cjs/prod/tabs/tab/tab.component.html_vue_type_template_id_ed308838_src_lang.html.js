/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t={class:"bt-tab"};exports.render=function render(r,o,l,s,n,c){return e.withDirectives((e.openBlock(),e.createElementBlock("div",t,[e.createElementVNode("li",{ref:"toggle",class:e.normalizeClass(["bt-tab-toggle",{focused:r.focused,disabled:r.disabled}]),onClick:o[0]||(o[0]=function(e){return r.focus()})},[e.renderSlot(r.$slots,"title",{},(function(){return[e.createTextVNode(e.toDisplayString(r.title),1)]}))],2),r.preRender||r.focused?e.renderSlot(r.$slots,"default",{key:0}):e.createCommentVNode("v-if",!0)],512)),[[e.vShow,r.focused]])};

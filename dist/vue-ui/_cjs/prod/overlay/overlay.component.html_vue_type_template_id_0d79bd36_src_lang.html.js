/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=["data-is-disabled"],r={class:"inner"};exports.render=function render(i,l,s,n,d,o){var a=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"bt-overlay",style:e.normalizeStyle({position:i.position,zIndex:i.zIndex}),"data-is-disabled":i.visible?null:""},[e.createElementVNode("div",r,[e.renderSlot(i.$slots,"default")])],12,t)),[[a]])};

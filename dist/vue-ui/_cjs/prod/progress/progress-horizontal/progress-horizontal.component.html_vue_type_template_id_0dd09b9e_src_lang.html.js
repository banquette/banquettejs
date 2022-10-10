/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=["data-indeterminate"],r={key:0,class:"text"},n={class:"inner"};exports.render=function render(a,i,s,o,l,d){var c=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"bt-progress-horizontal","data-indeterminate":a.isIndeterminate()?"":null},[e.createElementVNode("div",{class:"value",style:e.normalizeStyle({width:a.width})},[a.showProgressText&&!a.isIndeterminate()?(e.openBlock(),e.createElementBlock("span",r,[e.createElementVNode("span",n,[e.renderSlot(a.$slots,"default",{indeterminate:a.isIndeterminate,progressText:a.animatedProgressText},(function(){return[a.isIndeterminate()?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(a.animatedProgressText)+"%",1)],64))]}))])])):e.createCommentVNode("v-if",!0)],4)],8,t)),[[c]])};

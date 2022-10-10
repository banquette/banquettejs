/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=["data-direction"],r={class:"toggles-wrapper"},l={ref:"toggles",class:"toggles"},o={class:"focus-indicator",ref:"indicator"},i={ref:"content",class:"content"};exports.render=function render(s,c,a,n,d,v){var u=e.resolveDirective("bt-teleport"),b=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"bt-tabs","data-direction":s.direction},[e.createElementVNode("div",r,[e.createCommentVNode(" <bt-tab> slots will be teleported here "),e.withDirectives(e.createElementVNode("ul",l,null,512),[[u,{ref:"toggle",target:s.getTabs()}]]),e.createElementVNode("div",o,null,512)]),e.createElementVNode("div",i,[e.renderSlot(s.$slots,"default")],512)],8,t)),[[b]])};

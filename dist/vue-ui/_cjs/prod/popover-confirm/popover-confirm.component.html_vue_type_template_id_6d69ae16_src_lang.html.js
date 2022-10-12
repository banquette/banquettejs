/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t={class:"bt-popover-confirm"},o={class:"message"},r={class:"actions"};exports.render=function render(n,i,c,s,l,a){var d=e.resolveComponent("bt-button"),p=e.resolveComponent("bt-dropdown"),v=e.resolveDirective("bt-click-outside"),u=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",t,[e.createElementVNode("div",{class:"slot-wrapper",onClick:i[0]||(i[0]=e.withModifiers((function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n.showDropdown&&n.showDropdown.apply(n,e)}),["stop","prevent"]))},[e.renderSlot(n.$slots,"default",{open:n.showDropdown})]),e.createVNode(p,e.mergeProps({class:"bt-popover-confirm-dropdown",visible:n.dropdownVisible},n.$attrs),{default:e.withCtx((function(){return[e.withDirectives((e.openBlock(),e.createElementBlock("div",{onClick:i[3]||(i[3]=e.withModifiers((function(){}),["stop"]))},[e.createElementVNode("div",o,[n.icon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.icon),{key:0})):e.createCommentVNode("v-if",!0),e.createTextVNode(" "+e.toDisplayString(n.message),1)]),e.createElementVNode("div",r,[e.createElementVNode("a",{href:"",onClick:i[1]||(i[1]=e.withModifiers((function(e){return n.cancel()}),["stop","prevent"])),class:"cancel-button"},e.toDisplayString(n.cancelText),1),e.createVNode(d,{onClick:i[2]||(i[2]=e.withModifiers((function(e){return n.confirm()}),["stop"])),class:"confirm-button"},{default:e.withCtx((function(){return[e.createTextVNode(e.toDisplayString(n.confirmText),1)]})),_:1})])])),[[v,n.cancel]])]})),_:1},16,["visible"])])),[[u]])};
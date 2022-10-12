/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=["tabindex","data-is-disabled","data-is-checked","data-is-indeterminate","data-has-focus","data-has-error","data-has-group"],o={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l=[function(t){return e.pushScopeId("data-v-c8b09bc4"),t=t(),e.popScopeId(),t}((function(){return e.createElementVNode("g",{fill:"none","fill-rule":"evenodd"},[e.createElementVNode("path",{d:"M0 0h20v20H0z"}),e.createElementVNode("path",{class:"fill",d:"M1 10.243L7.321 17 19 4.763 17.156 3 7.321 13.346l-4.477-4.76z"})],-1)}))],n=["for"],r=["for"],a=["for"];exports.render=function render(c,d,i,s,u,v){var f=e.resolveComponent("bt-form-base-input"),p=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"bt-form-checkbox",tabindex:c.v.control.disabled?null:c.v.control.tabIndex,"data-is-disabled":c.v.control.disabled?"":null,"data-is-checked":c.v.checked?"":null,"data-is-indeterminate":c.v.indeterminate?"":null,"data-has-focus":c.v.control.focused?"":null,"data-has-error":c.v.control.invalid&&c.v.control.validated?"":null,"data-has-group":c.v.hasGroup?"":null,onKeydown:d[0]||(d[0]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return c.onKeyDown&&c.onKeyDown.apply(c,e)}),onClick:d[1]||(d[1]=function(e){return c.toggle()}),onFocus:d[2]||(d[2]=function(e){return c.v.control.onFocus()}),onBlur:d[3]||(d[3]=function(e){return c.v.control.onBlur()})},[e.createVNode(f,{v:c.v},{help:e.withCtx((function(){return[e.renderSlot(c.$slots,"help")]})),default:e.withCtx((function(){return[e.createElementVNode("div",{ref:"inputWrapper",class:e.normalizeClass(["checkbox",{indeterminate:c.v.indeterminate}])},[!c.v.indeterminate&&c.v.checked?(e.openBlock(),e.createElementBlock("svg",o,l)):e.createCommentVNode("v-if",!0)],2),c.hasDefaultSlot?(e.openBlock(),e.createElementBlock("label",{key:0,for:c.v.control.fullId},[e.renderSlot(c.$slots,"default")],8,n)):e.createCommentVNode("v-if",!0),c.hasLabelSlot?(e.openBlock(),e.createElementBlock("label",{key:1,for:c.v.control.fullId},[e.renderSlot(c.$slots,"label")],8,r)):c.v.label?(e.openBlock(),e.createElementBlock("label",{key:2,for:c.v.control.fullId},e.toDisplayString(c.v.label),9,a)):e.createCommentVNode("v-if",!0)]})),_:3},8,["v"])],40,t)),[[p]])};
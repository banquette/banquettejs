/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=["tabindex","data-is-multiple","data-has-value","data-has-focus","data-is-disabled"],o=["multiple","accept"],n={class:"inner-wrapper"},l=["innerHTML"],r={class:"files-queue"},i={class:"file-details"},a={key:1,class:"error-icon"},c={class:"file-details-inner"},s={class:"file-name"},d={key:1,class:"file-size"},u={key:2,class:"file-size"},p={key:3,class:"error-message"},m={class:"buttons"},v={key:0,class:"done-icon"};exports.render=function render(f,k,C,B,b,g){var y=e.resolveComponent("bt-progress-circular"),h=e.resolveComponent("i-material-error"),N=e.resolveComponent("i-material-description"),V=e.resolveComponent("bt-progress-horizontal"),w=e.resolveComponent("i-material-done"),E=e.resolveComponent("i-material-file-upload"),x=e.resolveComponent("bt-button"),S=e.resolveComponent("i-material-stop"),D=e.resolveComponent("i-material-close"),z=e.resolveComponent("bt-form-base-input"),_=e.resolveDirective("bt-bind-theme");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"bt-form-file",tabindex:f.v.control.disabled?null:f.v.control.tabIndex,"data-is-multiple":f.v.multiple?"":null,"data-has-value":f.v.control.value.length>0?"":null,"data-has-focus":f.v.control.focused?"":null,"data-is-disabled":f.v.control.disabled?"":null,onKeydown:k[2]||(k[2]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return f.onKeyDown&&f.onKeyDown.apply(f,e)}),onFocus:k[3]||(k[3]=function(e){return f.v.control.onFocus()}),onBlur:k[4]||(k[4]=function(e){return f.v.control.onBlur()})},[e.createVNode(z,{v:f.v},{label:e.withCtx((function(){return[e.renderSlot(f.$slots,"default")]})),help:e.withCtx((function(){return[e.renderSlot(f.$slots,"help")]})),default:e.withCtx((function(){return[e.createElementVNode("input",{ref:"input",type:"file",multiple:f.v.multiple?"":null,accept:f.v.accept,"data-file-input":"",onChange:k[0]||(k[0]=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return f.onFileSelectionChange&&f.onFileSelectionChange.apply(f,e)})},null,40,o),e.createElementVNode("div",n,[e.renderSlot(f.$slots,"browse",{browse:f.browse},(function(){return[e.createElementVNode("div",{class:"browse",onClick:k[1]||(k[1]=function(e){return f.browse()})},[e.renderSlot(f.$slots,"browse-text",{},(function(){return[e.createElementVNode("span",{innerHTML:f.i18n.empty},null,8,l)]}))])]})),e.createElementVNode("div",r,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(f.v.control.value,(function(t){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["file-item",{error:t.failed}])},[e.createElementVNode("div",i,[t.uploading?(e.openBlock(),e.createBlock(y,{key:0})):t.failed?(e.openBlock(),e.createElementBlock("div",a,[e.createVNode(h)])):(e.openBlock(),e.createBlock(N,{key:2})),e.createElementVNode("div",c,[e.createElementVNode("div",s,e.toDisplayString(t.filename),1),t.uploading||t.paused?(e.openBlock(),e.createBlock(V,{key:0,progress:t.progress,"show-progress-text":!1},null,8,["progress"])):e.createCommentVNode("v-if",!0),t.file?(e.openBlock(),e.createElementBlock("div",d,e.toDisplayString(t.uploadedSizeText)+" / "+e.toDisplayString(t.totalSizeText)+" ("+e.toDisplayString(t.progress)+"%)",1)):t.totalSize?(e.openBlock(),e.createElementBlock("div",u,e.toDisplayString(t.totalSizeText),1)):e.createCommentVNode("v-if",!0),t.failed?(e.openBlock(),e.createElementBlock("div",p,e.toDisplayString(t.error),1)):e.createCommentVNode("v-if",!0)])]),e.createElementVNode("div",m,[t.succeeded?(e.openBlock(),e.createElementBlock("div",v,[e.createVNode(w)])):e.createCommentVNode("v-if",!0),t.paused||t.failed?(e.openBlock(),e.createBlock(x,{key:1,onClick:function(e){return f.start(t)}},{default:e.withCtx((function(){return[e.createVNode(E)]})),_:2},1032,["onClick"])):e.createCommentVNode("v-if",!0),t.uploading?(e.openBlock(),e.createBlock(x,{key:2,onClick:function(e){return f.pause(t)}},{default:e.withCtx((function(){return[e.createVNode(S)]})),_:2},1032,["onClick"])):e.createCommentVNode("v-if",!0),e.createVNode(x,{onClick:function(e){return f.cancel(t)}},{default:e.withCtx((function(){return[e.createVNode(D)]})),_:2},1032,["onClick"])])],2)})),256))])])]})),_:3},8,["v"])],40,t)),[[_]])};
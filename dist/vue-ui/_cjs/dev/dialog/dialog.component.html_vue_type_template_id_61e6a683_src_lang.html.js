/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _withScopeId = function (n) { return (vue.pushScopeId("data-v-61e6a683"),n=n(),vue.popScopeId(),n); };
var _hoisted_1 = ["data-is-draggable", "data-is-dragging"];
var _hoisted_2 = {
  key: 0,
  ref: "header",
  class: "header"
};
var _hoisted_3 = { class: "close-icon" };
var _hoisted_4 = /*#__PURE__*/ _withScopeId(function () { return vue.createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1 /* HOISTED */); });
var _hoisted_5 = [
  _hoisted_4
];
var _hoisted_6 = { class: "body" };
var _hoisted_7 = {
  key: 1,
  class: "footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_overlay = vue.resolveComponent("bt-overlay");
  var _component_bt_client_only = vue.resolveComponent("bt-client-only");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return (vue.openBlock(), vue.createBlock(_component_bt_client_only, null, {
    default: vue.withCtx(function () { return [
      (vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: _ctx.teleport,
        disabled: !_ctx.teleport
      }, [
        vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({ class: "bt-dialog" }, _ctx.$attrs, {
          "data-is-draggable": _ctx.draggable ? '' : null,
          "data-is-dragging": _ctx.dragging ? '' : null
        }), [
          (_ctx.rendered)
            ? (vue.openBlock(), vue.createBlock(_component_bt_overlay, {
                key: 0,
                ref: "overlay",
                visible: _ctx.isVisible && _ctx.modal,
                onMousedown: _ctx.onOverlayMouseDown
              }, {
                default: vue.withCtx(function () { return [
                  vue.createElementVNode("div", {
                    class: "bt-dialog-inner",
                    style: vue.normalizeStyle(_ctx.dragTranslationStyle)
                  }, [
                    (_ctx.hasHeader)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                          vue.createElementVNode("div", _hoisted_3, [
                            (_ctx.showClose)
                              ? (vue.openBlock(), vue.createElementBlock("svg", {
                                  key: 0,
                                  viewBox: "0 0 1024 1024",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.close()); })
                                }, _hoisted_5))
                              : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.renderSlot(_ctx.$slots, "header", vue.normalizeProps(vue.guardReactiveProps(_ctx.bindings)))
                        ], 512 /* NEED_PATCH */))
                      : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("div", _hoisted_6, [
                      vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(_ctx.bindings)))
                    ]),
                    (_ctx.hasFooter)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                          vue.renderSlot(_ctx.$slots, "footer", vue.normalizeProps(vue.guardReactiveProps(_ctx.bindings)))
                        ]))
                      : vue.createCommentVNode("v-if", true)
                  ], 4 /* STYLE */)
                ]; }),
                _: 3 /* FORWARDED */
              }, 8 /* PROPS */, ["visible", "onMousedown"]))
            : vue.createCommentVNode("v-if", true)
        ], 16 /* FULL_PROPS */, _hoisted_1)), [
          [_directive_bt_bind_theme]
        ])
      ], 8 /* PROPS */, ["to", "disabled"]))
    ]; }),
    _: 3 /* FORWARDED */
  }))
}

exports.render = render;

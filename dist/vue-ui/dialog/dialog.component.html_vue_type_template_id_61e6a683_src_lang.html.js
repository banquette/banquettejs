/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, Teleport, withDirectives, createElementBlock, mergeProps, createElementVNode, normalizeStyle, createCommentVNode, renderSlot, normalizeProps, guardReactiveProps, pushScopeId, popScopeId } from 'vue';

var _withScopeId = function (n) { return (pushScopeId("data-v-61e6a683"),n=n(),popScopeId(),n); };
var _hoisted_1 = ["data-is-draggable", "data-is-dragging"];
var _hoisted_2 = {
  key: 0,
  ref: "header",
  class: "header"
};
var _hoisted_3 = { class: "close-icon" };
var _hoisted_4 = /*#__PURE__*/ _withScopeId(function () { return createElementVNode("path", {
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
  var _component_bt_overlay = resolveComponent("bt-overlay");
  var _component_bt_client_only = resolveComponent("bt-client-only");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return (openBlock(), createBlock(_component_bt_client_only, null, {
    default: withCtx(function () { return [
      (openBlock(), createBlock(Teleport, {
        to: _ctx.teleport,
        disabled: !_ctx.teleport
      }, [
        withDirectives((openBlock(), createElementBlock("div", mergeProps({ class: "bt-dialog" }, _ctx.$attrs, {
          "data-is-draggable": _ctx.draggable ? '' : null,
          "data-is-dragging": _ctx.dragging ? '' : null
        }), [
          (_ctx.rendered)
            ? (openBlock(), createBlock(_component_bt_overlay, {
                key: 0,
                ref: "overlay",
                visible: _ctx.isVisible && _ctx.modal,
                onMousedown: _ctx.onOverlayMouseDown
              }, {
                default: withCtx(function () { return [
                  createElementVNode("div", {
                    class: "bt-dialog-inner",
                    style: normalizeStyle(_ctx.dragTranslationStyle)
                  }, [
                    (_ctx.hasHeader)
                      ? (openBlock(), createElementBlock("div", _hoisted_2, [
                          createElementVNode("div", _hoisted_3, [
                            (_ctx.showClose)
                              ? (openBlock(), createElementBlock("svg", {
                                  key: 0,
                                  viewBox: "0 0 1024 1024",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.close()); })
                                }, _hoisted_5))
                              : createCommentVNode("v-if", true)
                          ]),
                          renderSlot(_ctx.$slots, "header", normalizeProps(guardReactiveProps(_ctx.bindings)))
                        ], 512 /* NEED_PATCH */))
                      : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_6, [
                      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.bindings)))
                    ]),
                    (_ctx.hasFooter)
                      ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          renderSlot(_ctx.$slots, "footer", normalizeProps(guardReactiveProps(_ctx.bindings)))
                        ]))
                      : createCommentVNode("v-if", true)
                  ], 4 /* STYLE */)
                ]; }),
                _: 3 /* FORWARDED */
              }, 8 /* PROPS */, ["visible", "onMousedown"]))
            : createCommentVNode("v-if", true)
        ], 16 /* FULL_PROPS */, _hoisted_1)), [
          [_directive_bt_bind_theme]
        ])
      ], 8 /* PROPS */, ["to", "disabled"]))
    ]; }),
    _: 3 /* FORWARDED */
  }))
}

export { render };

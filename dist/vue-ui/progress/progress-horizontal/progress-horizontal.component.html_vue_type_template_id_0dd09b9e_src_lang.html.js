/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveDirective, withDirectives, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

var _hoisted_1 = ["data-indeterminate"];
var _hoisted_2 = {
  key: 0,
  class: "text"
};
var _hoisted_3 = { class: "inner" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: "bt-progress-horizontal",
    "data-indeterminate": _ctx.isIndeterminate() ? '' : null
  }, [
    createElementVNode("div", {
      class: "value",
      style: normalizeStyle({width: _ctx.width})
    }, [
      (_ctx.showProgressText && !_ctx.isIndeterminate())
        ? (openBlock(), createElementBlock("span", _hoisted_2, [
            createElementVNode("span", _hoisted_3, [
              renderSlot(_ctx.$slots, "default", {
                indeterminate: _ctx.isIndeterminate,
                progressText: _ctx.animatedProgressText
              }, function () { return [
                (!_ctx.isIndeterminate())
                  ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(_ctx.animatedProgressText) + "%", 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : createCommentVNode("v-if", true)
              ]; })
            ])
          ]))
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */)
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

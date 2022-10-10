/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } from 'vue';

var _hoisted_1 = ["data-is-disabled"];
var _hoisted_2 = { class: "inner" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: "bt-overlay",
    style: normalizeStyle({position: _ctx.position, zIndex: _ctx.zIndex}),
    "data-is-disabled": !_ctx.visible ? '' : null
  }, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 12 /* STYLE, PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

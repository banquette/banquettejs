/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { withDirectives, openBlock, createElementBlock, createElementVNode, toDisplayString, renderSlot, vShow } from 'vue';

var _hoisted_1 = { class: "bt-form-select-group" };
var _hoisted_2 = { class: "label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", _hoisted_1, [
    createElementVNode("li", _hoisted_2, toDisplayString(_ctx.label), 1 /* TEXT */),
    createElementVNode("li", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 512 /* NEED_PATCH */)), [
    [vShow, _ctx.visibleChoices.length > 0]
  ])
}

export { render };

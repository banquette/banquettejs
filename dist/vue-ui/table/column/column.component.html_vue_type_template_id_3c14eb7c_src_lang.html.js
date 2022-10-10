/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { openBlock, createElementBlock, renderSlot, createCommentVNode } from 'vue';

var _hoisted_1 = { class: "bt-table-column" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("td", _hoisted_1, [
    (_ctx.readyToRender)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : createCommentVNode("v-if", true)
  ]))
}

export { render };

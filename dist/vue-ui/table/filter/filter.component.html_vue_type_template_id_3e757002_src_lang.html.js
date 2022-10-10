/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { openBlock, createElementBlock, renderSlot } from 'vue';

var _hoisted_1 = {
  ref: "root",
  class: "bt-table-filter"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ], 512 /* NEED_PATCH */))
}

export { render };

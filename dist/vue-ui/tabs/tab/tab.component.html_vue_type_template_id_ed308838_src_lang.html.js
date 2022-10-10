/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { withDirectives, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, vShow } from 'vue';

var _hoisted_1 = { class: "bt-tab" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("li", {
      ref: "toggle",
      class: normalizeClass(["bt-tab-toggle", {focused: _ctx.focused, disabled: _ctx.disabled}]),
      onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.focus()); })
    }, [
      renderSlot(_ctx.$slots, "title", {}, function () { return [
        createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
      ]; })
    ], 2 /* CLASS */),
    (_ctx.preRender || _ctx.focused)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : createCommentVNode("v-if", true)
  ], 512 /* NEED_PATCH */)), [
    [vShow, _ctx.focused]
  ])
}

export { render };

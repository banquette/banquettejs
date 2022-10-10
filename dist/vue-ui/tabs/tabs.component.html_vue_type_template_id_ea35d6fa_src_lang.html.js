/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveDirective, withDirectives, openBlock, createElementBlock, createElementVNode, createCommentVNode, renderSlot } from 'vue';

var _hoisted_1 = ["data-direction"];
var _hoisted_2 = { class: "toggles-wrapper" };
var _hoisted_3 = {
  ref: "toggles",
  class: "toggles"
};
var _hoisted_4 = {
  class: "focus-indicator",
  ref: "indicator"
};
var _hoisted_5 = {
  ref: "content",
  class: "content"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_teleport = resolveDirective("bt-teleport");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: "bt-tabs",
    "data-direction": _ctx.direction
  }, [
    createElementVNode("div", _hoisted_2, [
      createCommentVNode(" <bt-tab> slots will be teleported here "),
      withDirectives(createElementVNode("ul", _hoisted_3, null, 512 /* NEED_PATCH */), [
        [_directive_bt_teleport, {ref: 'toggle', target: _ctx.getTabs()}]
      ]),
      createElementVNode("div", _hoisted_4, null, 512 /* NEED_PATCH */)
    ]),
    createElementVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

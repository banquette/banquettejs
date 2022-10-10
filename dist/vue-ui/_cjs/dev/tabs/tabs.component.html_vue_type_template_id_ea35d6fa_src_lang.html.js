/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  var _directive_bt_teleport = vue.resolveDirective("bt-teleport");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-tabs",
    "data-direction": _ctx.direction
  }, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createCommentVNode(" <bt-tab> slots will be teleported here "),
      vue.withDirectives(vue.createElementVNode("ul", _hoisted_3, null, 512 /* NEED_PATCH */), [
        [_directive_bt_teleport, {ref: 'toggle', target: _ctx.getTabs()}]
      ]),
      vue.createElementVNode("div", _hoisted_4, null, 512 /* NEED_PATCH */)
    ]),
    vue.createElementVNode("div", _hoisted_5, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

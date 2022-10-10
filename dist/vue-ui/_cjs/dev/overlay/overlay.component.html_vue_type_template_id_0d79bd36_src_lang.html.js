/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["data-is-disabled"];
var _hoisted_2 = { class: "inner" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-overlay",
    style: vue.normalizeStyle({position: _ctx.position, zIndex: _ctx.zIndex}),
    "data-is-disabled": !_ctx.visible ? '' : null
  }, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 12 /* STYLE, PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

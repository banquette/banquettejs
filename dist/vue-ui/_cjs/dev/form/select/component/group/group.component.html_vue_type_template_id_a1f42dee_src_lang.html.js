/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-form-select-group" };
var _hoisted_2 = { class: "label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("ul", _hoisted_1, [
    vue.createElementVNode("li", _hoisted_2, vue.toDisplayString(_ctx.label), 1 /* TEXT */),
    vue.createElementVNode("li", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, _ctx.visibleChoices.length > 0]
  ])
}

exports.render = render;

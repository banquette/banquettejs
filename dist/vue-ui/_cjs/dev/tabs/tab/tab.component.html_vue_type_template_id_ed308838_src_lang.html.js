/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-tab" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("li", {
      ref: "toggle",
      class: vue.normalizeClass(["bt-tab-toggle", {focused: _ctx.focused, disabled: _ctx.disabled}]),
      onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.focus()); })
    }, [
      vue.renderSlot(_ctx.$slots, "title", {}, function () { return [
        vue.createTextVNode(vue.toDisplayString(_ctx.title), 1 /* TEXT */)
      ]; })
    ], 2 /* CLASS */),
    (_ctx.preRender || _ctx.focused)
      ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
      : vue.createCommentVNode("v-if", true)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, _ctx.focused]
  ])
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-table-column" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("td", _hoisted_1, [
    (_ctx.readyToRender)
      ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
      : vue.createCommentVNode("v-if", true)
  ]))
}

exports.render = render;

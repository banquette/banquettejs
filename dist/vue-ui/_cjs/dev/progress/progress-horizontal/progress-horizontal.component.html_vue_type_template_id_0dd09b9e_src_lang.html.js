/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["data-indeterminate"];
var _hoisted_2 = {
  key: 0,
  class: "text"
};
var _hoisted_3 = { class: "inner" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-progress-horizontal",
    "data-indeterminate": _ctx.isIndeterminate() ? '' : null
  }, [
    vue.createElementVNode("div", {
      class: "value",
      style: vue.normalizeStyle({width: _ctx.width})
    }, [
      (_ctx.showProgressText && !_ctx.isIndeterminate())
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
            vue.createElementVNode("span", _hoisted_3, [
              vue.renderSlot(_ctx.$slots, "default", {
                indeterminate: _ctx.isIndeterminate,
                progressText: _ctx.animatedProgressText
              }, function () { return [
                (!_ctx.isIndeterminate())
                  ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(_ctx.animatedProgressText) + "%", 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : vue.createCommentVNode("v-if", true)
              ]; })
            ])
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 4 /* STYLE */)
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

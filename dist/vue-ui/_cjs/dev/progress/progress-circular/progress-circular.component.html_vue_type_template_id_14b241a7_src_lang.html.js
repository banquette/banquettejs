/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-progress-circular" };
var _hoisted_2 = { class: "inner" };
var _hoisted_3 = ["viewBox"];
var _hoisted_4 = ["d", "stroke-width", "stroke-dasharray"];
var _hoisted_5 = {
  key: 0,
  class: "progress"
};
var _hoisted_6 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      (vue.openBlock(), vue.createElementBlock("svg", {
        viewBox: _ctx.viewBox,
        class: vue.normalizeClass({indeterminate: _ctx.isIndeterminate()})
      }, [
        vue.createElementVNode("path", {
          d: _ctx.d,
          "stroke-width": _ctx.strokeWidth,
          "stroke-dasharray": _ctx.strokeDasharray,
          class: "path"
        }, null, 8 /* PROPS */, _hoisted_4)
      ], 10 /* CLASS, PROPS */, _hoisted_3)),
      vue.createCommentVNode(" To override the whole content "),
      vue.renderSlot(_ctx.$slots, "content", {
        indeterminate: _ctx.isIndeterminate,
        progressText: _ctx.animatedProgressText
      }, function () { return [
        (_ctx.showProgressText)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
              vue.createCommentVNode(" To only override the text "),
              vue.renderSlot(_ctx.$slots, "default", {
                indeterminate: _ctx.isIndeterminate,
                progressText: _ctx.animatedProgressText
              }, function () { return [
                (!_ctx.isIndeterminate())
                  ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, vue.toDisplayString(_ctx.animatedProgressText) + "%", 1 /* TEXT */))
                  : vue.createCommentVNode("v-if", true)
              ]; })
            ]))
          : vue.createCommentVNode("v-if", true)
      ]; })
    ])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveDirective, withDirectives, openBlock, createElementBlock, createElementVNode, normalizeClass, createCommentVNode, renderSlot, toDisplayString } from 'vue';

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
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      (openBlock(), createElementBlock("svg", {
        viewBox: _ctx.viewBox,
        class: normalizeClass({indeterminate: _ctx.isIndeterminate()})
      }, [
        createElementVNode("path", {
          d: _ctx.d,
          "stroke-width": _ctx.strokeWidth,
          "stroke-dasharray": _ctx.strokeDasharray,
          class: "path"
        }, null, 8 /* PROPS */, _hoisted_4)
      ], 10 /* CLASS, PROPS */, _hoisted_3)),
      createCommentVNode(" To override the whole content "),
      renderSlot(_ctx.$slots, "content", {
        indeterminate: _ctx.isIndeterminate,
        progressText: _ctx.animatedProgressText
      }, function () { return [
        (_ctx.showProgressText)
          ? (openBlock(), createElementBlock("span", _hoisted_5, [
              createCommentVNode(" To only override the text "),
              renderSlot(_ctx.$slots, "default", {
                indeterminate: _ctx.isIndeterminate,
                progressText: _ctx.animatedProgressText
              }, function () { return [
                (!_ctx.isIndeterminate())
                  ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(_ctx.animatedProgressText) + "%", 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ]; })
            ]))
          : createCommentVNode("v-if", true)
      ]; })
    ])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

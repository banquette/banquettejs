/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _withScopeId = function (n) { return (vue.pushScopeId("data-v-c8b09bc4"),n=n(),vue.popScopeId(),n); };
var _hoisted_1 = ["tabindex", "data-is-disabled", "data-is-checked", "data-is-indeterminate", "data-has-focus", "data-has-error", "data-has-group"];
var _hoisted_2 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_3 = /*#__PURE__*/ _withScopeId(function () { return vue.createElementVNode("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  /*#__PURE__*/vue.createElementVNode("path", { d: "M0 0h20v20H0z" }),
  /*#__PURE__*/vue.createElementVNode("path", {
    class: "fill",
    d: "M1 10.243L7.321 17 19 4.763 17.156 3 7.321 13.346l-4.477-4.76z"
  })
], -1 /* HOISTED */); });
var _hoisted_4 = [
  _hoisted_3
];
var _hoisted_5 = ["for"];
var _hoisted_6 = ["for"];
var _hoisted_7 = ["for"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-form-checkbox",
    tabindex: !_ctx.v.control.disabled ? _ctx.v.control.tabIndex : null,
    "data-is-disabled": _ctx.v.control.disabled ? '' : null,
    "data-is-checked": _ctx.v.checked ? '' : null,
    "data-is-indeterminate": _ctx.v.indeterminate ? '' : null,
    "data-has-focus": _ctx.v.control.focused ? '' : null,
    "data-has-error": _ctx.v.control.invalid && _ctx.v.control.validated ? '' : null,
    "data-has-group": _ctx.v.hasGroup ? '' : null,
    onKeydown: _cache[0] || (_cache[0] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return (_ctx.onKeyDown && _ctx.onKeyDown.apply(_ctx, args));
  }),
    onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggle()); }),
    onFocus: _cache[2] || (_cache[2] = function ($event) { return (_ctx.v.control.onFocus()); }),
    onBlur: _cache[3] || (_cache[3] = function ($event) { return (_ctx.v.control.onBlur()); })
  }, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      default: vue.withCtx(function () { return [
        vue.createElementVNode("div", {
          ref: "inputWrapper",
          class: vue.normalizeClass(["checkbox", {indeterminate: _ctx.v.indeterminate}])
        }, [
          (!_ctx.v.indeterminate && _ctx.v.checked)
            ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_2, _hoisted_4))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */),
        (_ctx.hasDefaultSlot)
          ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 0,
              for: _ctx.v.control.fullId
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 8 /* PROPS */, _hoisted_5))
          : vue.createCommentVNode("v-if", true),
        (_ctx.hasLabelSlot)
          ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 1,
              for: _ctx.v.control.fullId
            }, [
              vue.renderSlot(_ctx.$slots, "label")
            ], 8 /* PROPS */, _hoisted_6))
          : (_ctx.v.label)
            ? (vue.openBlock(), vue.createElementBlock("label", {
                key: 2,
                for: _ctx.v.control.fullId
              }, vue.toDisplayString(_ctx.v.label), 9 /* TEXT, PROPS */, _hoisted_7))
            : vue.createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

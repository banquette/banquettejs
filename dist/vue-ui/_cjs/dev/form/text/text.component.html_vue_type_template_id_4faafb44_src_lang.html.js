/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-form-text" };
var _hoisted_2 = ["id", "type", "tabindex", "disabled", "autocomplete"];
var _hoisted_3 = ["id", "tabindex", "disabled", "rows", "data-resize-locked"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_remix_close_circle = vue.resolveComponent("i-remix-close-circle");
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      "extras-after": vue.withCtx(function () { return [
        (_ctx.v.control.value && _ctx.clearable && !_ctx.v.control.disabled)
          ? (vue.openBlock(), vue.createElementBlock("a", {
              key: 0,
              href: "",
              class: "clearable-icon",
              onClick: _cache[6] || (_cache[6] = vue.withModifiers(function ($event) { return (_ctx.v.control.value = ''); }, ["stop","prevent"]))
            }, [
              vue.createVNode(_component_i_remix_close_circle, { crop: "" })
            ]))
          : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "extras-after")
      ]; }),
      label: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      "before-raw": vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "before-raw")
      ]; }),
      "after-raw": vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "after-raw")
      ]; }),
      before: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "before")
      ]; }),
      after: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "after")
      ]; }),
      default: vue.withCtx(function () { return [
        (_ctx.v.type !== 'textarea')
          ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
              key: 0,
              ref: "input",
              id: _ctx.v.control.fullId,
              type: _ctx.v.type,
              tabindex: !_ctx.v.control.disabled ? _ctx.v.control.tabIndex : null,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) { return ((_ctx.v.control.value) = $event); }),
              disabled: _ctx.v.control.disabled ? '' : null,
              autocomplete: _ctx.v.autoComplete,
              "data-control": "",
              onFocus: _cache[1] || (_cache[1] = function ($event) { return (_ctx.v.control.onFocus()); }),
              onBlur: _cache[2] || (_cache[2] = function ($event) { return (_ctx.v.control.onBlur()); })
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2)), [
              [vue.vModelDynamic, _ctx.v.control.value]
            ])
          : vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              ref: "textarea",
              id: _ctx.v.control.fullId,
              tabindex: !_ctx.v.control.disabled ? _ctx.v.control.tabIndex : null,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) { return ((_ctx.v.control.value) = $event); }),
              disabled: _ctx.v.control.disabled ? '' : null,
              rows: _ctx.v.rows,
              "data-resize-locked": !_ctx.v.resizable ? '' : null,
              "data-control": "",
              onFocus: _cache[4] || (_cache[4] = function ($event) { return (_ctx.v.control.onFocus()); }),
              onBlur: _cache[5] || (_cache[5] = function ($event) { return (_ctx.v.control.onBlur()); })
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)), [
              [vue.vModelText, _ctx.v.control.value]
            ])
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

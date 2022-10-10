/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, createVNode, withCtx, withModifiers, createCommentVNode, renderSlot, vModelDynamic, vModelText } from 'vue';

var _hoisted_1 = { class: "bt-form-text" };
var _hoisted_2 = ["id", "type", "tabindex", "disabled", "autocomplete"];
var _hoisted_3 = ["id", "tabindex", "disabled", "rows", "data-resize-locked"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_remix_close_circle = resolveComponent("i-remix-close-circle");
  var _component_bt_form_base_input = resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      "extras-after": withCtx(function () { return [
        (_ctx.v.control.value && _ctx.clearable && !_ctx.v.control.disabled)
          ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: "",
              class: "clearable-icon",
              onClick: _cache[6] || (_cache[6] = withModifiers(function ($event) { return (_ctx.v.control.value = ''); }, ["stop","prevent"]))
            }, [
              createVNode(_component_i_remix_close_circle, { crop: "" })
            ]))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "extras-after")
      ]; }),
      label: withCtx(function () { return [
        renderSlot(_ctx.$slots, "default")
      ]; }),
      help: withCtx(function () { return [
        renderSlot(_ctx.$slots, "help")
      ]; }),
      "before-raw": withCtx(function () { return [
        renderSlot(_ctx.$slots, "before-raw")
      ]; }),
      "after-raw": withCtx(function () { return [
        renderSlot(_ctx.$slots, "after-raw")
      ]; }),
      before: withCtx(function () { return [
        renderSlot(_ctx.$slots, "before")
      ]; }),
      after: withCtx(function () { return [
        renderSlot(_ctx.$slots, "after")
      ]; }),
      default: withCtx(function () { return [
        (_ctx.v.type !== 'textarea')
          ? withDirectives((openBlock(), createElementBlock("input", {
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
              [vModelDynamic, _ctx.v.control.value]
            ])
          : withDirectives((openBlock(), createElementBlock("textarea", {
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
              [vModelText, _ctx.v.control.value]
            ])
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

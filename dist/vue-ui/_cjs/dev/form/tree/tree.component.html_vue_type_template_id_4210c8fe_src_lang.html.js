/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-form-tree" };
var _hoisted_2 = { class: "bt-tree-title-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_form_checkbox = vue.resolveComponent("bt-form-checkbox");
  var _component_bt_tree = vue.resolveComponent("bt-tree");
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      label: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      default: vue.withCtx(function () { return [
        vue.createVNode(_component_bt_tree, vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), {
          node: vue.withCtx(function (sp) { return [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(_component_bt_form_checkbox, {
                control: _ctx.getCheckboxData(sp.node).control,
                indeterminate: _ctx.getCheckboxData(sp.node).indeterminate,
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(function () {}, ["stop"]))
              }, null, 8 /* PROPS */, ["control", "indeterminate"]),
              vue.renderSlot(_ctx.$slots, "node", vue.normalizeProps(vue.guardReactiveProps(sp)), function () { return [
                vue.createTextVNode(vue.toDisplayString(sp.node.label), 1 /* TEXT */)
              ]; })
            ])
          ]; }),
          _: 3 /* FORWARDED */
        }, 16 /* FULL_PROPS */)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

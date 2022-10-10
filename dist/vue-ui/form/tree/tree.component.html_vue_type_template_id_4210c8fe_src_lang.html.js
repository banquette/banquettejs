/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, createVNode, withCtx, renderSlot, normalizeProps, guardReactiveProps, createElementVNode, withModifiers, createTextVNode, toDisplayString } from 'vue';

var _hoisted_1 = { class: "bt-form-tree" };
var _hoisted_2 = { class: "bt-tree-title-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_form_checkbox = resolveComponent("bt-form-checkbox");
  var _component_bt_tree = resolveComponent("bt-tree");
  var _component_bt_form_base_input = resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      label: withCtx(function () { return [
        renderSlot(_ctx.$slots, "default")
      ]; }),
      help: withCtx(function () { return [
        renderSlot(_ctx.$slots, "help")
      ]; }),
      default: withCtx(function () { return [
        createVNode(_component_bt_tree, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
          node: withCtx(function (sp) { return [
            createElementVNode("div", _hoisted_2, [
              createVNode(_component_bt_form_checkbox, {
                control: _ctx.getCheckboxData(sp.node).control,
                indeterminate: _ctx.getCheckboxData(sp.node).indeterminate,
                onClick: _cache[0] || (_cache[0] = withModifiers(function () {}, ["stop"]))
              }, null, 8 /* PROPS */, ["control", "indeterminate"]),
              renderSlot(_ctx.$slots, "node", normalizeProps(guardReactiveProps(sp)), function () { return [
                createTextVNode(toDisplayString(sp.node.label), 1 /* TEXT */)
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

export { render };

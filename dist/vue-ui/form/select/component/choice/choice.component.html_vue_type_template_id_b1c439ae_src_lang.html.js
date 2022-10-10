/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, withDirectives, openBlock, createBlock, normalizeClass, withModifiers, withCtx, renderSlot, createTextVNode, toDisplayString, createElementVNode, createCommentVNode, vShow } from 'vue';

var _hoisted_1 = { class: "icons" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_delete = resolveComponent("i-material-delete");
  var _component_i_material_check = resolveComponent("i-material-check");
  var _component_bt_dropdown_item = resolveComponent("bt-dropdown-item");

  return (_ctx.choice)
    ? withDirectives((openBlock(), createBlock(_component_bt_dropdown_item, {
        key: 0,
        class: normalizeClass(["bt-form-select-choice", {selected: _ctx.choice.selected, focused: _ctx.choice.focused, disabled: _ctx.choice.disabled}]),
        onClick: _cache[1] || (_cache[1] = withModifiers(function ($event) { return (_ctx.select()); }, ["stop"]))
      }, {
        default: withCtx(function () { return [
          renderSlot(_ctx.$slots, "default", {}, function () { return [
            createTextVNode(toDisplayString(_ctx.choice.label), 1 /* TEXT */)
          ]; }),
          createElementVNode("div", _hoisted_1, [
            (_ctx.choice.origin === 'user')
              ? (openBlock(), createBlock(_component_i_material_delete, {
                  key: 0,
                  class: "trash-icon",
                  onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.remove()); }, ["stop"]))
                }))
              : createCommentVNode("v-if", true),
            (_ctx.choice.selected)
              ? (openBlock(), createBlock(_component_i_material_check, {
                  key: 1,
                  class: "check-icon"
                }))
              : createCommentVNode("v-if", true)
          ])
        ]; }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["class"])), [
        [vShow, _ctx.choice.visible]
      ])
    : createCommentVNode("v-if", true)
}

export { render };

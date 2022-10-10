/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "icons" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_delete = vue.resolveComponent("i-material-delete");
  var _component_i_material_check = vue.resolveComponent("i-material-check");
  var _component_bt_dropdown_item = vue.resolveComponent("bt-dropdown-item");

  return (_ctx.choice)
    ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_bt_dropdown_item, {
        key: 0,
        class: vue.normalizeClass(["bt-form-select-choice", {selected: _ctx.choice.selected, focused: _ctx.choice.focused, disabled: _ctx.choice.disabled}]),
        onClick: _cache[1] || (_cache[1] = vue.withModifiers(function ($event) { return (_ctx.select()); }, ["stop"]))
      }, {
        default: vue.withCtx(function () { return [
          vue.renderSlot(_ctx.$slots, "default", {}, function () { return [
            vue.createTextVNode(vue.toDisplayString(_ctx.choice.label), 1 /* TEXT */)
          ]; }),
          vue.createElementVNode("div", _hoisted_1, [
            (_ctx.choice.origin === 'user')
              ? (vue.openBlock(), vue.createBlock(_component_i_material_delete, {
                  key: 0,
                  class: "trash-icon",
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.remove()); }, ["stop"]))
                }))
              : vue.createCommentVNode("v-if", true),
            (_ctx.choice.selected)
              ? (vue.openBlock(), vue.createBlock(_component_i_material_check, {
                  key: 1,
                  class: "check-icon"
                }))
              : vue.createCommentVNode("v-if", true)
          ])
        ]; }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["class"])), [
        [vue.vShow, _ctx.choice.visible]
      ])
    : vue.createCommentVNode("v-if", true)
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_format_bold = vue.resolveComponent("i-material-format-bold");
  var _component_bt_popover = vue.resolveComponent("bt-popover");
  var _component_bt_button = vue.resolveComponent("bt-button");

  return (_ctx.editor)
    ? (vue.openBlock(), vue.createBlock(_component_bt_button, {
        key: 0,
        class: "toolbar-button",
        onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.toggle()); }),
        disabled: !_ctx.enabled,
        "data-active": _ctx.editor.isActive('bold') ? '' : null
      }, {
        default: vue.withCtx(function () { return [
          vue.createVNode(_component_i_material_format_bold, { crop: "" }),
          (_ctx.i18n.popover)
            ? (vue.openBlock(), vue.createBlock(_component_bt_popover, {
                key: 0,
                "show-delay": 500,
                "hide-delay": 0
              }, {
                default: vue.withCtx(function () { return [
                  vue.createTextVNode(vue.toDisplayString(_ctx.i18n.popover), 1 /* TEXT */)
                ]; }),
                _: 1 /* STABLE */
              }))
            : vue.createCommentVNode("v-if", true)
        ]; }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled", "data-active"]))
    : vue.createCommentVNode("v-if", true)
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-popover-confirm" };
var _hoisted_2 = { class: "message" };
var _hoisted_3 = { class: "actions" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_button = vue.resolveComponent("bt-button");
  var _component_bt_dropdown = vue.resolveComponent("bt-dropdown");
  var _directive_bt_click_outside = vue.resolveDirective("bt-click-outside");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "slot-wrapper",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers(function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return (_ctx.showDropdown && _ctx.showDropdown.apply(_ctx, args));
  }, ["stop","prevent"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default", { open: _ctx.showDropdown })
    ]),
    vue.createVNode(_component_bt_dropdown, vue.mergeProps({
      class: "bt-popover-confirm-dropdown",
      visible: _ctx.dropdownVisible
    }, _ctx.$attrs), {
      default: vue.withCtx(function () { return [
        vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          onClick: _cache[3] || (_cache[3] = vue.withModifiers(function () {}, ["stop"]))
        }, [
          vue.createElementVNode("div", _hoisted_2, [
            (_ctx.icon)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), { key: 0 }))
              : vue.createCommentVNode("v-if", true),
            vue.createTextVNode(" " + vue.toDisplayString(_ctx.message), 1 /* TEXT */)
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("a", {
              href: "",
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(function ($event) { return (_ctx.cancel()); }, ["stop","prevent"])),
              class: "cancel-button"
            }, vue.toDisplayString(_ctx.cancelText), 1 /* TEXT */),
            vue.createVNode(_component_bt_button, {
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(function ($event) { return (_ctx.confirm()); }, ["stop"])),
              class: "confirm-button"
            }, {
              default: vue.withCtx(function () { return [
                vue.createTextVNode(vue.toDisplayString(_ctx.confirmText), 1 /* TEXT */)
              ]; }),
              _: 1 /* STABLE */
            })
          ])
        ])), [
          [_directive_bt_click_outside, _ctx.cancel]
        ])
      ]; }),
      _: 1 /* STABLE */
    }, 16 /* FULL_PROPS */, ["visible"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

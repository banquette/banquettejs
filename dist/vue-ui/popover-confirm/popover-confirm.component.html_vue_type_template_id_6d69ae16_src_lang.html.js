/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, createElementVNode, withModifiers, renderSlot, createVNode, mergeProps, withCtx, createBlock, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString } from 'vue';

var _hoisted_1 = { class: "bt-popover-confirm" };
var _hoisted_2 = { class: "message" };
var _hoisted_3 = { class: "actions" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_button = resolveComponent("bt-button");
  var _component_bt_dropdown = resolveComponent("bt-dropdown");
  var _directive_bt_click_outside = resolveDirective("bt-click-outside");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "slot-wrapper",
      onClick: _cache[0] || (_cache[0] = withModifiers(function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return (_ctx.showDropdown && _ctx.showDropdown.apply(_ctx, args));
  }, ["stop","prevent"]))
    }, [
      renderSlot(_ctx.$slots, "default", { open: _ctx.showDropdown })
    ]),
    createVNode(_component_bt_dropdown, mergeProps({
      class: "bt-popover-confirm-dropdown",
      visible: _ctx.dropdownVisible
    }, _ctx.$attrs), {
      default: withCtx(function () { return [
        withDirectives((openBlock(), createElementBlock("div", {
          onClick: _cache[3] || (_cache[3] = withModifiers(function () {}, ["stop"]))
        }, [
          createElementVNode("div", _hoisted_2, [
            (_ctx.icon)
              ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 }))
              : createCommentVNode("v-if", true),
            createTextVNode(" " + toDisplayString(_ctx.message), 1 /* TEXT */)
          ]),
          createElementVNode("div", _hoisted_3, [
            createElementVNode("a", {
              href: "",
              onClick: _cache[1] || (_cache[1] = withModifiers(function ($event) { return (_ctx.cancel()); }, ["stop","prevent"])),
              class: "cancel-button"
            }, toDisplayString(_ctx.cancelText), 1 /* TEXT */),
            createVNode(_component_bt_button, {
              onClick: _cache[2] || (_cache[2] = withModifiers(function ($event) { return (_ctx.confirm()); }, ["stop"])),
              class: "confirm-button"
            }, {
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.confirmText), 1 /* TEXT */)
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

export { render };

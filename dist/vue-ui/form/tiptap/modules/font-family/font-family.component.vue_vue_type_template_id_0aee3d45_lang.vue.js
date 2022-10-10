/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementBlock, Fragment, renderList, normalizeStyle, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, createTextVNode } from 'vue';

var _hoisted_1 = { class: "addons" };
var _hoisted_2 = ["innerHTML"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_arrow_drop_down = resolveComponent("i-material-arrow-drop-down");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_i_material_check = resolveComponent("i-material-check");
  var _component_i_material_warning = resolveComponent("i-material-warning");
  var _component_bt_dropdown_item = resolveComponent("bt-dropdown-item");
  var _component_bt_dropdown = resolveComponent("bt-dropdown");
  var _component_bt_button = resolveComponent("bt-button");

  return (_ctx.editor)
    ? (openBlock(), createBlock(_component_bt_button, {
        key: 0,
        disabled: !_ctx.enabled,
        class: "bt-form-tiptap-font-family toolbar-button"
      }, {
        toggle: withCtx(function (ref) {
          var close = ref.close;

          return [
          createVNode(_component_bt_dropdown, { class: "bt-form-tiptap-font-family-dropdown" }, {
            default: withCtx(function () { return [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.availableFonts, function (item, index) {
                return (openBlock(), createBlock(_component_bt_dropdown_item, {
                  style: normalizeStyle({fontFamily: item.font}),
                  class: normalizeClass([{missing: !item.available, focused: !index || _ctx.selectedFont === item.font}, "font"]),
                  onClick: function ($event) {_ctx.toggleFont(item.font); close();}
                }, {
                  default: withCtx(function () { return [
                    createElementVNode("span", null, toDisplayString(item.font), 1 /* TEXT */),
                    createElementVNode("div", _hoisted_1, [
                      (item.font === _ctx.selectedFont)
                        ? (openBlock(), createBlock(_component_i_material_check, { key: 0 }))
                        : createCommentVNode("v-if", true),
                      (!item.available)
                        ? (openBlock(), createBlock(_component_i_material_warning, { key: 1 }))
                        : createCommentVNode("v-if", true),
                      (!item.available)
                        ? (openBlock(), createBlock(_component_bt_popover, {
                            key: 2,
                            teleport: "body",
                            "show-delay": 500,
                            "hide-delay": 0,
                            placement: "left"
                          }, {
                            default: withCtx(function () { return [
                              createElementVNode("span", {
                                innerHTML: _ctx.i18n.missingPopover
                              }, null, 8 /* PROPS */, _hoisted_2)
                            ]; }),
                            _: 1 /* STABLE */
                          }))
                        : createCommentVNode("v-if", true)
                    ])
                  ]; }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["style", "class", "onClick"]))
              }), 256 /* UNKEYED_FRAGMENT */))
            ]; }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)
        ];
  }),
        default: withCtx(function () { return [
          createTextVNode(toDisplayString(_ctx.selectedFont) + " ", 1 /* TEXT */),
          createVNode(_component_i_material_arrow_drop_down, {
            crop: "",
            width: "0.8em"
          }),
          (_ctx.i18n.popover)
            ? (openBlock(), createBlock(_component_bt_popover, {
                key: 0,
                "show-delay": 500,
                "hide-delay": 0
              }, {
                default: withCtx(function () { return [
                  createTextVNode(toDisplayString(_ctx.i18n.popover), 1 /* TEXT */)
                ]; }),
                _: 1 /* STABLE */
              }))
            : createCommentVNode("v-if", true)
        ]; }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled"]))
    : createCommentVNode("v-if", true)
}

export { render };

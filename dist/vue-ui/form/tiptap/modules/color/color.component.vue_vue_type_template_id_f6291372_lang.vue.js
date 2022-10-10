/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createBlock, withCtx, createVNode, createElementVNode, createElementBlock, toDisplayString, Fragment, renderList, normalizeStyle, createTextVNode, createCommentVNode } from 'vue';

var _hoisted_1 = { class: "wrapper" };
var _hoisted_2 = {
  key: 0,
  class: "column"
};
var _hoisted_3 = { class: "title" };
var _hoisted_4 = { class: "palette" };
var _hoisted_5 = ["data-active", "onClick"];
var _hoisted_6 = {
  key: 1,
  class: "column"
};
var _hoisted_7 = { class: "title" };
var _hoisted_8 = { class: "palette" };
var _hoisted_9 = ["data-active", "onClick"];
var _hoisted_10 = {
  key: 2,
  class: "column"
};
var _hoisted_11 = { class: "title" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_text_format = resolveComponent("i-material-text-format");
  var _component_i_material_arrow_drop_down = resolveComponent("i-material-arrow-drop-down");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_i_material_format_color_reset = resolveComponent("i-material-format-color-reset");
  var _component_bt_button = resolveComponent("bt-button");
  var _component_bt_dropdown = resolveComponent("bt-dropdown");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return (_ctx.editor)
    ? withDirectives((openBlock(), createBlock(_component_bt_button, {
        key: 0,
        disabled: !_ctx.enabled,
        class: "bt-form-tiptap-color toolbar-button"
      }, {
        toggle: withCtx(function (ref) {
          var close = ref.close;

          return [
          createVNode(_component_bt_dropdown, { class: "bt-form-tiptap-color-dropdown" }, {
            default: withCtx(function () { return [
              createElementVNode("div", _hoisted_1, [
                (_ctx.hasTextColorsPalettes)
                  ? (openBlock(), createElementBlock("div", _hoisted_2, [
                      createElementVNode("span", _hoisted_3, toDisplayString(_ctx.i18n.textColorTitle), 1 /* TEXT */),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.textColorsPalettes, function (palette) {
                        return (openBlock(), createElementBlock("div", _hoisted_4, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(palette, function (color) {
                            return (openBlock(), createElementBlock("a", {
                              class: "color",
                              "data-active": _ctx.editor.isActive('textStyle', {color: color}) ? '' : null,
                              style: normalizeStyle({backgroundColor: color}),
                              onClick: function ($event) {_ctx.setColor(color); close();}
                            }, null, 12 /* STYLE, PROPS */, _hoisted_5))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ]))
                      }), 256 /* UNKEYED_FRAGMENT */)),
                      createVNode(_component_bt_button, {
                        variant: _ctx.variants.resetColorButton,
                        onClick: function ($event) {_ctx.unsetColor(); close();}
                      }, {
                        default: withCtx(function () { return [
                          createVNode(_component_i_material_format_color_reset, { crop: "" }),
                          createTextVNode(" " + toDisplayString(_ctx.i18n.textColorReset), 1 /* TEXT */)
                        ]; }),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "onClick"])
                    ]))
                  : createCommentVNode("v-if", true),
                (_ctx.hasBackgroundColorsPalettes)
                  ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      createElementVNode("span", _hoisted_7, toDisplayString(_ctx.i18n.backgroundColorTitle), 1 /* TEXT */),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.backgroundColorsPalettes, function (palette) {
                        return (openBlock(), createElementBlock("div", _hoisted_8, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(palette, function (color) {
                            return (openBlock(), createElementBlock("a", {
                              class: "color",
                              "data-active": _ctx.editor.isActive('highlight', {color: color}) ? '' : null,
                              style: normalizeStyle({backgroundColor: color}),
                              onClick: function ($event) {_ctx.setHighlight(color); close();}
                            }, null, 12 /* STYLE, PROPS */, _hoisted_9))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ]))
                      }), 256 /* UNKEYED_FRAGMENT */)),
                      createVNode(_component_bt_button, {
                        variant: _ctx.variants.resetBackgroundButton,
                        onClick: function ($event) {_ctx.unsetHighlight(); close();}
                      }, {
                        default: withCtx(function () { return [
                          createVNode(_component_i_material_format_color_reset, { crop: "" }),
                          createTextVNode(" " + toDisplayString(_ctx.i18n.backgroundColorReset), 1 /* TEXT */)
                        ]; }),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "onClick"])
                    ]))
                  : createCommentVNode("v-if", true),
                (!_ctx.hasTextColorsPalettes && !_ctx.hasBackgroundColorsPalettes)
                  ? (openBlock(), createElementBlock("div", _hoisted_10, [
                      createElementVNode("span", _hoisted_11, toDisplayString(_ctx.i18n.emptyTitle), 1 /* TEXT */)
                    ]))
                  : createCommentVNode("v-if", true)
              ])
            ]; }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)
        ];
  }),
        default: withCtx(function () { return [
          createVNode(_component_i_material_text_format, { crop: "" }),
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
      }, 8 /* PROPS */, ["disabled"])), [
        [_directive_bt_bind_theme]
      ])
    : createCommentVNode("v-if", true)
}

export { render };

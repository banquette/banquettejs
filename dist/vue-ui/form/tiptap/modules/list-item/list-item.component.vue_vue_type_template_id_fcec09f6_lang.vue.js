/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_format_list_bulleted = resolveComponent("i-material-format-list-bulleted");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_bt_button = resolveComponent("bt-button");
  var _component_i_material_format_list_numbered = resolveComponent("i-material-format-list-numbered");
  var _component_i_material_format_indent_increase = resolveComponent("i-material-format-indent-increase");
  var _component_i_material_format_indent_decrease = resolveComponent("i-material-format-indent-decrease");

  return (openBlock(), createElementBlock(Fragment, null, [
    (_ctx.editor && _ctx.showListBulleted)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 0,
          class: "toolbar-button",
          onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.toggleBulletedList()); }),
          "data-active": _ctx.editor.isActive('bulletList') ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_list_bulleted, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.listBulletedPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.listBulletedPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.showListNumbered)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 1,
          class: "toolbar-button",
          onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggleNumberedList()); }),
          "data-active": _ctx.editor.isActive('orderedList') ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_list_numbered, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.listNumberedPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.listNumberedPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.showIdent)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 2,
          class: "toolbar-button",
          onClick: _cache[2] || (_cache[2] = function ($event) { return (_ctx.increaseIndent()); }),
          disabled: !_ctx.editor.can().sinkListItem('listItem')
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_indent_increase, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.indentIncreasePopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.indentIncreasePopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.showIdent)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 3,
          class: "toolbar-button",
          onClick: _cache[3] || (_cache[3] = function ($event) { return (_ctx.decreaseIndent()); }),
          disabled: !_ctx.editor.can().liftListItem('listItem')
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_indent_decrease, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.indentDecreasePopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.indentDecreasePopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"]))
      : createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

export { render };

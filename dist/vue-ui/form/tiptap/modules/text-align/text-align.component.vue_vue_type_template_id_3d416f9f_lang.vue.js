/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_format_align_left = resolveComponent("i-material-format-align-left");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_bt_button = resolveComponent("bt-button");
  var _component_i_material_format_align_center = resolveComponent("i-material-format-align-center");
  var _component_i_material_format_align_right = resolveComponent("i-material-format-align-right");
  var _component_i_material_format_align_justify = resolveComponent("i-material-format-align-justify");

  return (openBlock(), createElementBlock(Fragment, null, [
    (_ctx.editor && _ctx.alignLeft)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 0,
          class: "toolbar-button",
          onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.toggle('left')); }),
          "data-active": _ctx.editor.isActive({textAlign: 'left'}) ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_align_left, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.alignLeftPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.alignLeftPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.alignCenter)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 1,
          class: "toolbar-button",
          onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggle('center')); }),
          "data-active": _ctx.editor.isActive({textAlign: 'center'}) ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_align_center, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.alignCenterPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.alignCenterPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.alignRight)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 2,
          class: "toolbar-button",
          onClick: _cache[2] || (_cache[2] = function ($event) { return (_ctx.toggle('right')); }),
          "data-active": _ctx.editor.isActive({textAlign: 'right'}) ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_align_right, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.alignRightPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.alignRightPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.alignJustify)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 3,
          class: "toolbar-button",
          onClick: _cache[3] || (_cache[3] = function ($event) { return (_ctx.toggle('justify')); }),
          "data-active": _ctx.editor.isActive({textAlign: 'justify'}) ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_format_align_justify, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.alignJustifyPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.alignJustifyPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data-active"]))
      : createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

export { render };

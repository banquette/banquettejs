/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_undo = resolveComponent("i-material-undo");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_bt_button = resolveComponent("bt-button");
  var _component_i_material_redo = resolveComponent("i-material-redo");

  return (openBlock(), createElementBlock(Fragment, null, [
    (_ctx.editor && _ctx.configuration.showUndo)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 0,
          class: "toolbar-button",
          onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.undo()); }),
          disabled: !_ctx.editor.can().undo()
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_undo, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.undoPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.undoPopover), 1 /* TEXT */)
                  ]; }),
                  _: 1 /* STABLE */
                }))
              : createCommentVNode("v-if", true)
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"]))
      : createCommentVNode("v-if", true),
    (_ctx.editor && _ctx.configuration.showRedo)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 1,
          class: "toolbar-button",
          onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.redo()); }),
          disabled: !_ctx.editor.can().redo()
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_redo, {
              size: null,
              width: "1em",
              crop: ""
            }),
            (_ctx.i18n.redoPopover)
              ? (openBlock(), createBlock(_component_bt_popover, {
                  key: 0,
                  "show-delay": 500,
                  "hide-delay": 0
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.redoPopover), 1 /* TEXT */)
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

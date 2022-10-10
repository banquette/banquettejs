/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_format_clear = resolveComponent("i-material-format-clear");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_bt_button = resolveComponent("bt-button");

  return (openBlock(), createBlock(_component_bt_button, {
    class: "toolbar-button",
    onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.clearFormatting()); }),
    disabled: !_ctx.enabled
  }, {
    default: withCtx(function () { return [
      createVNode(_component_i_material_format_clear, {
        width: "1em",
        crop: ""
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
}

export { render };

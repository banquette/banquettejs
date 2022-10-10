/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createBlock, mergeProps, withCtx, renderSlot } from 'vue';

var _hoisted_1 = { style: {"position":"relative"} };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_popover = resolveComponent("bt-popover");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode("\n-- \"position: relative\" here to workaround a bug with PopperJS that appears with `bt-form-select`.\n-- When PopperJS calculates the size of the \"offset parent\" (the parent element of the one floating that the position will be relative to),\n-- there is a slight difference (less than 1px) between the height returned by `getBoundingClientRect()` and the one from `offsetHeight`.\n-- This should normally only happen if the element is scaled, but it does when the root element of `bt-form-select`.\n-- Popper then adjust the position of the dropdown incorrectly.\n--\n-- The workaround here is to force the offset parent to be in the dropdown component, on a div with no style whatsoever\n-- so there is less risk to have a height difference.\n--\n-- This issue still needs to be investigated properly to understand the height difference on the `bt-form-select`.\n"),
    withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
      createCommentVNode(" :visible is always `true` but only act as a default value because if the user define a value for the \"visible\" prop, it will be in `$attrs` and override the value. "),
      createCommentVNode(" Also, defining the \"visible\" prop disable the default behavior of the popover, based on mouse events. "),
      (_ctx.realTarget !== null)
        ? (openBlock(), createBlock(_component_bt_popover, mergeProps({
            key: 0,
            class: "bt-dropdown",
            visible: true,
            target: _ctx.realTarget,
            placement: "bottom",
            interactive: ""
          }, _ctx.$attrs), {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "default")
            ]; }),
            _: 3 /* FORWARDED */
          }, 16 /* FULL_PROPS */, ["target"]))
        : createCommentVNode("v-if", true)
    ])), [
      [_directive_bt_bind_theme]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

export { render };

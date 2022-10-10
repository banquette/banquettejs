/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, createBlock, resolveDynamicComponent, withModifiers, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, createCommentVNode, Transition } from 'vue';

var _hoisted_1 = ["data-is-disabled", "data-is-working"];
var _hoisted_2 = {
  key: 0,
  class: "working-text"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = resolveComponent("bt-progress-circular");
  var _directive_bt_click_outside = resolveDirective("bt-click-outside");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: "bt-button",
    "data-is-disabled": _ctx.disabled ? '' : null,
    "data-is-working": _ctx.working ? '' : null
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.tagName), {
      ref: "root",
      href: _ctx.href,
      target: _ctx.target,
      tabindex: !_ctx.disabled ? 0 : null,
      class: "inner",
      disabled: _ctx.disabled ? '' : null,
      "data-active": _ctx.active ? '' : null,
      "data-toggle-visible": _ctx.isToggleSlotVisible ? '' : null,
      onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.onClick($event)); }, ["stop"])),
      onMousedown: _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggle($event)); }),
      onFocus: _cache[2] || (_cache[2] = function ($event) { return (_ctx.onFocus()); }),
      onBlur: _cache[3] || (_cache[3] = function ($event) { return (_ctx.onBlur()); })
    }, {
      default: withCtx(function () { return [
        (_ctx.working)
          ? renderSlot(_ctx.$slots, "working", { key: 0 }, function () { return [
              createVNode(_component_bt_progress_circular, { progress: _ctx.workingProgress }, null, 8 /* PROPS */, ["progress"]),
              (_ctx.isWorkingTextSlotVisible)
                ? (openBlock(), createElementBlock("span", _hoisted_2, [
                    renderSlot(_ctx.$slots, "working-text", {}, function () { return [
                      createTextVNode(toDisplayString(_ctx.workingText), 1 /* TEXT */)
                    ]; })
                  ]))
                : createCommentVNode("v-if", true)
            ]; })
          : renderSlot(_ctx.$slots, "default", {
              key: 1,
              toggle: _ctx.toggle
            })
      ]; }),
      _: 3 /* FORWARDED */
    }, 40 /* PROPS, HYDRATE_EVENTS */, ["href", "target", "tabindex", "disabled", "data-active", "data-toggle-visible"])),
    createCommentVNode(" Slot is shown conditionally and can be controlled via a prop or via the \"toggle()\" method "),
    createCommentVNode(" The main use of this slot is for dropdown actions "),
    createVNode(Transition, {
      name: _ctx.toggleTransition !== false ? _ctx.toggleTransition : undefined,
      css: _ctx.toggleTransition !== false
    }, {
      default: withCtx(function () { return [
        (_ctx.isToggleSlotVisible)
          ? renderSlot(_ctx.$slots, "toggle", {
              key: 0,
              close: _ctx.hideToggle
            })
          : createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["name", "css"])
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_click_outside, {eventType: 'mousedown', callback: _ctx.hideToggle, enabled: _ctx.isToggleSlotVisible}],
    [_directive_bt_bind_theme]
  ])
}

export { render };

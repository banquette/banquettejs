/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["data-is-disabled", "data-is-working"];
var _hoisted_2 = {
  key: 0,
  class: "working-text"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");
  var _directive_bt_click_outside = vue.resolveDirective("bt-click-outside");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-button",
    "data-is-disabled": _ctx.disabled ? '' : null,
    "data-is-working": _ctx.working ? '' : null
  }, [
    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tagName), {
      ref: "root",
      href: _ctx.href,
      target: _ctx.target,
      tabindex: !_ctx.disabled ? 0 : null,
      class: "inner",
      disabled: _ctx.disabled ? '' : null,
      "data-active": _ctx.active ? '' : null,
      "data-toggle-visible": _ctx.isToggleSlotVisible ? '' : null,
      onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.onClick($event)); }, ["stop"])),
      onMousedown: _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggle($event)); }),
      onFocus: _cache[2] || (_cache[2] = function ($event) { return (_ctx.onFocus()); }),
      onBlur: _cache[3] || (_cache[3] = function ($event) { return (_ctx.onBlur()); })
    }, {
      default: vue.withCtx(function () { return [
        (_ctx.working)
          ? vue.renderSlot(_ctx.$slots, "working", { key: 0 }, function () { return [
              vue.createVNode(_component_bt_progress_circular, { progress: _ctx.workingProgress }, null, 8 /* PROPS */, ["progress"]),
              (_ctx.isWorkingTextSlotVisible)
                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
                    vue.renderSlot(_ctx.$slots, "working-text", {}, function () { return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.workingText), 1 /* TEXT */)
                    ]; })
                  ]))
                : vue.createCommentVNode("v-if", true)
            ]; })
          : vue.renderSlot(_ctx.$slots, "default", {
              key: 1,
              toggle: _ctx.toggle
            })
      ]; }),
      _: 3 /* FORWARDED */
    }, 40 /* PROPS, HYDRATE_EVENTS */, ["href", "target", "tabindex", "disabled", "data-active", "data-toggle-visible"])),
    vue.createCommentVNode(" Slot is shown conditionally and can be controlled via a prop or via the \"toggle()\" method "),
    vue.createCommentVNode(" The main use of this slot is for dropdown actions "),
    vue.createVNode(vue.Transition, {
      name: _ctx.toggleTransition !== false ? _ctx.toggleTransition : undefined,
      css: _ctx.toggleTransition !== false
    }, {
      default: vue.withCtx(function () { return [
        (_ctx.isToggleSlotVisible)
          ? vue.renderSlot(_ctx.$slots, "toggle", {
              key: 0,
              close: _ctx.hideToggle
            })
          : vue.createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["name", "css"])
  ], 8 /* PROPS */, _hoisted_1)), [
    [_directive_bt_click_outside, {eventType: 'mousedown', callback: _ctx.hideToggle, enabled: _ctx.isToggleSlotVisible}],
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

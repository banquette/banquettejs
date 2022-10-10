/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "inner-wrapper" };
var _hoisted_2 = {
  key: 0,
  role: "tooltip",
  class: "content"
};
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = {
  key: 1,
  class: "arrow",
  "data-popper-arrow": ""
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_teleport = vue.resolveComponent("bt-teleport");
  var _component_bt_client_only = vue.resolveComponent("bt-client-only");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");
  var _directive_bt_stick_to = vue.resolveDirective("bt-stick-to");

  return (vue.openBlock(), vue.createBlock(_component_bt_client_only, null, {
    default: vue.withCtx(function () { return [
      vue.createCommentVNode("\n    \"bt-teleport\" is used to workaround the issue #6347 where directives inside a teleport are not unmounted properly.\n    @see https://github.com/vuejs/core/issues/6347\n    "),
      vue.createVNode(_component_bt_teleport, {
        to: _ctx.teleportTarget,
        disabled: !_ctx.teleportTarget
      }, {
        default: vue.withCtx(function () { return [
          vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
            ref: "popover",
            class: "bt-popover",
            style: _ctx.styles
          }, _ctx.$attrs), [
            vue.createVNode(vue.Transition, {
              name: _ctx.transition !== false ? _ctx.transition : undefined,
              css: _ctx.transition !== false,
              onAfterLeave: _cache[0] || (_cache[0] = function ($event) { return (_ctx.onAfterLeave()); }),
              onEnter: _cache[1] || (_cache[1] = function ($event) { return (_ctx.onEnter()); }),
              onAfterEnter: _cache[2] || (_cache[2] = function ($event) { return (_ctx.updated()); }),
              persisted: ""
            }, {
              default: vue.withCtx(function () { return [
                vue.withDirectives(vue.createElementVNode("div", _hoisted_1, [
                  (_ctx.renderHidden || _ctx.isVisible || _ctx.shouldRender)
                    ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                        (!_ctx.config.allowHtml || _ctx.hasNonEmptySlot('default'))
                          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                              (_ctx.hasNonEmptySlot('default'))
                                ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
                                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                                    vue.createTextVNode(vue.toDisplayString(_ctx.config.content), 1 /* TEXT */)
                                  ], 64 /* STABLE_FRAGMENT */))
                            ]))
                          : (vue.openBlock(), vue.createElementBlock("div", {
                              key: 1,
                              role: "tooltip",
                              class: "content",
                              innerHTML: _ctx.config.content
                            }, null, 8 /* PROPS */, _hoisted_3))
                      ], 64 /* STABLE_FRAGMENT */))
                    : vue.createCommentVNode("v-if", true),
                  (_ctx.config.showArrow)
                    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4))
                    : vue.createCommentVNode("v-if", true)
                ], 512 /* NEED_PATCH */), [
                  [vue.vShow, _ctx.isVisible]
                ])
              ]; }),
              _: 3 /* FORWARDED */
            }, 8 /* PROPS */, ["name", "css"])
          ], 16 /* FULL_PROPS */)), [
            [_directive_bt_bind_theme],
            [_directive_bt_stick_to, _ctx.config.stickToOptions]
          ])
        ]; }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["to", "disabled"])
    ]; }),
    _: 3 /* FORWARDED */
  }))
}

exports.render = render;

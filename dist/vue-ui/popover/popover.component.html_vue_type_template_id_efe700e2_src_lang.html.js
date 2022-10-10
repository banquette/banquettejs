/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, createCommentVNode, createVNode, withDirectives, createElementBlock, mergeProps, Transition, createElementVNode, Fragment, renderSlot, createTextVNode, toDisplayString, vShow } from 'vue';

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
  var _component_bt_teleport = resolveComponent("bt-teleport");
  var _component_bt_client_only = resolveComponent("bt-client-only");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");
  var _directive_bt_stick_to = resolveDirective("bt-stick-to");

  return (openBlock(), createBlock(_component_bt_client_only, null, {
    default: withCtx(function () { return [
      createCommentVNode("\n    \"bt-teleport\" is used to workaround the issue #6347 where directives inside a teleport are not unmounted properly.\n    @see https://github.com/vuejs/core/issues/6347\n    "),
      createVNode(_component_bt_teleport, {
        to: _ctx.teleportTarget,
        disabled: !_ctx.teleportTarget
      }, {
        default: withCtx(function () { return [
          withDirectives((openBlock(), createElementBlock("div", mergeProps({
            ref: "popover",
            class: "bt-popover",
            style: _ctx.styles
          }, _ctx.$attrs), [
            createVNode(Transition, {
              name: _ctx.transition !== false ? _ctx.transition : undefined,
              css: _ctx.transition !== false,
              onAfterLeave: _cache[0] || (_cache[0] = function ($event) { return (_ctx.onAfterLeave()); }),
              onEnter: _cache[1] || (_cache[1] = function ($event) { return (_ctx.onEnter()); }),
              onAfterEnter: _cache[2] || (_cache[2] = function ($event) { return (_ctx.updated()); }),
              persisted: ""
            }, {
              default: withCtx(function () { return [
                withDirectives(createElementVNode("div", _hoisted_1, [
                  (_ctx.renderHidden || _ctx.isVisible || _ctx.shouldRender)
                    ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        (!_ctx.config.allowHtml || _ctx.hasNonEmptySlot('default'))
                          ? (openBlock(), createElementBlock("div", _hoisted_2, [
                              (_ctx.hasNonEmptySlot('default'))
                                ? renderSlot(_ctx.$slots, "default", { key: 0 })
                                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(_ctx.config.content), 1 /* TEXT */)
                                  ], 64 /* STABLE_FRAGMENT */))
                            ]))
                          : (openBlock(), createElementBlock("div", {
                              key: 1,
                              role: "tooltip",
                              class: "content",
                              innerHTML: _ctx.config.content
                            }, null, 8 /* PROPS */, _hoisted_3))
                      ], 64 /* STABLE_FRAGMENT */))
                    : createCommentVNode("v-if", true),
                  (_ctx.config.showArrow)
                    ? (openBlock(), createElementBlock("div", _hoisted_4))
                    : createCommentVNode("v-if", true)
                ], 512 /* NEED_PATCH */), [
                  [vShow, _ctx.isVisible]
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

export { render };

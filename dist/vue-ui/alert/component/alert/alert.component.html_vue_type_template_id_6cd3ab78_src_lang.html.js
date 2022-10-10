/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createElementBlock, createCommentVNode, createElementVNode, renderSlot, Fragment, createTextVNode, toDisplayString, withModifiers, createVNode } from 'vue';

var _hoisted_1 = ["data-is-closable"];
var _hoisted_2 = { class: "body" };
var _hoisted_3 = {
  key: 0,
  class: "title"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = { class: "message" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_icon = resolveComponent("bt-icon");
  var _component_i_material_close = resolveComponent("i-material-close");
  var _component_bt_progress_horizontal = resolveComponent("bt-progress-horizontal");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return (openBlock(), createBlock(Transition, {
    name: _ctx.transition !== false ? _ctx.transition : undefined,
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: withCtx(function () { return [
      (_ctx.isVisible)
        ? withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: "bt-alert",
            "data-is-closable": _ctx.closable ? '' : null
          }, [
            (!!_ctx.icon)
              ? (openBlock(), createBlock(_component_bt_icon, {
                  key: 0,
                  name: _ctx.icon,
                  set: _ctx.iconSet
                }, null, 8 /* PROPS */, ["name", "set"]))
              : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_2, [
              (_ctx.hasSlot('title') || _ctx.title)
                ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    renderSlot(_ctx.$slots, "title", { close: _ctx.close }, function () { return [
                      (_ctx.allowHtml)
                        ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            innerHTML: _ctx.title
                          }, null, 8 /* PROPS */, _hoisted_4))
                        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
                          ], 64 /* STABLE_FRAGMENT */))
                    ]; })
                  ]))
                : createCommentVNode("v-if", true),
              createElementVNode("span", _hoisted_5, [
                renderSlot(_ctx.$slots, "default", { close: _ctx.close }),
                (_ctx.closable)
                  ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: "close-icon",
                      onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.close()); }, ["stop","prevent"]))
                    }, [
                      createVNode(_component_i_material_close)
                    ]))
                  : createCommentVNode("v-if", true)
              ]),
              (_ctx.ttl !== null)
                ? (openBlock(), createBlock(_component_bt_progress_horizontal, {
                    key: 1,
                    progress: _ctx.timeLeft,
                    "progress-max": _ctx.ttl,
                    "show-progress-text": false
                  }, null, 8 /* PROPS */, ["progress", "progress-max"]))
                : createCommentVNode("v-if", true)
            ])
          ], 8 /* PROPS */, _hoisted_1)), [
            [_directive_bt_bind_theme]
          ])
        : createCommentVNode("v-if", true)
    ]; }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["name", "onAfterLeave"]))
}

export { render };

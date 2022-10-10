/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["data-is-closable"];
var _hoisted_2 = { class: "body" };
var _hoisted_3 = {
  key: 0,
  class: "title"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = { class: "message" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_icon = vue.resolveComponent("bt-icon");
  var _component_i_material_close = vue.resolveComponent("i-material-close");
  var _component_bt_progress_horizontal = vue.resolveComponent("bt-progress-horizontal");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return (vue.openBlock(), vue.createBlock(vue.Transition, {
    name: _ctx.transition !== false ? _ctx.transition : undefined,
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: vue.withCtx(function () { return [
      (_ctx.isVisible)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "bt-alert",
            "data-is-closable": _ctx.closable ? '' : null
          }, [
            (!!_ctx.icon)
              ? (vue.openBlock(), vue.createBlock(_component_bt_icon, {
                  key: 0,
                  name: _ctx.icon,
                  set: _ctx.iconSet
                }, null, 8 /* PROPS */, ["name", "set"]))
              : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_2, [
              (_ctx.hasSlot('title') || _ctx.title)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                    vue.renderSlot(_ctx.$slots, "title", { close: _ctx.close }, function () { return [
                      (_ctx.allowHtml)
                        ? (vue.openBlock(), vue.createElementBlock("span", {
                            key: 0,
                            innerHTML: _ctx.title
                          }, null, 8 /* PROPS */, _hoisted_4))
                        : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1 /* TEXT */)
                          ], 64 /* STABLE_FRAGMENT */))
                    ]; })
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("span", _hoisted_5, [
                vue.renderSlot(_ctx.$slots, "default", { close: _ctx.close }),
                (_ctx.closable)
                  ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      class: "close-icon",
                      onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.close()); }, ["stop","prevent"]))
                    }, [
                      vue.createVNode(_component_i_material_close)
                    ]))
                  : vue.createCommentVNode("v-if", true)
              ]),
              (_ctx.ttl !== null)
                ? (vue.openBlock(), vue.createBlock(_component_bt_progress_horizontal, {
                    key: 1,
                    progress: _ctx.timeLeft,
                    "progress-max": _ctx.ttl,
                    "show-progress-text": false
                  }, null, 8 /* PROPS */, ["progress", "progress-max"]))
                : vue.createCommentVNode("v-if", true)
            ])
          ], 8 /* PROPS */, _hoisted_1)), [
            [_directive_bt_bind_theme]
          ])
        : vue.createCommentVNode("v-if", true)
    ]; }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["name", "onAfterLeave"]))
}

exports.render = render;

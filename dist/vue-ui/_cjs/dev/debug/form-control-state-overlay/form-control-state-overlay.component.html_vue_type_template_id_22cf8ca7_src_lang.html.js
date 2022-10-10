/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _withScopeId = function (n) { return (vue.pushScopeId("data-v-22cf8ca7"),n=n(),vue.popScopeId(),n); };
var _hoisted_1 = { class: "type" };
var _hoisted_2 = { class: "item" };
var _hoisted_3 = /*#__PURE__*/ _withScopeId(function () { return vue.createElementVNode("div", { class: "bullet" }, null, -1 /* HOISTED */); });
var _hoisted_4 = { class: "name" };
var _hoisted_5 = { class: "value" };
var _hoisted_6 = ["onClick"];
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = {
  key: 0,
  class: "full-value"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_bug_report = vue.resolveComponent("i-material-bug-report");
  var _directive_bt_popover = vue.resolveDirective("bt-popover");
  var _directive_bt_stick_to = vue.resolveDirective("bt-stick-to");

  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
      ref: "target",
      class: "bt-form-control-state-overlay",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.toggle()); }, ["stop","prevent"])),
      onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(function () {}, ["prevent"]))
    }, [
      vue.createVNode(_component_i_material_bug_report)
    ], 32 /* HYDRATE_EVENTS */)), [
      [_directive_bt_popover, {showDelay: 500, content: 'Show view data'}]
    ]),
    (_ctx.visible)
      ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
          key: 0,
          to: "body"
        }, [
          vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
            class: "overlay",
            onClick: _cache[3] || (_cache[3] = vue.withModifiers(function () {}, ["stop"])),
            onMousedown: _cache[4] || (_cache[4] = vue.withModifiers(function () {}, ["prevent"]))
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.groups, function (group) {
              return (vue.openBlock(), vue.createElementBlock("div", null, [
                vue.createElementVNode("div", _hoisted_1, vue.toDisplayString(group.name), 1 /* TEXT */),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(group.values, function (value) {
                  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(["resume", {'true': value.isBoolean && value.rawValue, 'false': value.isBoolean && !value.rawValue}])
                    }, [
                      _hoisted_3,
                      vue.createElementVNode("div", _hoisted_4, vue.toDisplayString(value.name), 1 /* TEXT */),
                      vue.createElementVNode("div", _hoisted_5, vue.toDisplayString(value.shortValue), 1 /* TEXT */),
                      (value.fullValue)
                        ? (vue.openBlock(), vue.createElementBlock("a", {
                            key: 0,
                            href: "",
                            onClick: vue.withModifiers(function ($event) { return (_ctx.toggleValueDetail(value)); }, ["prevent"])
                          }, [
                            vue.createTextVNode(" ("),
                            (value.fullValueVisible)
                              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, "Less"))
                              : (vue.openBlock(), vue.createElementBlock("span", _hoisted_8, "More")),
                            vue.createTextVNode(") ")
                          ], 8 /* PROPS */, _hoisted_6))
                        : vue.createCommentVNode("v-if", true)
                    ], 2 /* CLASS */),
                    (value.fullValue && value.fullValueVisible)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, vue.toDisplayString(value.fullValue), 1 /* TEXT */))
                      : vue.createCommentVNode("v-if", true)
                  ]))
                }), 256 /* UNKEYED_FRAGMENT */))
              ]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            vue.createElementVNode("a", {
              href: "",
              class: "close-link",
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(function ($event) { return (_ctx.hide()); }, ["prevent"]))
            }, "Close")
          ], 32 /* HYDRATE_EVENTS */)), [
            [_directive_bt_stick_to, _ctx.overlayOptions]
          ])
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}

exports.render = render;

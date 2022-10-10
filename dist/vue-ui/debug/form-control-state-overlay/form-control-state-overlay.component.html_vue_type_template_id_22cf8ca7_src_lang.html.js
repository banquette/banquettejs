/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createElementBlock, withDirectives, withModifiers, createVNode, createBlock, Teleport, Fragment, renderList, createElementVNode, toDisplayString, normalizeClass, createTextVNode, createCommentVNode, pushScopeId, popScopeId } from 'vue';

var _withScopeId = function (n) { return (pushScopeId("data-v-22cf8ca7"),n=n(),popScopeId(),n); };
var _hoisted_1 = { class: "type" };
var _hoisted_2 = { class: "item" };
var _hoisted_3 = /*#__PURE__*/ _withScopeId(function () { return createElementVNode("div", { class: "bullet" }, null, -1 /* HOISTED */); });
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
  var _component_i_material_bug_report = resolveComponent("i-material-bug-report");
  var _directive_bt_popover = resolveDirective("bt-popover");
  var _directive_bt_stick_to = resolveDirective("bt-stick-to");

  return (openBlock(), createElementBlock("div", null, [
    withDirectives((openBlock(), createElementBlock("div", {
      ref: "target",
      class: "bt-form-control-state-overlay",
      onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.toggle()); }, ["stop","prevent"])),
      onMousedown: _cache[1] || (_cache[1] = withModifiers(function () {}, ["prevent"]))
    }, [
      createVNode(_component_i_material_bug_report)
    ], 32 /* HYDRATE_EVENTS */)), [
      [_directive_bt_popover, {showDelay: 500, content: 'Show view data'}]
    ]),
    (_ctx.visible)
      ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: "body"
        }, [
          withDirectives((openBlock(), createElementBlock("div", {
            class: "overlay",
            onClick: _cache[3] || (_cache[3] = withModifiers(function () {}, ["stop"])),
            onMousedown: _cache[4] || (_cache[4] = withModifiers(function () {}, ["prevent"]))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.groups, function (group) {
              return (openBlock(), createElementBlock("div", null, [
                createElementVNode("div", _hoisted_1, toDisplayString(group.name), 1 /* TEXT */),
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.values, function (value) {
                  return (openBlock(), createElementBlock("div", _hoisted_2, [
                    createElementVNode("div", {
                      class: normalizeClass(["resume", {'true': value.isBoolean && value.rawValue, 'false': value.isBoolean && !value.rawValue}])
                    }, [
                      _hoisted_3,
                      createElementVNode("div", _hoisted_4, toDisplayString(value.name), 1 /* TEXT */),
                      createElementVNode("div", _hoisted_5, toDisplayString(value.shortValue), 1 /* TEXT */),
                      (value.fullValue)
                        ? (openBlock(), createElementBlock("a", {
                            key: 0,
                            href: "",
                            onClick: withModifiers(function ($event) { return (_ctx.toggleValueDetail(value)); }, ["prevent"])
                          }, [
                            createTextVNode(" ("),
                            (value.fullValueVisible)
                              ? (openBlock(), createElementBlock("span", _hoisted_7, "Less"))
                              : (openBlock(), createElementBlock("span", _hoisted_8, "More")),
                            createTextVNode(") ")
                          ], 8 /* PROPS */, _hoisted_6))
                        : createCommentVNode("v-if", true)
                    ], 2 /* CLASS */),
                    (value.fullValue && value.fullValueVisible)
                      ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(value.fullValue), 1 /* TEXT */))
                      : createCommentVNode("v-if", true)
                  ]))
                }), 256 /* UNKEYED_FRAGMENT */))
              ]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            createElementVNode("a", {
              href: "",
              class: "close-link",
              onClick: _cache[2] || (_cache[2] = withModifiers(function ($event) { return (_ctx.hide()); }, ["prevent"]))
            }, "Close")
          ], 32 /* HYDRATE_EVENTS */)), [
            [_directive_bt_stick_to, _ctx.overlayOptions]
          ])
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

export { render };

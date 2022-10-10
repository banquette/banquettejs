/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-form-tiptap" };
var _hoisted_2 = {
  key: 0,
  class: "inner-wrapper"
};
var _hoisted_3 = { class: "toolbar" };
var _hoisted_4 = { class: "item-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_editor_content = vue.resolveComponent("editor-content");
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      label: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      default: vue.withCtx(function () { return [
        (_ctx.innerConfiguration)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.innerConfiguration.toolbars, function (toolbar) {
                return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                  class: "toolbars",
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers(function () {}, ["stop","prevent"]))
                }, [
                  vue.createElementVNode("div", _hoisted_3, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(toolbar, function (component) {
                      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(component), {
                          configuration: _ctx.innerConfiguration.modules[component] ? _ctx.innerConfiguration.modules[component].configuration : {}
                        }, null, 8 /* PROPS */, ["configuration"]))
                      ]))
                    }), 256 /* UNKEYED_FRAGMENT */))
                  ])
                ], 512 /* NEED_PATCH */)), [
                  [vue.vShow, _ctx.editor]
                ])
              }), 256 /* UNKEYED_FRAGMENT */)),
              (_ctx.editor)
                ? (vue.openBlock(), vue.createBlock(_component_editor_content, {
                    key: 0,
                    editor: _ctx.editor,
                    class: "editor-content"
                  }, null, 8 /* PROPS */, ["editor"]))
                : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.innerConfiguration.modules, function (module, component) {
                return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  (!module.inToolbar)
                    ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(component), {
                        key: 0,
                        configuration: module.configuration
                      }, null, 8 /* PROPS */, ["configuration"]))
                    : vue.createCommentVNode("v-if", true)
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */))
            ]))
          : vue.createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, createVNode, withCtx, renderSlot, Fragment, renderList, withModifiers, createElementVNode, createBlock, resolveDynamicComponent, vShow, createCommentVNode } from 'vue';

var _hoisted_1 = { class: "bt-form-tiptap" };
var _hoisted_2 = {
  key: 0,
  class: "inner-wrapper"
};
var _hoisted_3 = { class: "toolbar" };
var _hoisted_4 = { class: "item-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_editor_content = resolveComponent("editor-content");
  var _component_bt_form_base_input = resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      label: withCtx(function () { return [
        renderSlot(_ctx.$slots, "default")
      ]; }),
      help: withCtx(function () { return [
        renderSlot(_ctx.$slots, "help")
      ]; }),
      default: withCtx(function () { return [
        (_ctx.innerConfiguration)
          ? (openBlock(), createElementBlock("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.innerConfiguration.toolbars, function (toolbar) {
                return withDirectives((openBlock(), createElementBlock("div", {
                  class: "toolbars",
                  onClick: _cache[0] || (_cache[0] = withModifiers(function () {}, ["stop","prevent"]))
                }, [
                  createElementVNode("div", _hoisted_3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(toolbar, function (component) {
                      return (openBlock(), createElementBlock("div", _hoisted_4, [
                        (openBlock(), createBlock(resolveDynamicComponent(component), {
                          configuration: _ctx.innerConfiguration.modules[component] ? _ctx.innerConfiguration.modules[component].configuration : {}
                        }, null, 8 /* PROPS */, ["configuration"]))
                      ]))
                    }), 256 /* UNKEYED_FRAGMENT */))
                  ])
                ], 512 /* NEED_PATCH */)), [
                  [vShow, _ctx.editor]
                ])
              }), 256 /* UNKEYED_FRAGMENT */)),
              (_ctx.editor)
                ? (openBlock(), createBlock(_component_editor_content, {
                    key: 0,
                    editor: _ctx.editor,
                    class: "editor-content"
                  }, null, 8 /* PROPS */, ["editor"]))
                : createCommentVNode("v-if", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.innerConfiguration.modules, function (module, component) {
                return (openBlock(), createElementBlock(Fragment, null, [
                  (!module.inToolbar)
                    ? (openBlock(), createBlock(resolveDynamicComponent(component), {
                        key: 0,
                        configuration: module.configuration
                      }, null, 8 /* PROPS */, ["configuration"]))
                    : createCommentVNode("v-if", true)
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */))
            ]))
          : createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ])), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

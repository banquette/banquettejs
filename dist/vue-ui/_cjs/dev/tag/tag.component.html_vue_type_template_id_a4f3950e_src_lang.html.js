/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_close = vue.resolveComponent("i-material-close");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tagName), {
    href: _ctx.href,
    target: _ctx.target,
    class: "bt-tag",
    "data-interactive": _ctx.href !== null ? '' : null,
    "data-closable": _ctx.closable ? '' : null
  }, {
    default: vue.withCtx(function () { return [
      vue.renderSlot(_ctx.$slots, "default"),
      (_ctx.closable)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "close-icon",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.close()); }, ["stop","prevent"]))
          }, [
            vue.createVNode(_component_i_material_close)
          ]))
        : vue.createCommentVNode("v-if", true)
    ]; }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["href", "target", "data-interactive", "data-closable"])), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

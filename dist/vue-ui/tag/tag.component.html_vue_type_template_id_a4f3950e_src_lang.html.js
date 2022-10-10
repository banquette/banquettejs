/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, withDirectives, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot, createElementBlock, withModifiers, createVNode, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_close = resolveComponent("i-material-close");
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.tagName), {
    href: _ctx.href,
    target: _ctx.target,
    class: "bt-tag",
    "data-interactive": _ctx.href !== null ? '' : null,
    "data-closable": _ctx.closable ? '' : null
  }, {
    default: withCtx(function () { return [
      renderSlot(_ctx.$slots, "default"),
      (_ctx.closable)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "close-icon",
            onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.close()); }, ["stop","prevent"]))
          }, [
            createVNode(_component_i_material_close)
          ]))
        : createCommentVNode("v-if", true)
    ]; }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["href", "target", "data-interactive", "data-closable"])), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

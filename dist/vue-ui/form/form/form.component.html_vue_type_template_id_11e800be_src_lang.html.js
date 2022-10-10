/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { openBlock, createElementBlock, withModifiers, renderSlot, createCommentVNode } from 'vue';

var _hoisted_1 = {
  key: 6,
  type: "submit",
  style: {"display":"none"}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("form", {
    class: "bt-form",
    action: "",
    onSubmit: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.submitWithEnter && _ctx.submit()); }, ["prevent"])),
    novalidate: ""
  }, [
    (_ctx.v.loading)
      ? renderSlot(_ctx.$slots, "loading", { key: 0 })
      : createCommentVNode("v-if", true),
    (_ctx.v.persisting)
      ? renderSlot(_ctx.$slots, "persisting", { key: 1 })
      : createCommentVNode("v-if", true),
    (_ctx.v.loadError)
      ? renderSlot(_ctx.$slots, "load-error", {
          key: 2,
          v: _ctx.v,
          error: _ctx.v.errorsMap.load
        })
      : createCommentVNode("v-if", true),
    (_ctx.v.persistError)
      ? renderSlot(_ctx.$slots, "persist-error", {
          key: 3,
          v: _ctx.v,
          error: _ctx.v.errorsMap.persist
        })
      : createCommentVNode("v-if", true),
    (_ctx.v.persistSuccess)
      ? renderSlot(_ctx.$slots, "persist-success", {
          key: 4,
          v: _ctx.v
        })
      : createCommentVNode("v-if", true),
    createCommentVNode(" Main slot, that's where the form should be defined "),
    (_ctx.visible)
      ? renderSlot(_ctx.$slots, "default", {
          key: 5,
          v: _ctx.v,
          model: _ctx.v.model,
          control: _ctx.v.getControl,
          submit: _ctx.submit,
          errors: _ctx.v.errorsMap
        })
      : createCommentVNode("v-if", true),
    createCommentVNode(" This slot is only here to offer a way to organize the HTML markup. "),
    createCommentVNode(" This way the end-user can regroup all validators in it so the HTML is easier to read. "),
    createCommentVNode(" But validators can be put anywhere in the form, they don't have to be in here. "),
    renderSlot(_ctx.$slots, "validation"),
    (_ctx.submitWithEnter)
      ? (openBlock(), createElementBlock("input", _hoisted_1))
      : createCommentVNode("v-if", true)
  ], 32 /* HYDRATE_EVENTS */))
}

export { render };

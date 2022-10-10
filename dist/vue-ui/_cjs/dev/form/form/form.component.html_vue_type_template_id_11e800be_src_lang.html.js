/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = {
  key: 6,
  type: "submit",
  style: {"display":"none"}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("form", {
    class: "bt-form",
    action: "",
    onSubmit: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.submitWithEnter && _ctx.submit()); }, ["prevent"])),
    novalidate: ""
  }, [
    (_ctx.v.loading)
      ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 })
      : vue.createCommentVNode("v-if", true),
    (_ctx.v.persisting)
      ? vue.renderSlot(_ctx.$slots, "persisting", { key: 1 })
      : vue.createCommentVNode("v-if", true),
    (_ctx.v.loadError)
      ? vue.renderSlot(_ctx.$slots, "load-error", {
          key: 2,
          v: _ctx.v,
          error: _ctx.v.errorsMap.load
        })
      : vue.createCommentVNode("v-if", true),
    (_ctx.v.persistError)
      ? vue.renderSlot(_ctx.$slots, "persist-error", {
          key: 3,
          v: _ctx.v,
          error: _ctx.v.errorsMap.persist
        })
      : vue.createCommentVNode("v-if", true),
    (_ctx.v.persistSuccess)
      ? vue.renderSlot(_ctx.$slots, "persist-success", {
          key: 4,
          v: _ctx.v
        })
      : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode(" Main slot, that's where the form should be defined "),
    (_ctx.visible)
      ? vue.renderSlot(_ctx.$slots, "default", {
          key: 5,
          v: _ctx.v,
          model: _ctx.v.model,
          control: _ctx.v.getControl,
          submit: _ctx.submit,
          errors: _ctx.v.errorsMap
        })
      : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode(" This slot is only here to offer a way to organize the HTML markup. "),
    vue.createCommentVNode(" This way the end-user can regroup all validators in it so the HTML is easier to read. "),
    vue.createCommentVNode(" But validators can be put anywhere in the form, they don't have to be in here. "),
    vue.renderSlot(_ctx.$slots, "validation"),
    (_ctx.submitWithEnter)
      ? (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
      : vue.createCommentVNode("v-if", true)
  ], 32 /* HYDRATE_EVENTS */))
}

exports.render = render;

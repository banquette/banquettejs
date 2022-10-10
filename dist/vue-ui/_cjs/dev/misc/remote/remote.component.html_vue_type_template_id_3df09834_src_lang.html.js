/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { class: "bt-remote" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createCommentVNode(" This slot is shown when there is no valid remote configuration "),
    (_ctx.waiting)
      ? vue.renderSlot(_ctx.$slots, "waiting", {
          key: 0,
          bag: _ctx.bag
        })
      : (_ctx.fetching)
        ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createCommentVNode(" This slot is shown when the component is fetching remote data "),
            vue.renderSlot(_ctx.$slots, "fetching", {
              response: _ctx.response,
              bag: _ctx.bag
            }, function () { return [
              vue.createVNode(_component_bt_progress_circular)
            ]; })
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (_ctx.error)
          ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
              vue.createCommentVNode(" This slot is shown when the component failed to fetch remote data "),
              vue.renderSlot(_ctx.$slots, "error", {
                response: _ctx.response,
                bag: _ctx.bag
              }, function () { return [
                vue.createTextVNode(vue.toDisplayString(_ctx.response.error.message), 1 /* TEXT */)
              ]; })
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : (_ctx.ready)
            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
                vue.createCommentVNode(" The default slot is shown when remote data have been fetched successfully and are ready to consume "),
                vue.renderSlot(_ctx.$slots, "default", {
                  response: _ctx.response,
                  result: _ctx.response.result,
                  refresh: _ctx.update,
                  bag: _ctx.bag
                })
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
  ]))
}

exports.render = render;

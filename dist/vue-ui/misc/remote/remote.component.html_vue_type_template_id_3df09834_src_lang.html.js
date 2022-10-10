/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, createCommentVNode, renderSlot, Fragment, createVNode, createTextVNode, toDisplayString } from 'vue';

var _hoisted_1 = { class: "bt-remote" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = resolveComponent("bt-progress-circular");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" This slot is shown when there is no valid remote configuration "),
    (_ctx.waiting)
      ? renderSlot(_ctx.$slots, "waiting", {
          key: 0,
          bag: _ctx.bag
        })
      : (_ctx.fetching)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" This slot is shown when the component is fetching remote data "),
            renderSlot(_ctx.$slots, "fetching", {
              response: _ctx.response,
              bag: _ctx.bag
            }, function () { return [
              createVNode(_component_bt_progress_circular)
            ]; })
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (_ctx.error)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createCommentVNode(" This slot is shown when the component failed to fetch remote data "),
              renderSlot(_ctx.$slots, "error", {
                response: _ctx.response,
                bag: _ctx.bag
              }, function () { return [
                createTextVNode(toDisplayString(_ctx.response.error.message), 1 /* TEXT */)
              ]; })
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : (_ctx.ready)
            ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createCommentVNode(" The default slot is shown when remote data have been fetched successfully and are ready to consume "),
                renderSlot(_ctx.$slots, "default", {
                  response: _ctx.response,
                  result: _ctx.response.result,
                  refresh: _ctx.update,
                  bag: _ctx.bag
                })
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : createCommentVNode("v-if", true)
  ]))
}

export { render };

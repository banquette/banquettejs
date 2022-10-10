/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, renderSlot, createBlock, withCtx, createTextVNode, toDisplayString } from 'vue';

var _hoisted_1 = ["data-fixed"];
var _hoisted_2 = ["innerHTML"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_alert = resolveComponent("bt-alert");

  return (openBlock(), createElementBlock("div", {
    class: "bt-alerts-stack",
    "data-fixed": _ctx.fixed
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stack, function (alerts, position) {
      return (openBlock(), createElementBlock("div", {
        class: normalizeClass('stack ' + position)
      }, [
        renderSlot(_ctx.$slots, position),
        (openBlock(true), createElementBlock(Fragment, null, renderList(alerts, function (item) {
          return (openBlock(), createBlock(_component_bt_alert, {
            ref_for: true,
            ref: 'a' + item.id,
            variant: item.variant,
            title: item.title,
            icon: item.icon,
            ttl: item.ttl,
            closable: item.closable,
            "allow-html": item.allowHtml,
            onClose: function ($event) { return (_ctx.remove(item.id)); }
          }, {
            default: withCtx(function () { return [
              (item.allowHtml)
                ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    innerHTML: item.message
                  }, null, 8 /* PROPS */, _hoisted_2))
                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(item.message), 1 /* TEXT */)
                  ], 64 /* STABLE_FRAGMENT */))
            ]; }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "title", "icon", "ttl", "closable", "allow-html", "onClose"]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ], 8 /* PROPS */, _hoisted_1))
}

export { render };

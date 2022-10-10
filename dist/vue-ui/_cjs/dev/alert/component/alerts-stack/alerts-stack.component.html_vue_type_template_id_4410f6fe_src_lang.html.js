/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["data-fixed"];
var _hoisted_2 = ["innerHTML"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_alert = vue.resolveComponent("bt-alert");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-alerts-stack",
    "data-fixed": _ctx.fixed
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.stack, function (alerts, position) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass('stack ' + position)
      }, [
        vue.renderSlot(_ctx.$slots, position),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(alerts, function (item) {
          return (vue.openBlock(), vue.createBlock(_component_bt_alert, {
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
            default: vue.withCtx(function () { return [
              (item.allowHtml)
                ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    innerHTML: item.message
                  }, null, 8 /* PROPS */, _hoisted_2))
                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(item.message), 1 /* TEXT */)
                  ], 64 /* STABLE_FRAGMENT */))
            ]; }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "title", "icon", "ttl", "closable", "allow-html", "onClose"]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ], 8 /* PROPS */, _hoisted_1))
}

exports.render = render;

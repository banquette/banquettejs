/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = { key: 0 };
var _hoisted_2 = {
  key: 1,
  class: "bt-table"
};
var _hoisted_3 = { class: "table" };
var _hoisted_4 = {
  key: 0,
  "data-pagination": ""
};
var _hoisted_5 = ["colspan"];
var _hoisted_6 = ["onClick"];
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { key: 1 };
var _hoisted_10 = { key: 0 };
var _hoisted_11 = ["colspan"];
var _hoisted_12 = { class: "flex items-center justify-center min-h-[250px]" };
var _hoisted_13 = { key: 0 };
var _hoisted_14 = ["colspan"];
var _hoisted_15 = {
  key: 0,
  class: "details"
};
var _hoisted_16 = ["colspan"];
var _hoisted_17 = { key: 0 };
var _hoisted_18 = ["colspan"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_form = vue.resolveComponent("bt-form");
  var _component_bt_table_pagination = vue.resolveComponent("bt-table-pagination");
  var _component_i_material_report = vue.resolveComponent("i-material-report");
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");
  var _directive_bt_teleport = vue.resolveDirective("bt-teleport");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode("\n-- Available slots:\n--  - default   : where columns are defined\n--  - loader    : when the list is fetching\n--  - error     : when the list failed to get or process remote data\n--  - empty     : when the list is ready but has no results\n--  - items     : the slot that will call the default slot for each item. Overriding this means overriding the whole rendering.\n--  - detail    : if defined, two lines will be created for each item, the detail row contains a single column.\n--  - thead     : to override the whole thead of the table.\n--  - tbody     : to override the whole tbody of the table.\n--  - tfoot     : to override the whole tfoot of the table.\n--  - before    : a user slot rendering before the table. No default content for this slot.\n--  - after     : a user slot rendering after the table. No default content for this slot.\n"),
    vue.createCommentVNode(" The default slot is rendered without any item while initializing to allow columns (visible or not) to register "),
    vue.createCommentVNode(" It's important to wrap the slot with a div to avoid the \"Extraneous non-props attributes ...\" "),
    vue.createCommentVNode(" warning if for example a \"class\" attribute is added to the `bt-table` because the slot is the root node. "),
    (_ctx.vm.initializing)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ]))
      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.createCommentVNode(" A bt-form is required so component validators can be used "),
          vue.withDirectives(vue.createVNode(_component_bt_form, { ref: "form" }, {
            default: vue.withCtx(function (ref) {
              var control = ref.control;

              return [
              vue.createCommentVNode("\n            -- The slot is defined here so we can have a single form for all columns without wrapping the whole table.\n            --\n            -- In the slot the end-user defines \"bt-table-filter\" components, their \"root\" ref is then teleported\n            -- in the corresponding column in the table below using the \"bt-teleport\" directive.\n            "),
              (_ctx.filterFormReady)
                ? vue.renderSlot(_ctx.$slots, "filters", {
                    key: 0,
                    control: control
                  })
                : vue.createCommentVNode("v-if", true)
            ];
  }),
            _: 3 /* FORWARDED */
          }, 512 /* NEED_PATCH */), [
            [vue.vShow, false]
          ]),
          vue.renderSlot(_ctx.$slots, "before", { vm: _ctx.vm }),
          vue.createElementVNode("table", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "thead", { vm: _ctx.vm }, function () { return [
              vue.createElementVNode("thead", null, [
                (_ctx.vm.pagination.enabled && _ctx.vm.pagination.position !== 'bottom')
                  ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_4, [
                      vue.createElementVNode("td", {
                        colspan: _ctx.vm.visibleColumns.length
                      }, [
                        vue.createVNode(_component_bt_table_pagination, { vm: _ctx.vm }, null, 8 /* PROPS */, ["vm"])
                      ], 8 /* PROPS */, _hoisted_5)
                    ]))
                  : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("tr", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.vm.visibleColumns, function (column) {
                    return (vue.openBlock(), vue.createElementBlock("th", {
                      style: vue.normalizeStyle(column.width ? {width: column.width} : {})
                    }, [
                      vue.createCommentVNode(" No ordering "),
                      (!column.orderingName)
                        ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                            vue.createTextVNode(vue.toDisplayString(column.title), 1 /* TEXT */)
                          ], 64 /* STABLE_FRAGMENT */))
                        : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                            vue.createCommentVNode(" Ordering supported "),
                            vue.createElementVNode("a", {
                              class: "ordering",
                              href: "",
                              onClick: vue.withModifiers(function ($event) { return (_ctx.vm.ordering.toggle(column.orderingName)); }, ["prevent"])
                            }, [
                              vue.createElementVNode("span", null, vue.toDisplayString(column.title), 1 /* TEXT */),
                              vue.createCommentVNode(" Maybe add an icon for each ordering state "),
                              (column.orderingStatus === 'asc')
                                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, "⇈"))
                                : (column.orderingStatus === 'desc')
                                  ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8, "⇊"))
                                  : vue.createCommentVNode("v-if", true)
                            ], 8 /* PROPS */, _hoisted_6)
                          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                    ], 4 /* STYLE */))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ]),
                (_ctx.hasActiveFilters)
                  ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_9, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.vm.visibleColumns, function (column) {
                        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("td", null, null, 512 /* NEED_PATCH */)), [
                          [_directive_bt_teleport, {ref: 'root', target: _ctx.filtersMap[column.id]}]
                        ])
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : vue.createCommentVNode("v-if", true)
              ])
            ]; }),
            vue.renderSlot(_ctx.$slots, "tbody", { vm: _ctx.vm }, function () { return [
              vue.createElementVNode("tbody", null, [
                vue.createCommentVNode(" Fetching data from the server "),
                (_ctx.vm.fetching || _ctx.vm.error)
                  ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_10, [
                      vue.createElementVNode("td", {
                        colspan: _ctx.vm.visibleColumns.length
                      }, [
                        (_ctx.vm.error)
                          ? vue.renderSlot(_ctx.$slots, "error", {
                              key: 0,
                              error: _ctx.vm.errorDetail
                            }, function () { return [
                              vue.createVNode(_component_i_material_report),
                              vue.createElementVNode("ul", null, [
                                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.vm.errorDetail.messagesStack, function (message) {
                                  return (vue.openBlock(), vue.createElementBlock("li", null, vue.toDisplayString(message), 1 /* TEXT */))
                                }), 256 /* UNKEYED_FRAGMENT */))
                              ])
                            ]; })
                          : vue.renderSlot(_ctx.$slots, "loading", { key: 1 }, function () { return [
                              vue.createElementVNode("div", _hoisted_12, [
                                vue.createVNode(_component_bt_progress_circular, { size: 96 })
                              ])
                            ]; })
                      ], 8 /* PROPS */, _hoisted_11)
                    ]))
                  : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" Results are ready "),
                (_ctx.vm.ready)
                  ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      (!_ctx.vm.visibleItems.length)
                        ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_13, [
                            vue.createElementVNode("td", {
                              colspan: _ctx.vm.visibleColumns.length
                            }, [
                              vue.renderSlot(_ctx.$slots, "empty", { vm: _ctx.vm }, function () { return [
                                vue.createCommentVNode(" Put a generic icon to empathize the list is empty "),
                                vue.createTextVNode(" No results. ")
                              ]; })
                            ], 8 /* PROPS */, _hoisted_14)
                          ]))
                        : vue.renderSlot(_ctx.$slots, "items", {
                            key: 1,
                            vm: _ctx.vm
                          }, function () { return [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.vm.visibleItems, function (item) {
                              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                                vue.createElementVNode("tr", null, [
                                  vue.renderSlot(_ctx.$slots, "default", {
                                    item: item.item,
                                    toggleDetails: item.toggleDetails
                                  })
                                ]),
                                (item.detailsVisible && _ctx.hasSlot('detail'))
                                  ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_15, [
                                      vue.createElementVNode("td", {
                                        colspan: _ctx.vm.visibleColumns.length
                                      }, [
                                        vue.renderSlot(_ctx.$slots, "detail", { item: item })
                                      ], 8 /* PROPS */, _hoisted_16)
                                    ]))
                                  : vue.createCommentVNode("v-if", true)
                              ], 64 /* STABLE_FRAGMENT */))
                            }), 256 /* UNKEYED_FRAGMENT */))
                          ]; })
                    ], 64 /* STABLE_FRAGMENT */))
                  : vue.createCommentVNode("v-if", true)
              ]),
              vue.renderSlot(_ctx.$slots, "tfoot", { vm: _ctx.vm }, function () { return [
                vue.createElementVNode("tfoot", null, [
                  (_ctx.vm.pagination.enabled && _ctx.vm.pagination.position !== 'top')
                    ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_17, [
                        vue.createElementVNode("td", {
                          colspan: _ctx.vm.visibleColumns.length
                        }, [
                          vue.createVNode(_component_bt_table_pagination, { vm: _ctx.vm }, null, 8 /* PROPS */, ["vm"])
                        ], 8 /* PROPS */, _hoisted_18)
                      ]))
                    : vue.createCommentVNode("v-if", true)
                ])
              ]; })
            ]; })
          ]),
          vue.renderSlot(_ctx.$slots, "after", { vm: _ctx.vm })
        ]))
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, resolveDirective, openBlock, createElementBlock, Fragment, createCommentVNode, renderSlot, withDirectives, createVNode, withCtx, vShow, createElementVNode, renderList, normalizeStyle, createTextVNode, toDisplayString, withModifiers } from 'vue';

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
  var _component_bt_form = resolveComponent("bt-form");
  var _component_bt_table_pagination = resolveComponent("bt-table-pagination");
  var _component_i_material_report = resolveComponent("i-material-report");
  var _component_bt_progress_circular = resolveComponent("bt-progress-circular");
  var _directive_bt_teleport = resolveDirective("bt-teleport");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode("\n-- Available slots:\n--  - default   : where columns are defined\n--  - loader    : when the list is fetching\n--  - error     : when the list failed to get or process remote data\n--  - empty     : when the list is ready but has no results\n--  - items     : the slot that will call the default slot for each item. Overriding this means overriding the whole rendering.\n--  - detail    : if defined, two lines will be created for each item, the detail row contains a single column.\n--  - thead     : to override the whole thead of the table.\n--  - tbody     : to override the whole tbody of the table.\n--  - tfoot     : to override the whole tfoot of the table.\n--  - before    : a user slot rendering before the table. No default content for this slot.\n--  - after     : a user slot rendering after the table. No default content for this slot.\n"),
    createCommentVNode(" The default slot is rendered without any item while initializing to allow columns (visible or not) to register "),
    createCommentVNode(" It's important to wrap the slot with a div to avoid the \"Extraneous non-props attributes ...\" "),
    createCommentVNode(" warning if for example a \"class\" attribute is added to the `bt-table` because the slot is the root node. "),
    (_ctx.vm.initializing)
      ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : (openBlock(), createElementBlock("div", _hoisted_2, [
          createCommentVNode(" A bt-form is required so component validators can be used "),
          withDirectives(createVNode(_component_bt_form, { ref: "form" }, {
            default: withCtx(function (ref) {
              var control = ref.control;

              return [
              createCommentVNode("\n            -- The slot is defined here so we can have a single form for all columns without wrapping the whole table.\n            --\n            -- In the slot the end-user defines \"bt-table-filter\" components, their \"root\" ref is then teleported\n            -- in the corresponding column in the table below using the \"bt-teleport\" directive.\n            "),
              (_ctx.filterFormReady)
                ? renderSlot(_ctx.$slots, "filters", {
                    key: 0,
                    control: control
                  })
                : createCommentVNode("v-if", true)
            ];
  }),
            _: 3 /* FORWARDED */
          }, 512 /* NEED_PATCH */), [
            [vShow, false]
          ]),
          renderSlot(_ctx.$slots, "before", { vm: _ctx.vm }),
          createElementVNode("table", _hoisted_3, [
            renderSlot(_ctx.$slots, "thead", { vm: _ctx.vm }, function () { return [
              createElementVNode("thead", null, [
                (_ctx.vm.pagination.enabled && _ctx.vm.pagination.position !== 'bottom')
                  ? (openBlock(), createElementBlock("tr", _hoisted_4, [
                      createElementVNode("td", {
                        colspan: _ctx.vm.visibleColumns.length
                      }, [
                        createVNode(_component_bt_table_pagination, { vm: _ctx.vm }, null, 8 /* PROPS */, ["vm"])
                      ], 8 /* PROPS */, _hoisted_5)
                    ]))
                  : createCommentVNode("v-if", true),
                createElementVNode("tr", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vm.visibleColumns, function (column) {
                    return (openBlock(), createElementBlock("th", {
                      style: normalizeStyle(column.width ? {width: column.width} : {})
                    }, [
                      createCommentVNode(" No ordering "),
                      (!column.orderingName)
                        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(column.title), 1 /* TEXT */)
                          ], 64 /* STABLE_FRAGMENT */))
                        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createCommentVNode(" Ordering supported "),
                            createElementVNode("a", {
                              class: "ordering",
                              href: "",
                              onClick: withModifiers(function ($event) { return (_ctx.vm.ordering.toggle(column.orderingName)); }, ["prevent"])
                            }, [
                              createElementVNode("span", null, toDisplayString(column.title), 1 /* TEXT */),
                              createCommentVNode(" Maybe add an icon for each ordering state "),
                              (column.orderingStatus === 'asc')
                                ? (openBlock(), createElementBlock("span", _hoisted_7, "⇈"))
                                : (column.orderingStatus === 'desc')
                                  ? (openBlock(), createElementBlock("span", _hoisted_8, "⇊"))
                                  : createCommentVNode("v-if", true)
                            ], 8 /* PROPS */, _hoisted_6)
                          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                    ], 4 /* STYLE */))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ]),
                (_ctx.hasActiveFilters)
                  ? (openBlock(), createElementBlock("tr", _hoisted_9, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vm.visibleColumns, function (column) {
                        return withDirectives((openBlock(), createElementBlock("td", null, null, 512 /* NEED_PATCH */)), [
                          [_directive_bt_teleport, {ref: 'root', target: _ctx.filtersMap[column.id]}]
                        ])
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : createCommentVNode("v-if", true)
              ])
            ]; }),
            renderSlot(_ctx.$slots, "tbody", { vm: _ctx.vm }, function () { return [
              createElementVNode("tbody", null, [
                createCommentVNode(" Fetching data from the server "),
                (_ctx.vm.fetching || _ctx.vm.error)
                  ? (openBlock(), createElementBlock("tr", _hoisted_10, [
                      createElementVNode("td", {
                        colspan: _ctx.vm.visibleColumns.length
                      }, [
                        (_ctx.vm.error)
                          ? renderSlot(_ctx.$slots, "error", {
                              key: 0,
                              error: _ctx.vm.errorDetail
                            }, function () { return [
                              createVNode(_component_i_material_report),
                              createElementVNode("ul", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vm.errorDetail.messagesStack, function (message) {
                                  return (openBlock(), createElementBlock("li", null, toDisplayString(message), 1 /* TEXT */))
                                }), 256 /* UNKEYED_FRAGMENT */))
                              ])
                            ]; })
                          : renderSlot(_ctx.$slots, "loading", { key: 1 }, function () { return [
                              createElementVNode("div", _hoisted_12, [
                                createVNode(_component_bt_progress_circular, { size: 96 })
                              ])
                            ]; })
                      ], 8 /* PROPS */, _hoisted_11)
                    ]))
                  : createCommentVNode("v-if", true),
                createCommentVNode(" Results are ready "),
                (_ctx.vm.ready)
                  ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      (!_ctx.vm.visibleItems.length)
                        ? (openBlock(), createElementBlock("tr", _hoisted_13, [
                            createElementVNode("td", {
                              colspan: _ctx.vm.visibleColumns.length
                            }, [
                              renderSlot(_ctx.$slots, "empty", { vm: _ctx.vm }, function () { return [
                                createCommentVNode(" Put a generic icon to empathize the list is empty "),
                                createTextVNode(" No results. ")
                              ]; })
                            ], 8 /* PROPS */, _hoisted_14)
                          ]))
                        : renderSlot(_ctx.$slots, "items", {
                            key: 1,
                            vm: _ctx.vm
                          }, function () { return [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vm.visibleItems, function (item) {
                              return (openBlock(), createElementBlock(Fragment, null, [
                                createElementVNode("tr", null, [
                                  renderSlot(_ctx.$slots, "default", {
                                    item: item.item,
                                    toggleDetails: item.toggleDetails
                                  })
                                ]),
                                (item.detailsVisible && _ctx.hasSlot('detail'))
                                  ? (openBlock(), createElementBlock("tr", _hoisted_15, [
                                      createElementVNode("td", {
                                        colspan: _ctx.vm.visibleColumns.length
                                      }, [
                                        renderSlot(_ctx.$slots, "detail", { item: item })
                                      ], 8 /* PROPS */, _hoisted_16)
                                    ]))
                                  : createCommentVNode("v-if", true)
                              ], 64 /* STABLE_FRAGMENT */))
                            }), 256 /* UNKEYED_FRAGMENT */))
                          ]; })
                    ], 64 /* STABLE_FRAGMENT */))
                  : createCommentVNode("v-if", true)
              ]),
              renderSlot(_ctx.$slots, "tfoot", { vm: _ctx.vm }, function () { return [
                createElementVNode("tfoot", null, [
                  (_ctx.vm.pagination.enabled && _ctx.vm.pagination.position !== 'top')
                    ? (openBlock(), createElementBlock("tr", _hoisted_17, [
                        createElementVNode("td", {
                          colspan: _ctx.vm.visibleColumns.length
                        }, [
                          createVNode(_component_bt_table_pagination, { vm: _ctx.vm }, null, 8 /* PROPS */, ["vm"])
                        ], 8 /* PROPS */, _hoisted_18)
                      ]))
                    : createCommentVNode("v-if", true)
                ])
              ]; })
            ]; })
          ]),
          renderSlot(_ctx.$slots, "after", { vm: _ctx.vm })
        ]))
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

export { render };

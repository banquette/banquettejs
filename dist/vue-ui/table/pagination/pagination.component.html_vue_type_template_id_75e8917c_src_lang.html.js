/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, createCommentVNode, Fragment, createTextVNode, createElementVNode, toDisplayString, withModifiers, createVNode, renderList, createBlock, normalizeStyle } from 'vue';

var _hoisted_1 = { class: "bt-table-pagination" };
var _hoisted_2 = {
  key: 0,
  class: "summary"
};
var _hoisted_3 = { class: "actions" };
var _hoisted_4 = { key: 0 };
var _hoisted_5 = ["data-clickable"];
var _hoisted_6 = ["data-clickable"];
var _hoisted_7 = ["data-current", "onClick"];
var _hoisted_8 = ["data-clickable"];
var _hoisted_9 = ["data-clickable"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_keyboard_backspace = resolveComponent("i-material-keyboard-backspace");
  var _component_i_material_chevron_left = resolveComponent("i-material-chevron-left");
  var _component_bt_form_text = resolveComponent("bt-form-text");
  var _component_i_material_chevron_right = resolveComponent("i-material-chevron-right");
  var _component_bt_form_select = resolveComponent("bt-form-select");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" Optional summary "),
    (_ctx.vm.ready && _ctx.vm.pagination.summary && _ctx.vm.pagination.currentState)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createCommentVNode(" TODO: Add a config for vue-ui and an option \"paginationSummaryExpression\" to define the text below "),
          (_ctx.isOffset)
            ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(" Résultat(s) "),
                createElementVNode("b", null, toDisplayString(_ctx.vm.pagination.currentState.firstResultCount) + " - " + toDisplayString(_ctx.vm.pagination.currentState.lastResultCount), 1 /* TEXT */),
                createTextVNode(" sur "),
                createElementVNode("b", null, toDisplayString(_ctx.vm.pagination.currentState.totalResultsCount), 1 /* TEXT */),
                createTextVNode(" au total ")
              ], 64 /* STABLE_FRAGMENT */))
            : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createElementVNode("b", null, toDisplayString(_ctx.vm.pagination.currentState.totalResultsCount), 1 /* TEXT */),
                createTextVNode(" élément(s) au total ")
              ], 64 /* STABLE_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_3, [
      createCommentVNode(" The actual pagination "),
      (_ctx.vm.pagination.currentState)
        ? (openBlock(), createElementBlock("ul", _hoisted_4, [
            createCommentVNode(" First page "),
            createElementVNode("li", {
              class: "page-item first-last first",
              "data-clickable": _ctx.vm.pagination.allowFirstPage && !_ctx.vm.pagination.currentState.isFirstPage
            }, [
              createElementVNode("a", {
                href: "",
                onClick: _cache[0] || (_cache[0] = withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(_ctx.isOffset ? 1 : 0)); }, ["prevent"]))
              }, [
                createVNode(_component_i_material_keyboard_backspace)
              ])
            ], 8 /* PROPS */, _hoisted_5),
            createCommentVNode(" Previous page "),
            createElementVNode("li", {
              class: "page-item",
              "data-clickable": !_ctx.vm.pagination.currentState.isFirstPage && _ctx.isOffset
            }, [
              createElementVNode("a", {
                href: "",
                onClick: _cache[1] || (_cache[1] = withModifiers(function ($event) { return (_ctx.vm.pagination.previous()); }, ["prevent"]))
              }, [
                createVNode(_component_i_material_chevron_left)
              ])
            ], 8 /* PROPS */, _hoisted_6),
            createCommentVNode(" Pages links or input "),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vm.pagination.currentState.navItems, function (item) {
              return (openBlock(), createElementBlock("li", null, [
                (item.type === 'link')
                  ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: "",
                      "data-current": item.current ? '' : null,
                      onClick: withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(item.page)); }, ["prevent"])
                    }, toDisplayString(item.text), 9 /* TEXT, PROPS */, _hoisted_7))
                  : (openBlock(), createBlock(_component_bt_form_text, {
                      key: 1,
                      style: normalizeStyle(("--length: " + (item.text.length + 1) + "ch")),
                      form: _ctx.form,
                      control: "page",
                      placeholder: "...",
                      onKeydown: _ctx.onPageTextControlKeyDown
                    }, null, 8 /* PROPS */, ["style", "form", "onKeydown"]))
              ]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            createCommentVNode(" Next page "),
            createElementVNode("li", {
              class: "page-item",
              "data-clickable": !_ctx.vm.pagination.currentState.isLastPage
            }, [
              createElementVNode("a", {
                href: "",
                onClick: _cache[2] || (_cache[2] = withModifiers(function ($event) { return (_ctx.vm.pagination.next()); }, ["prevent"]))
              }, [
                createVNode(_component_i_material_chevron_right)
              ])
            ], 8 /* PROPS */, _hoisted_8),
            createCommentVNode(" Last page "),
            createElementVNode("li", {
              class: "page-item first-last last",
              "data-clickable": _ctx.vm.pagination.allowLastPage && !_ctx.vm.pagination.currentState.isLastPage && _ctx.isOffset
            }, [
              createElementVNode("a", {
                href: "",
                onClick: _cache[3] || (_cache[3] = withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(_ctx.vm.pagination.currentState.totalPagesCount)); }, ["prevent"]))
              }, [
                createVNode(_component_i_material_keyboard_backspace)
              ])
            ], 8 /* PROPS */, _hoisted_9)
          ]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Number of items per page selection "),
      (_ctx.vm.pagination.allowedItemsPerPage.length > 1)
        ? (openBlock(), createBlock(_component_bt_form_select, {
            key: 1,
            form: _ctx.form,
            control: "itemsPerPage",
            choices: _ctx.vm.pagination.allowedItemsPerPage
          }, null, 8 /* PROPS */, ["form", "choices"]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}

export { render };

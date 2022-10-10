/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  var _component_i_material_keyboard_backspace = vue.resolveComponent("i-material-keyboard-backspace");
  var _component_i_material_chevron_left = vue.resolveComponent("i-material-chevron-left");
  var _component_bt_form_text = vue.resolveComponent("bt-form-text");
  var _component_i_material_chevron_right = vue.resolveComponent("i-material-chevron-right");
  var _component_bt_form_select = vue.resolveComponent("bt-form-select");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createCommentVNode(" Optional summary "),
    (_ctx.vm.ready && _ctx.vm.pagination.summary && _ctx.vm.pagination.currentState)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.createCommentVNode(" TODO: Add a config for vue-ui and an option \"paginationSummaryExpression\" to define the text below "),
          (_ctx.isOffset)
            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(" Résultat(s) "),
                vue.createElementVNode("b", null, vue.toDisplayString(_ctx.vm.pagination.currentState.firstResultCount) + " - " + vue.toDisplayString(_ctx.vm.pagination.currentState.lastResultCount), 1 /* TEXT */),
                vue.createTextVNode(" sur "),
                vue.createElementVNode("b", null, vue.toDisplayString(_ctx.vm.pagination.currentState.totalResultsCount), 1 /* TEXT */),
                vue.createTextVNode(" au total ")
              ], 64 /* STABLE_FRAGMENT */))
            : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createElementVNode("b", null, vue.toDisplayString(_ctx.vm.pagination.currentState.totalResultsCount), 1 /* TEXT */),
                vue.createTextVNode(" élément(s) au total ")
              ], 64 /* STABLE_FRAGMENT */))
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_3, [
      vue.createCommentVNode(" The actual pagination "),
      (_ctx.vm.pagination.currentState)
        ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_4, [
            vue.createCommentVNode(" First page "),
            vue.createElementVNode("li", {
              class: "page-item first-last first",
              "data-clickable": _ctx.vm.pagination.allowFirstPage && !_ctx.vm.pagination.currentState.isFirstPage
            }, [
              vue.createElementVNode("a", {
                href: "",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(_ctx.isOffset ? 1 : 0)); }, ["prevent"]))
              }, [
                vue.createVNode(_component_i_material_keyboard_backspace)
              ])
            ], 8 /* PROPS */, _hoisted_5),
            vue.createCommentVNode(" Previous page "),
            vue.createElementVNode("li", {
              class: "page-item",
              "data-clickable": !_ctx.vm.pagination.currentState.isFirstPage && _ctx.isOffset
            }, [
              vue.createElementVNode("a", {
                href: "",
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(function ($event) { return (_ctx.vm.pagination.previous()); }, ["prevent"]))
              }, [
                vue.createVNode(_component_i_material_chevron_left)
              ])
            ], 8 /* PROPS */, _hoisted_6),
            vue.createCommentVNode(" Pages links or input "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.vm.pagination.currentState.navItems, function (item) {
              return (vue.openBlock(), vue.createElementBlock("li", null, [
                (item.type === 'link')
                  ? (vue.openBlock(), vue.createElementBlock("a", {
                      key: 0,
                      href: "",
                      "data-current": item.current ? '' : null,
                      onClick: vue.withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(item.page)); }, ["prevent"])
                    }, vue.toDisplayString(item.text), 9 /* TEXT, PROPS */, _hoisted_7))
                  : (vue.openBlock(), vue.createBlock(_component_bt_form_text, {
                      key: 1,
                      style: vue.normalizeStyle(("--length: " + (item.text.length + 1) + "ch")),
                      form: _ctx.form,
                      control: "page",
                      placeholder: "...",
                      onKeydown: _ctx.onPageTextControlKeyDown
                    }, null, 8 /* PROPS */, ["style", "form", "onKeydown"]))
              ]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            vue.createCommentVNode(" Next page "),
            vue.createElementVNode("li", {
              class: "page-item",
              "data-clickable": !_ctx.vm.pagination.currentState.isLastPage
            }, [
              vue.createElementVNode("a", {
                href: "",
                onClick: _cache[2] || (_cache[2] = vue.withModifiers(function ($event) { return (_ctx.vm.pagination.next()); }, ["prevent"]))
              }, [
                vue.createVNode(_component_i_material_chevron_right)
              ])
            ], 8 /* PROPS */, _hoisted_8),
            vue.createCommentVNode(" Last page "),
            vue.createElementVNode("li", {
              class: "page-item first-last last",
              "data-clickable": _ctx.vm.pagination.allowLastPage && !_ctx.vm.pagination.currentState.isLastPage && _ctx.isOffset
            }, [
              vue.createElementVNode("a", {
                href: "",
                onClick: _cache[3] || (_cache[3] = vue.withModifiers(function ($event) { return (_ctx.vm.pagination.goTo(_ctx.vm.pagination.currentState.totalPagesCount)); }, ["prevent"]))
              }, [
                vue.createVNode(_component_i_material_keyboard_backspace)
              ])
            ], 8 /* PROPS */, _hoisted_9)
          ]))
        : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" Number of items per page selection "),
      (_ctx.vm.pagination.allowedItemsPerPage.length > 1)
        ? (vue.openBlock(), vue.createBlock(_component_bt_form_select, {
            key: 1,
            form: _ctx.form,
            control: "itemsPerPage",
            choices: _ctx.vm.pagination.allowedItemsPerPage
          }, null, 8 /* PROPS */, ["form", "choices"]))
        : vue.createCommentVNode("v-if", true)
    ])
  ]))
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveDirective, withDirectives, openBlock, createElementBlock, toDisplayString, createCommentVNode } from 'vue';

var _hoisted_1 = { class: "bt-form-tiptap-character-count" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_bt_bind_theme = resolveDirective("bt-bind-theme");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    (_ctx.configuration.showCharacters)
      ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.charactersText), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    (_ctx.configuration.showWords)
      ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.wordsText), 1 /* TEXT */))
      : createCommentVNode("v-if", true)
  ])), [
    [_directive_bt_bind_theme]
  ])
}

export { render };

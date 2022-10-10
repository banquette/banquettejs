/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementBlock, Fragment, renderList, resolveDynamicComponent, createTextVNode, toDisplayString, createElementVNode, createCommentVNode } from 'vue';

var _hoisted_1 = { class: "addons" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_title = resolveComponent("i-material-title");
  var _component_i_material_arrow_drop_down = resolveComponent("i-material-arrow-drop-down");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_i_material_check = resolveComponent("i-material-check");
  var _component_bt_dropdown_item = resolveComponent("bt-dropdown-item");
  var _component_bt_dropdown_divider = resolveComponent("bt-dropdown-divider");
  var _component_i_material_format_clear = resolveComponent("i-material-format-clear");
  var _component_bt_dropdown = resolveComponent("bt-dropdown");
  var _component_bt_button = resolveComponent("bt-button");

  return (_ctx.editor)
    ? (openBlock(), createBlock(_component_bt_button, {
        key: 0,
        disabled: !_ctx.enabled,
        class: "bt-form-tiptap-heading toolbar-button"
      }, {
        toggle: withCtx(function (ref) {
          var close = ref.close;

          return [
          createVNode(_component_bt_dropdown, { class: "bt-form-tiptap-heading-dropdown" }, {
            default: withCtx(function () { return [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.availableLevels, function (level) {
                return (openBlock(), createBlock(_component_bt_dropdown_item, {
                  "data-active": _ctx.editor.isActive('heading', { level: level }) ? '' : null,
                  class: "heading",
                  onClick: function ($event) {_ctx.toggleHeading(level); close();}
                }, {
                  default: withCtx(function () { return [
                    (openBlock(), createBlock(resolveDynamicComponent('h' + level), null, {
                      default: withCtx(function () { return [
                        createTextVNode(toDisplayString(_ctx.i18n.headingTitle.replace('{level}', level)), 1 /* TEXT */)
                      ]; }),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */)),
                    createElementVNode("div", _hoisted_1, [
                      createVNode(_component_i_material_check, { class: "checked" })
                    ])
                  ]; }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["data-active", "onClick"]))
              }), 256 /* UNKEYED_FRAGMENT */)),
              createVNode(_component_bt_dropdown_divider),
              createVNode(_component_bt_dropdown_item, {
                onClick: function ($event) {_ctx.unsetHeading(); close();}
              }, {
                default: withCtx(function () { return [
                  createVNode(_component_i_material_format_clear, { crop: "" }),
                  createTextVNode(" " + toDisplayString(_ctx.i18n.resetButton), 1 /* TEXT */)
                ]; }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
            ]; }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)
        ];
  }),
        default: withCtx(function () { return [
          createVNode(_component_i_material_title, {
            height: "0.95em",
            crop: ""
          }),
          createVNode(_component_i_material_arrow_drop_down, {
            crop: "",
            width: "0.7em"
          }),
          (_ctx.i18n.popover)
            ? (openBlock(), createBlock(_component_bt_popover, {
                key: 0,
                "show-delay": 500,
                "hide-delay": 0
              }, {
                default: withCtx(function () { return [
                  createTextVNode(toDisplayString(_ctx.i18n.popover), 1 /* TEXT */)
                ]; }),
                _: 1 /* STABLE */
              }))
            : createCommentVNode("v-if", true)
        ]; }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled"]))
    : createCommentVNode("v-if", true)
}

export { render };

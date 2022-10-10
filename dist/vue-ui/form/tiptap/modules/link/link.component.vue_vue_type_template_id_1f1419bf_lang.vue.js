/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createSlots } from 'vue';

var _hoisted_1 = { class: "bt-form-tiptap-link" };
var _hoisted_2 = { class: "buttons" };
var _hoisted_3 = { class: "form-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_i_material_link = resolveComponent("i-material-link");
  var _component_bt_popover = resolveComponent("bt-popover");
  var _component_bt_button = resolveComponent("bt-button");
  var _component_bt_form_text = resolveComponent("bt-form-text");
  var _component_bt_form_select = resolveComponent("bt-form-select");
  var _component_bt_dialog = resolveComponent("bt-dialog");

  return (openBlock(), createElementBlock(Fragment, null, [
    (_ctx.editor)
      ? (openBlock(), createBlock(_component_bt_button, {
          key: 0,
          class: "toolbar-button",
          onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.showDialog()); }),
          disabled: !_ctx.enabled,
          "data-active": _ctx.editor.isActive('link') ? '' : null
        }, {
          default: withCtx(function () { return [
            createVNode(_component_i_material_link, {
              width: "1em",
              crop: ""
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
        }, 8 /* PROPS */, ["disabled", "data-active"]))
      : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_1, [
      createVNode(_component_bt_dialog, {
        modelValue: _ctx.dialogVisible,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return ((_ctx.dialogVisible) = $event); }),
        teleport: null,
        "destroy-on-close": ""
      }, {
        header: withCtx(function () { return [
          createTextVNode(toDisplayString(_ctx.i18n.dialogTitle), 1 /* TEXT */)
        ]; }),
        footer: withCtx(function (ref) {
          var close = ref.close;

          return [
          createElementVNode("div", null, [
            (_ctx.editor.isActive('link'))
              ? (openBlock(), createBlock(_component_bt_button, {
                  key: 0,
                  class: "delete",
                  variant: _ctx.variants.dialogDeleteButton,
                  onClick: function ($event) {_ctx.remove(); close();}
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.i18n.deleteButton), 1 /* TEXT */)
                  ]; }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "onClick"]))
              : createCommentVNode("v-if", true)
          ]),
          createElementVNode("div", _hoisted_2, [
            createVNode(_component_bt_button, {
              class: "cancel",
              variant: _ctx.variants.dialogCancelButton,
              onClick: function ($event) { return (close()); }
            }, {
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.i18n.cancelButton), 1 /* TEXT */)
              ]; }),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "onClick"]),
            createVNode(_component_bt_button, {
              class: "validate",
              variant: _ctx.variants.dialogConfirmButton,
              disabled: !_ctx.form.valid,
              onClick: function ($event) { return (_ctx.apply() && close()); }
            }, {
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.i18n.confirmButton), 1 /* TEXT */)
              ]; }),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant", "disabled", "onClick"])
          ])
        ];
  }),
        default: withCtx(function () { return [
          createElementVNode("div", _hoisted_3, [
            createVNode(_component_bt_form_text, {
              form: _ctx.form,
              control: "label"
            }, createSlots({
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.i18n.labelControlLabel) + " ", 1 /* TEXT */)
              ]; }),
              _: 2 /* DYNAMIC */
            }, [
              (_ctx.i18n.labelControlHelp)
                ? {
                    name: "help",
                    fn: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.i18n.labelControlHelp), 1 /* TEXT */)
                    ]; }),
                    key: "0"
                  }
                : undefined
            ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["form"]),
            createVNode(_component_bt_form_text, {
              form: _ctx.form,
              control: "href"
            }, createSlots({
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.i18n.hrefControlLabel) + " ", 1 /* TEXT */)
              ]; }),
              _: 2 /* DYNAMIC */
            }, [
              (_ctx.i18n.hrefControlHelp)
                ? {
                    name: "help",
                    fn: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.i18n.hrefControlHelp), 1 /* TEXT */)
                    ]; }),
                    key: "0"
                  }
                : undefined
            ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["form"]),
            createVNode(_component_bt_form_select, {
              form: _ctx.form,
              control: "target",
              choices: ['_self', '_blank', '_parent', '_top']
            }, createSlots({
              default: withCtx(function () { return [
                createTextVNode(toDisplayString(_ctx.i18n.targetControlLabel) + " ", 1 /* TEXT */)
              ]; }),
              _: 2 /* DYNAMIC */
            }, [
              (_ctx.i18n.targetControlHelp)
                ? {
                    name: "help",
                    fn: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.i18n.targetControlHelp), 1 /* TEXT */)
                    ]; }),
                    key: "0"
                  }
                : undefined
            ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["form"])
          ])
        ]; }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

export { render };

/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { resolveComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderSlot, toDisplayString, createBlock, createVNode, renderList, withCtx } from 'vue';

var _hoisted_1 = ["data-has-value", "data-has-help", "data-has-focus", "data-has-placeholder", "data-is-disabled", "data-has-error", "data-has-before-addon", "data-has-after-addon", "data-has-floating-label", "data-has-floating-errors", "data-has-floating-help"];
var _hoisted_2 = ["for"];
var _hoisted_3 = ["for"];
var _hoisted_4 = { class: "input-group" };
var _hoisted_5 = {
  key: 0,
  class: "before",
  "data-form-input-addon": ""
};
var _hoisted_6 = {
  key: 1,
  class: "addon"
};
var _hoisted_7 = { class: "input" };
var _hoisted_8 = {
  key: 0,
  class: "placeholder"
};
var _hoisted_9 = { class: "floating-extras" };
var _hoisted_10 = {
  key: 1,
  ref: "error-icon",
  class: "error-icon"
};
var _hoisted_11 = {
  key: 2,
  ref: "help-icon",
  class: "help-icon"
};
var _hoisted_12 = {
  key: 4,
  class: "asterisk"
};
var _hoisted_13 = {
  key: 1,
  class: "after",
  "data-form-input-addon": ""
};
var _hoisted_14 = {
  key: 0,
  class: "addon"
};
var _hoisted_15 = {
  key: 2,
  class: "extras"
};
var _hoisted_16 = { class: "error" };
var _hoisted_17 = {
  key: 1,
  class: "help"
};
var _hoisted_18 = { class: "error" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = resolveComponent("bt-progress-circular");
  var _component_i_material_warning = resolveComponent("i-material-warning");
  var _component_i_material_help = resolveComponent("i-material-help");
  var _component_bt_form_control_state_overlay = resolveComponent("bt-form-control-state-overlay");
  var _component_bt_popover = resolveComponent("bt-popover");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" v.control.value == false to test for empty arrays "),
    createCommentVNode(" !v.control.value would resolve to `false` for `[]`, but v.control.value == false resolves to `true`. "),
    createElementVNode("div", {
      class: "bt-form-base-input",
      "data-has-value": _ctx.hasValue ? '' : null,
      "data-has-help": _ctx.hasLabelSlot ? '' : null,
      "data-has-focus": _ctx.v.control.focused ? '' : null,
      "data-has-placeholder": _ctx.v.base.placeholder ? '' : null,
      "data-is-disabled": _ctx.v.control.disabled ? '' : null,
      "data-has-error": _ctx.v.control.invalid && _ctx.v.control.validated ? '' : null,
      "data-has-before-addon": _ctx.hasBeforeRawSlot || _ctx.hasBeforeSlot ? '' : null,
      "data-has-after-addon": _ctx.hasAfterRawSlot || _ctx.hasAfterSlot ? '' : null,
      "data-has-floating-label": _ctx.hasFloatingLabel ? '' : null,
      "data-has-floating-errors": _ctx.hasFloatingErrors ? '' : null,
      "data-has-floating-help": _ctx.hasFloatingHelp ? '' : null
    }, [
      (_ctx.hasLabelSlot)
        ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: _ctx.v.control.fullId
          }, [
            renderSlot(_ctx.$slots, "label")
          ], 8 /* PROPS */, _hoisted_2))
        : (_ctx.v.base.label)
          ? (openBlock(), createElementBlock("label", {
              key: 1,
              for: _ctx.v.control.fullId
            }, toDisplayString(_ctx.v.base.label), 9 /* TEXT, PROPS */, _hoisted_3))
          : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_4, [
        (_ctx.hasBeforeRawSlot || _ctx.hasBeforeSlot)
          ? (openBlock(), createElementBlock("div", _hoisted_5, [
              (_ctx.hasBeforeRawSlot)
                ? renderSlot(_ctx.$slots, "before-raw", { key: 0 })
                : createCommentVNode("v-if", true),
              (_ctx.hasBeforeSlot)
                ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    renderSlot(_ctx.$slots, "before")
                  ]))
                : createCommentVNode("v-if", true)
            ]))
          : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_7, [
          (_ctx.v.base.placeholder && (!_ctx.v.control.value || _ctx.v.control.value == false))
            ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.v.base.placeholder), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default"),
          createElementVNode("div", _hoisted_9, [
            renderSlot(_ctx.$slots, "extras-before"),
            (_ctx.v.control.busy || _ctx.v.control.validating)
              ? (openBlock(), createBlock(_component_bt_progress_circular, { key: 0 }))
              : createCommentVNode("v-if", true),
            (_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
              ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createVNode(_component_i_material_warning, {
                    size: "18",
                    onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.v.control.focus()); })
                  })
                ], 512 /* NEED_PATCH */))
              : createCommentVNode("v-if", true),
            (_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
              ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createVNode(_component_i_material_help, { size: "18" })
                ], 512 /* NEED_PATCH */))
              : createCommentVNode("v-if", true),
            (_ctx.v.base.showDebug)
              ? (openBlock(), createBlock(_component_bt_form_control_state_overlay, {
                  key: 3,
                  v: _ctx.v
                }, null, 8 /* PROPS */, ["v"]))
              : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "extras-after"),
            (_ctx.v.base.required)
              ? (openBlock(), createElementBlock("span", _hoisted_12, "∗"))
              : createCommentVNode("v-if", true)
          ])
        ]),
        (_ctx.hasAfterSlot || _ctx.hasAfterRawSlot)
          ? (openBlock(), createElementBlock("div", _hoisted_13, [
              (_ctx.hasAfterSlot)
                ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    renderSlot(_ctx.$slots, "after")
                  ]))
                : createCommentVNode("v-if", true),
              (_ctx.hasAfterRawSlot)
                ? renderSlot(_ctx.$slots, "after-raw", { key: 1 })
                : createCommentVNode("v-if", true)
            ]))
          : createCommentVNode("v-if", true)
      ]),
      ((!_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated) || (!_ctx.hasFloatingHelp && _ctx.hasHelpSlot))
        ? (openBlock(), createElementBlock("div", _hoisted_15, [
            (!_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
              ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.v.control.errors, function (error) {
                  return (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(error.message), 1 /* TEXT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              : createCommentVNode("v-if", true),
            (!_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
              ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  renderSlot(_ctx.$slots, "help")
                ]))
              : createCommentVNode("v-if", true)
          ]))
        : createCommentVNode("v-if", true),
      (_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
        ? (openBlock(), createBlock(_component_bt_popover, {
            key: 3,
            target: "error-icon",
            visible: _ctx.v.control.focused && (!_ctx.$refs.helpPopover || !_ctx.$refs.helpPopover.isVisible),
            class: "bt-form-base-input-errors-popover"
          }, {
            default: withCtx(function () { return [
              createElementVNode("div", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.v.control.errors, function (error) {
                  return (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(error.message), 1 /* TEXT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ]; }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["visible"]))
        : createCommentVNode("v-if", true),
      (_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
        ? (openBlock(), createBlock(_component_bt_popover, {
            key: 4,
            ref: "helpPopover",
            target: "help-icon",
            class: "bt-form-base-input-help-popover"
          }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "help")
            ]; }),
            _: 3 /* FORWARDED */
          }, 512 /* NEED_PATCH */))
        : createCommentVNode("v-if", true)
    ], 8 /* PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

export { render };

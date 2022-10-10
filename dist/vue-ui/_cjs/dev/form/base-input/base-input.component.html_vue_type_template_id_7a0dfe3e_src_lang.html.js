/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");
  var _component_i_material_warning = vue.resolveComponent("i-material-warning");
  var _component_i_material_help = vue.resolveComponent("i-material-help");
  var _component_bt_form_control_state_overlay = vue.resolveComponent("bt-form-control-state-overlay");
  var _component_bt_popover = vue.resolveComponent("bt-popover");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" v.control.value == false to test for empty arrays "),
    vue.createCommentVNode(" !v.control.value would resolve to `false` for `[]`, but v.control.value == false resolves to `true`. "),
    vue.createElementVNode("div", {
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
        ? (vue.openBlock(), vue.createElementBlock("label", {
            key: 0,
            for: _ctx.v.control.fullId
          }, [
            vue.renderSlot(_ctx.$slots, "label")
          ], 8 /* PROPS */, _hoisted_2))
        : (_ctx.v.base.label)
          ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 1,
              for: _ctx.v.control.fullId
            }, vue.toDisplayString(_ctx.v.base.label), 9 /* TEXT, PROPS */, _hoisted_3))
          : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_4, [
        (_ctx.hasBeforeRawSlot || _ctx.hasBeforeSlot)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
              (_ctx.hasBeforeRawSlot)
                ? vue.renderSlot(_ctx.$slots, "before-raw", { key: 0 })
                : vue.createCommentVNode("v-if", true),
              (_ctx.hasBeforeSlot)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
                    vue.renderSlot(_ctx.$slots, "before")
                  ]))
                : vue.createCommentVNode("v-if", true)
            ]))
          : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_7, [
          (_ctx.v.base.placeholder && (!_ctx.v.control.value || _ctx.v.control.value == false))
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, vue.toDisplayString(_ctx.v.base.placeholder), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createElementVNode("div", _hoisted_9, [
            vue.renderSlot(_ctx.$slots, "extras-before"),
            (_ctx.v.control.busy || _ctx.v.control.validating)
              ? (vue.openBlock(), vue.createBlock(_component_bt_progress_circular, { key: 0 }))
              : vue.createCommentVNode("v-if", true),
            (_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
                  vue.createVNode(_component_i_material_warning, {
                    size: "18",
                    onClick: _cache[0] || (_cache[0] = function ($event) { return (_ctx.v.control.focus()); })
                  })
                ], 512 /* NEED_PATCH */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, [
                  vue.createVNode(_component_i_material_help, { size: "18" })
                ], 512 /* NEED_PATCH */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.v.base.showDebug)
              ? (vue.openBlock(), vue.createBlock(_component_bt_form_control_state_overlay, {
                  key: 3,
                  v: _ctx.v
                }, null, 8 /* PROPS */, ["v"]))
              : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "extras-after"),
            (_ctx.v.base.required)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_12, "∗"))
              : vue.createCommentVNode("v-if", true)
          ])
        ]),
        (_ctx.hasAfterSlot || _ctx.hasAfterRawSlot)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
              (_ctx.hasAfterSlot)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14, [
                    vue.renderSlot(_ctx.$slots, "after")
                  ]))
                : vue.createCommentVNode("v-if", true),
              (_ctx.hasAfterRawSlot)
                ? vue.renderSlot(_ctx.$slots, "after-raw", { key: 1 })
                : vue.createCommentVNode("v-if", true)
            ]))
          : vue.createCommentVNode("v-if", true)
      ]),
      ((!_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated) || (!_ctx.hasFloatingHelp && _ctx.hasHelpSlot))
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15, [
            (!_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
              ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.v.control.errors, function (error) {
                  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, vue.toDisplayString(error.message), 1 /* TEXT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              : vue.createCommentVNode("v-if", true),
            (!_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17, [
                  vue.renderSlot(_ctx.$slots, "help")
                ]))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.hasFloatingErrors && _ctx.v.control.invalid && _ctx.v.control.validated)
        ? (vue.openBlock(), vue.createBlock(_component_bt_popover, {
            key: 3,
            target: "error-icon",
            visible: _ctx.v.control.focused && (!_ctx.$refs.helpPopover || !_ctx.$refs.helpPopover.isVisible),
            class: "bt-form-base-input-errors-popover"
          }, {
            default: vue.withCtx(function () { return [
              vue.createElementVNode("div", null, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.v.control.errors, function (error) {
                  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_18, vue.toDisplayString(error.message), 1 /* TEXT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ]; }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["visible"]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.hasFloatingHelp && _ctx.hasHelpSlot)
        ? (vue.openBlock(), vue.createBlock(_component_bt_popover, {
            key: 4,
            ref: "helpPopover",
            target: "help-icon",
            class: "bt-form-base-input-help-popover"
          }, {
            default: vue.withCtx(function () { return [
              vue.renderSlot(_ctx.$slots, "help")
            ]; }),
            _: 3 /* FORWARDED */
          }, 512 /* NEED_PATCH */))
        : vue.createCommentVNode("v-if", true)
    ], 8 /* PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

exports.render = render;

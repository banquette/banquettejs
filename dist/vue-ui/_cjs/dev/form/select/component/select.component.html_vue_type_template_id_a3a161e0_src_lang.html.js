/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _withScopeId = function (n) { return (vue.pushScopeId("data-v-a3a161e0"),n=n(),vue.popScopeId(),n); };
var _hoisted_1 = ["data-choices-visible", "data-is-height-locked"];
var _hoisted_2 = { class: "control-wrapper" };
var _hoisted_3 = ["id", "tabindex", "disabled", "placeholder", "readonly"];
var _hoisted_4 = {
  key: 0,
  class: "tag-selection-wrapper"
};
var _hoisted_5 = { ref: "tagSelectionWrapper" };
var _hoisted_6 = { key: 0 };
var _hoisted_7 = { key: 1 };
var _hoisted_8 = /*#__PURE__*/ _withScopeId(function () { return vue.createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  class: "caret-icon"
}, [
  /*#__PURE__*/vue.createElementVNode("path", {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  })
], -1 /* HOISTED */); });
var _hoisted_9 = {
  key: 0,
  class: "no-results error"
};
var _hoisted_10 = {
  key: 1,
  class: "no-results"
};
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = {
  key: 2,
  class: "no-results loading"
};
var _hoisted_13 = {
  key: 3,
  class: "no-results"
};
var _hoisted_14 = ["innerHTML"];
var _hoisted_15 = ["innerHTML"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_tag = vue.resolveComponent("bt-tag");
  var _component_i_remix_close_circle = vue.resolveComponent("i-remix-close-circle");
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _component_choice_slot_wrapper = vue.resolveComponent("choice-slot-wrapper");
  var _component_bt_form_select_choice = vue.resolveComponent("bt-form-select-choice");
  var _component_bt_form_select_group = vue.resolveComponent("bt-form-select-group");
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");
  var _component_bt_dropdown = vue.resolveComponent("bt-dropdown");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");
  var _directive_bt_click_outside = vue.resolveDirective("bt-click-outside");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-form-select",
    "data-choices-visible": _ctx.v.choicesVisible ? '' : null,
    "data-is-height-locked": _ctx.v.isHeightLocked ? '' : null,
    onFocus: _cache[10] || (_cache[10] = function ($event) { return (_ctx.v.control.onFocus()); }),
    onBlur: _cache[11] || (_cache[11] = function ($event) { return (_ctx.v.control.onBlur()); })
  }, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      "extras-after": vue.withCtx(function () { return [
        (_ctx.v.control.value && _ctx.clearable && !_ctx.v.control.disabled)
          ? (vue.openBlock(), vue.createElementBlock("a", {
              key: 0,
              href: "",
              class: "clearable-icon",
              onClick: _cache[8] || (_cache[8] = vue.withModifiers(function ($event) { return (_ctx.deselectAll()); }, ["stop","prevent"]))
            }, [
              vue.createVNode(_component_i_remix_close_circle, { crop: "" })
            ]))
          : vue.createCommentVNode("v-if", true),
        _hoisted_8,
        vue.renderSlot(_ctx.$slots, "extras-after")
      ]; }),
      label: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      "before-raw": vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "before-raw")
      ]; }),
      "after-raw": vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "after-raw")
      ]; }),
      before: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "before")
      ]; }),
      after: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "after")
      ]; }),
      default: vue.withCtx(function () { return [
        vue.createElementVNode("div", {
          ref: "inputWrapper",
          class: "input-wrapper",
          onClick: _cache[7] || (_cache[7] = vue.withModifiers(function ($event) { return (_ctx.onInputWrapperClick()); }, ["stop"]))
        }, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createElementVNode("div", null, [
              vue.withDirectives(vue.createElementVNode("input", {
                ref: "input",
                id: _ctx.v.control.fullId,
                tabindex: !_ctx.v.control.disabled ? _ctx.v.control.tabIndex : null,
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) { return ((_ctx.v.inputValue) = $event); }),
                disabled: _ctx.v.control.disabled ? '' : null,
                placeholder: _ctx.v.inputPlaceholder,
                autocomplete: "off",
                readonly: _ctx.v.isInputReadonly || !_ctx.v.choicesVisible ? '' : null,
                "data-control": "",
                onInput: _cache[1] || (_cache[1] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.onInputChange && _ctx.onInputChange.apply(_ctx, args));
        }),
                onKeydown: _cache[2] || (_cache[2] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.onKeyDown && _ctx.onKeyDown.apply(_ctx, args));
        }),
                onFocus: _cache[3] || (_cache[3] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.onInputFocus && _ctx.onInputFocus.apply(_ctx, args));
        }),
                onBlur: _cache[4] || (_cache[4] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.onInputBlur && _ctx.onInputBlur.apply(_ctx, args));
        })
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
                [vue.vModelText, _ctx.v.inputValue]
              ])
            ])
          ]),
          (_ctx.v.multiple)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                vue.createElementVNode("div", _hoisted_5, [
                  (_ctx.v.selectedInPopover.length > 0)
                    ? (vue.openBlock(), vue.createBlock(_component_bt_tag, {
                        key: 0,
                        ref: "additionalTagsAggregator",
                        class: vue.normalizeClass(["additionalTagsAggregator", {alone: _ctx.v.selectedInPopover.length === _ctx.v.control.value.length}]),
                        onClick: _cache[5] || (_cache[5] = vue.withModifiers(function ($event) { return (_ctx.toggleSelectedPopover()); }, ["stop"]))
                      }, {
                        default: vue.withCtx(function () { return [
                          (_ctx.v.selectedInPopover.length === _ctx.v.control.value.length)
                            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, vue.toDisplayString(_ctx.v.selectedInPopover.length) + " items", 1 /* TEXT */))
                            : (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, "+ " + vue.toDisplayString(_ctx.v.selectedInPopover.length), 1 /* TEXT */))
                        ]; }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["class"]))
                    : vue.createCommentVNode("v-if", true),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.v.selected, function (item) {
                    return (vue.openBlock(), vue.createBlock(_component_bt_tag, {
                      class: vue.normalizeClass({hidden: !item.visible}),
                      "data-id": item.choice.id,
                      closable: "",
                      onClose: function ($event) { return (_ctx.deselectChoice(item.choice)); },
                      onClick: _cache[6] || (_cache[6] = vue.withModifiers(function () {}, ["stop"]))
                    }, {
                      default: vue.withCtx(function () { return [
                        vue.createTextVNode(vue.toDisplayString(item.choice.label), 1 /* TEXT */)
                      ]; }),
                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "data-id", "onClose"]))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ], 512 /* NEED_PATCH */)
              ]))
            : vue.createCommentVNode("v-if", true)
        ], 512 /* NEED_PATCH */)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"]),
    vue.createVNode(_component_bt_dropdown, {
      ref: "dropdown",
      class: "bt-form-select-choices",
      style: vue.normalizeStyle({minWidth: _ctx.dropdownWidth + 'px', zIndex: _ctx.v.dropdownZIndex}),
      target: _ctx.dropdownTarget,
      visible: _ctx.v.choicesVisible,
      teleport: _ctx.v.dropdownTeleport,
      "render-hidden": "",
      onMousedown: _cache[9] || (_cache[9] = vue.withModifiers(function () {}, ["prevent"]))
    }, {
      default: vue.withCtx(function () { return [
        vue.createVNode(_component_choice_slot_wrapper, { position: "before" }, {
          default: vue.withCtx(function () { return [
            vue.renderSlot(_ctx.$slots, "choices-before")
          ]; }),
          _: 3 /* FORWARDED */
        }),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.v.choices, function (choices) {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(choices.grouped, function (choices, group) {
              return (vue.openBlock(), vue.createBlock(_component_bt_form_select_group, { label: group }, {
                default: vue.withCtx(function () { return [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(choices, function (choice) {
                    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                      (!choice.external)
                        ? (vue.openBlock(), vue.createBlock(_component_bt_form_select_choice, {
                            key: 0,
                            "internal-choice": choice
                          }, {
                            default: vue.withCtx(function () { return [
                              vue.renderSlot(_ctx.$slots, "choice", { choice: choice }, function () { return [
                                vue.createTextVNode(vue.toDisplayString(choice.label), 1 /* TEXT */)
                              ]; })
                            ]; }),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["internal-choice"]))
                        : vue.createCommentVNode("v-if", true)
                    ], 64 /* STABLE_FRAGMENT */))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ]; }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(choices.standalone, function (choice) {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                (!choice.external)
                  ? (vue.openBlock(), vue.createBlock(_component_bt_form_select_choice, {
                      key: 0,
                      "internal-choice": choice
                    }, {
                      default: vue.withCtx(function () { return [
                        vue.renderSlot(_ctx.$slots, "choice", { choice: choice }, function () { return [
                          vue.createTextVNode(vue.toDisplayString(choice.label), 1 /* TEXT */)
                        ]; })
                      ]; }),
                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["internal-choice"]))
                  : vue.createCommentVNode("v-if", true)
              ], 64 /* STABLE_FRAGMENT */))
            }), 256 /* UNKEYED_FRAGMENT */))
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */)),
        vue.createVNode(_component_choice_slot_wrapper, { position: "after" }, {
          default: vue.withCtx(function () { return [
            vue.renderSlot(_ctx.$slots, "choices"),
            vue.renderSlot(_ctx.$slots, "choices-after")
          ]; }),
          _: 3 /* FORWARDED */
        }),
        (!_ctx.v.visibleChoicesCount && _ctx.v.remoteFetchStatus === 'failed')
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, vue.toDisplayString(_ctx.v.remoteFetchError), 1 /* TEXT */))
          : (!_ctx.v.visibleChoicesCount && _ctx.v.remoteFetchStatus === 'waiting-search')
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
                vue.createElementVNode("span", {
                  innerHTML: _ctx.i18n.searchMinLength.replace('%minLength%', _ctx.v.searchMinLength)
                }, null, 8 /* PROPS */, _hoisted_11)
              ]))
            : (!_ctx.v.visibleChoicesCount && _ctx.v.control.busy)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, [
                  vue.createVNode(_component_bt_progress_circular)
                ]))
              : (!_ctx.v.visibleChoicesCount)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
                    (_ctx.v.searchBuffer.length)
                      ? (vue.openBlock(), vue.createElementBlock("span", {
                          key: 0,
                          innerHTML: _ctx.i18n.noResults
                        }, null, 8 /* PROPS */, _hoisted_14))
                      : (vue.openBlock(), vue.createElementBlock("span", {
                          key: 1,
                          innerHTML: _ctx.i18n.empty
                        }, null, 8 /* PROPS */, _hoisted_15))
                  ]))
                : vue.createCommentVNode("v-if", true)
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["style", "target", "visible", "teleport"]),
    (_ctx.$refs.additionalTagsAggregator)
      ? (vue.openBlock(), vue.createBlock(_component_bt_dropdown, {
          key: 0,
          target: _ctx.$refs.additionalTagsAggregator.$el,
          visible: _ctx.v.selectedPopoverVisible,
          class: "bt-form-select-additional-tags"
        }, {
          default: vue.withCtx(function () { return [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.v.selectedInPopover, function (choice) {
              return (vue.openBlock(), vue.createBlock(_component_bt_tag, {
                closable: "",
                onClose: function ($event) { return (_ctx.deselectChoice(choice)); },
                key: choice.id
              }, {
                default: vue.withCtx(function () { return [
                  vue.createTextVNode(vue.toDisplayString(choice.label), 1 /* TEXT */)
                ]; }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClose"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]; }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["target", "visible"]))
      : vue.createCommentVNode("v-if", true)
  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)), [
    [_directive_bt_bind_theme],
    [_directive_bt_click_outside, _ctx.hideSelectedPopover]
  ])
}

exports.render = render;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _hoisted_1 = ["tabindex", "data-is-multiple", "data-has-value", "data-has-focus", "data-is-disabled"];
var _hoisted_2 = ["multiple", "accept"];
var _hoisted_3 = { class: "inner-wrapper" };
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = { class: "files-queue" };
var _hoisted_6 = { class: "file-details" };
var _hoisted_7 = {
  key: 1,
  class: "error-icon"
};
var _hoisted_8 = { class: "file-details-inner" };
var _hoisted_9 = { class: "file-name" };
var _hoisted_10 = {
  key: 1,
  class: "file-size"
};
var _hoisted_11 = {
  key: 2,
  class: "file-size"
};
var _hoisted_12 = {
  key: 3,
  class: "error-message"
};
var _hoisted_13 = { class: "buttons" };
var _hoisted_14 = {
  key: 0,
  class: "done-icon"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_bt_progress_circular = vue.resolveComponent("bt-progress-circular");
  var _component_i_material_error = vue.resolveComponent("i-material-error");
  var _component_i_material_description = vue.resolveComponent("i-material-description");
  var _component_bt_progress_horizontal = vue.resolveComponent("bt-progress-horizontal");
  var _component_i_material_done = vue.resolveComponent("i-material-done");
  var _component_i_material_file_upload = vue.resolveComponent("i-material-file-upload");
  var _component_bt_button = vue.resolveComponent("bt-button");
  var _component_i_material_stop = vue.resolveComponent("i-material-stop");
  var _component_i_material_close = vue.resolveComponent("i-material-close");
  var _component_bt_form_base_input = vue.resolveComponent("bt-form-base-input");
  var _directive_bt_bind_theme = vue.resolveDirective("bt-bind-theme");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "bt-form-file",
    tabindex: !_ctx.v.control.disabled ? _ctx.v.control.tabIndex : null,
    "data-is-multiple": _ctx.v.multiple ? '' : null,
    "data-has-value": _ctx.v.control.value.length > 0 ? '' : null,
    "data-has-focus": _ctx.v.control.focused ? '' : null,
    "data-is-disabled": _ctx.v.control.disabled ? '' : null,
    onKeydown: _cache[2] || (_cache[2] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return (_ctx.onKeyDown && _ctx.onKeyDown.apply(_ctx, args));
  }),
    onFocus: _cache[3] || (_cache[3] = function ($event) { return (_ctx.v.control.onFocus()); }),
    onBlur: _cache[4] || (_cache[4] = function ($event) { return (_ctx.v.control.onBlur()); })
  }, [
    vue.createVNode(_component_bt_form_base_input, { v: _ctx.v }, {
      label: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "default")
      ]; }),
      help: vue.withCtx(function () { return [
        vue.renderSlot(_ctx.$slots, "help")
      ]; }),
      default: vue.withCtx(function () { return [
        vue.createElementVNode("input", {
          ref: "input",
          type: "file",
          multiple: _ctx.v.multiple ? '' : null,
          accept: _ctx.v.accept,
          "data-file-input": "",
          onChange: _cache[0] || (_cache[0] = function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            return (_ctx.onFileSelectionChange && _ctx.onFileSelectionChange.apply(_ctx, args));
        })
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2),
        vue.createElementVNode("div", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "browse", { browse: _ctx.browse }, function () { return [
            vue.createElementVNode("div", {
              class: "browse",
              onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.browse()); })
            }, [
              vue.renderSlot(_ctx.$slots, "browse-text", {}, function () { return [
                vue.createElementVNode("span", {
                  innerHTML: _ctx.i18n.empty
                }, null, 8 /* PROPS */, _hoisted_4)
              ]; })
            ])
          ]; }),
          vue.createElementVNode("div", _hoisted_5, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.v.control.value, function (formFile) {
              return (vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(["file-item", {error: formFile.failed}])
              }, [
                vue.createElementVNode("div", _hoisted_6, [
                  (formFile.uploading)
                    ? (vue.openBlock(), vue.createBlock(_component_bt_progress_circular, { key: 0 }))
                    : (formFile.failed)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                          vue.createVNode(_component_i_material_error)
                        ]))
                      : (vue.openBlock(), vue.createBlock(_component_i_material_description, { key: 2 })),
                  vue.createElementVNode("div", _hoisted_8, [
                    vue.createElementVNode("div", _hoisted_9, vue.toDisplayString(formFile.filename), 1 /* TEXT */),
                    (formFile.uploading || formFile.paused)
                      ? (vue.openBlock(), vue.createBlock(_component_bt_progress_horizontal, {
                          key: 0,
                          progress: formFile.progress,
                          "show-progress-text": false
                        }, null, 8 /* PROPS */, ["progress"]))
                      : vue.createCommentVNode("v-if", true),
                    (formFile.file)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, vue.toDisplayString(formFile.uploadedSizeText) + " / " + vue.toDisplayString(formFile.totalSizeText) + " (" + vue.toDisplayString(formFile.progress) + "%)", 1 /* TEXT */))
                      : (formFile.totalSize)
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, vue.toDisplayString(formFile.totalSizeText), 1 /* TEXT */))
                        : vue.createCommentVNode("v-if", true),
                    (formFile.failed)
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, vue.toDisplayString(formFile.error), 1 /* TEXT */))
                      : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_13, [
                  (formFile.succeeded)
                    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14, [
                        vue.createVNode(_component_i_material_done)
                      ]))
                    : vue.createCommentVNode("v-if", true),
                  (formFile.paused || formFile.failed)
                    ? (vue.openBlock(), vue.createBlock(_component_bt_button, {
                        key: 1,
                        onClick: function ($event) { return (_ctx.start(formFile)); }
                      }, {
                        default: vue.withCtx(function () { return [
                          vue.createVNode(_component_i_material_file_upload)
                        ]; }),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]))
                    : vue.createCommentVNode("v-if", true),
                  (formFile.uploading)
                    ? (vue.openBlock(), vue.createBlock(_component_bt_button, {
                        key: 2,
                        onClick: function ($event) { return (_ctx.pause(formFile)); }
                      }, {
                        default: vue.withCtx(function () { return [
                          vue.createVNode(_component_i_material_stop)
                        ]; }),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]))
                    : vue.createCommentVNode("v-if", true),
                  vue.createVNode(_component_bt_button, {
                    onClick: function ($event) { return (_ctx.cancel(formFile)); }
                  }, {
                    default: vue.withCtx(function () { return [
                      vue.createVNode(_component_i_material_close)
                    ]; }),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
                ])
              ], 2 /* CLASS */))
            }), 256 /* UNKEYED_FRAGMENT */))
          ])
        ])
      ]; }),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["v"])
  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)), [
    [_directive_bt_bind_theme]
  ])
}

exports.render = render;

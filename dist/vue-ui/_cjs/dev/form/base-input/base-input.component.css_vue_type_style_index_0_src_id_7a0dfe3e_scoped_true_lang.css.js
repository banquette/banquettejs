/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = "\n.bt-form-base-input[data-v-7a0dfe3e] {\n    --form-base-input-text-color: var(--bt-form-base-input-text-color, var(--bt-text-color-base));\n    --form-base-input-label-color: var(--bt-form-base-input-label-color, var(--bt-text-color-light));\n    --form-base-input-help-color: var(--bt-form-base-input-help-color, var(--bt-text-color-light));\n    --form-base-input-help-font-size: var(--bt-form-base-input-help-font-size, var(--bt-font-size-sm));\n    --form-base-input-error-text-color: var(--bt-form-base-input-error-text-color, var(--bt-color-red-500));\n    --form-base-input-error-font-size: var(--bt-form-base-input-error-font-size, var(--bt-font-size-sm));\n    --form-base-input-text-addon-color: var(--bt-form-base-input-text-addon-color, var(--bt-text-color-light));\n\n    --form-base-input-font-family: var(--bt-form-base-input-font-family, var(--bt-font-family-base));\n    --form-base-input-font-size: var(--bt-form-base-input-font-size, var(--bt-font-size-base));\n    --form-base-input-font-weight: var(--bt-form-base-input-font-weight, var(--bt-font-weight-normal));\n\n    --form-base-input-border-radius: var(--bt-form-base-input-border-radius, var(--bt-border-radius-base));\n    --form-base-input-border-width: var(--bt-form-base-input-border-width, var(--bt-border-width-base));\n    --form-base-input-border-style: var(--bt-form-base-input-border-style, var(--bt-border-style-base));\n\n    --form-base-input-border-color: var(--bt-form-base-input-border-color, var(--bt-color-gray-200));\n    --form-base-input-border-focus-width: var(--bt-form-base-input-border-focus-width, var(--form-base-input-border-width));\n    --form-base-input-border-focus-color: var(--bt-form-base-input-border-focus-color, var(--bt-color-primary));\n    --form-base-input-border-error-width: var(--bt-form-base-input-border-error-width, var(--form-base-input-border-width));\n    --form-base-input-border-error-color: var(--bt-form-base-input-border-error-color, var(--bt-color-red-500));\n    --form-base-input-border-disabled-color: var(--bt-form-base-input-border-disabled-color, var(--bt-color-gray-200));\n\n    --form-base-input-background-color: var(--bt-form-base-input-background-color, var(--bt-color-white));\n    --form-base-input-background-disabled-color: var(--bt-form-base-input-background-disabled-color, var(--form-base-input-background-color));\n    --form-base-input-addon-background-color: var(--bt-form-base-input-addon-background-color, var(--bt-color-gray-50));\n\n    --form-base-input-disabled-opacity: var(--bt-form-base-input-disabled-opacity, 0.5);\n\n    --form-base-input-placeholder-x: var(--bt-form-base-input-placeholder-x, 0.8rem);\n    --form-base-input-placeholder-y: var(--bt-form-base-input-placeholder-y, 0.75rem);\n\n    --form-base-input-label-transition-duration: 0.2s;\n}\n.bt-form-base-input {\n    font-family: var(--form-base-input-font-family);\n    font-size: var(--form-base-input-font-size);\n    font-weight: var(--form-base-input-font-weight);\n    color: var(--form-base-input-text-color);\n}\n.bt-form-base-input[data-v-7a0dfe3e] {\n    position: relative;\n    flex-grow: 1;\n}\n.bt-form-base-input > .input-group[data-v-7a0dfe3e] {\n        display: flex;\n        width: 100%;\n        align-items: stretch;\n        position: relative;\n}\n.bt-form-base-input > .input-group > .input[data-v-7a0dfe3e] {\n            width: 100%;\n            display: flex;\n            align-items: center;\n            flex-grow: 1;\n            box-shadow: 0 0 0 var(--form-base-input-border-width) var(--form-base-input-border-color) inset;\n            border-radius: var(--form-base-input-border-radius);\n            background-color: var(--form-base-input-background-color);\n            position: relative;\n}\n.bt-form-base-input[data-v-7a0dfe3e] ::placeholder {\n        color: var(--form-base-input-label-color);\n}\n.bt-form-base-input label[data-v-7a0dfe3e] {\n        display: block;\n        line-height: 1;\n        color: var(--form-base-input-label-color);\n        white-space: nowrap;\n        max-width: calc(100% - (var(--form-base-input-placeholder-x) * 2));\n        text-overflow: ellipsis;\n        overflow: hidden;\n        transition:\n            top var(--form-base-input-label-transition-duration) ease-in-out,\n            font-size var(--form-base-input-label-transition-duration) ease-in-out,\n            transform var(--form-base-input-label-transition-duration) ease-in-out;\n        pointer-events: none;\n        z-index: 3;\n}\n.bt-form-base-input[data-has-floating-label] label[data-v-7a0dfe3e] {\n        position: absolute;\n        background-color: var(--form-base-input-background-color);\n        top: var(--form-base-input-placeholder-y);\n        left: var(--form-base-input-placeholder-x);\n        padding: 0.1em 0.2em 0 0.2em;\n}\n.bt-form-base-input[data-has-after-addon] > .input-group .input[data-v-7a0dfe3e] {\n        box-shadow:\n            var(--form-base-input-border-width) 0 0 0 var(--form-base-input-border-color) inset,\n            0 var(--form-base-input-border-width) 0 0 var(--form-base-input-border-color) inset,\n            0 calc(var(--form-base-input-border-width) * -1) 0 0 var(--form-base-input-border-color) inset;\n}\n.bt-form-base-input[data-has-focus] > .input-group > .input[data-v-7a0dfe3e] {\n            box-shadow:\n                var(--form-base-input-border-focus-width) 0 0 0 var(--form-base-input-border-focus-color) inset,\n                var(--form-base-input-border-focus-width) 0 0 0 var(--form-base-input-border-focus-color),\n                0 var(--form-base-input-border-focus-width) 0 0 var(--form-base-input-border-focus-color) inset,\n                0 calc(var(--form-base-input-border-focus-width) * -1) 0 0 var(--form-base-input-border-focus-color) inset;\n            z-index: 2;\n}\n.bt-form-base-input[data-has-focus] > label[data-v-7a0dfe3e] {\n            color: var(--form-base-input-border-focus-color);\n}\n.bt-form-base-input[data-has-focus]:not([data-has-after-addon]) > .input-group > .input[data-v-7a0dfe3e] {\n            box-shadow: 0 0 0 var(--form-base-input-border-focus-width) var(--form-base-input-border-focus-color) inset;\n}\n.bt-form-base-input[data-has-focus] > label[data-v-7a0dfe3e], .bt-form-base-input[data-has-value] > label[data-v-7a0dfe3e], .bt-form-base-input[data-has-placeholder] > label[data-v-7a0dfe3e], .bt-form-base-input:not([data-has-floating-label]) > label[data-v-7a0dfe3e] {\n            top: 0;\n            font-size: 0.9em;\n            transform: translateY(calc(-50% - var(--form-base-input-border-width)));\n            z-index: 3;\n}\n.bt-form-base-input .placeholder[data-v-7a0dfe3e] {\n        display: block;\n        line-height: 1;\n        color: var(--form-base-input-label-color);\n        pointer-events: none;\n        z-index: 3;\n\n        position: absolute;\n        top: var(--form-base-input-placeholder-y);\n        left: var(--form-base-input-placeholder-x);\n        padding: 0.1em 0;\n\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: calc(100% - (var(--form-base-input-placeholder-x) * 2));\n}\n.bt-form-base-input > .extras[data-v-7a0dfe3e] {\n        display: flex;\n        flex-direction: column;\n        gap: 0.3em;\n        margin-top: 0.3em;\n}\n.bt-form-base-input .asterisk[data-v-7a0dfe3e] {\n        font-size: 0.8em;\n        color: var(--bt-color-red-500);\n}\n/**\n     * Addons\n     */\n.bt-form-base-input .addon[data-v-7a0dfe3e] {\n        display: flex;\n        flex-grow: 0;\n        padding: 0.5em 1em;\n        align-items: center;\n        color: var(--form-base-input-text-addon-color);\n        background: var(--form-base-input-addon-background-color);\n        border-radius: var(--form-base-input-border-radius);\n}\n.bt-form-base-input .before[data-v-7a0dfe3e], .bt-form-base-input .after[data-v-7a0dfe3e] {\n        display: flex;\n        align-items: stretch;\n}\n.bt-form-base-input .before svg[data-v-7a0dfe3e-s], .bt-form-base-input .after svg[data-v-7a0dfe3e-s] {\n            width: 1.3em;\n            height: 1.3em;\n}\n.bt-form-base-input .before svg[data-v-7a0dfe3e-s] path, .bt-form-base-input .after svg[data-v-7a0dfe3e-s] path {\n                fill: var(--form-base-input-text-addon-color);\n}\n.bt-form-base-input[data-has-before-addon] > .input-group > .input[data-v-7a0dfe3e] {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n}\n.bt-form-base-input[data-has-after-addon] > .input-group > .input[data-v-7a0dfe3e] {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n}\n.bt-form-base-input:not([data-has-after-addon]) > .input-group > .input[data-v-7a0dfe3e] {\n        box-shadow: 0 0 0 var(--form-base-input-border-width) var(--form-base-input-border-color) inset;\n}\n.bt-form-base-input .before > .addon[data-v-7a0dfe3e] {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        box-shadow:\n            var(--form-base-input-border-width) 0 0 0 var(--form-base-input-border-color) inset,\n            0 var(--form-base-input-border-width) 0 0 var(--form-base-input-border-color) inset,\n            0 calc(var(--form-base-input-border-width) * -1) 0 0 var(--form-base-input-border-color) inset;\n}\n.bt-form-base-input .after > .addon[data-v-7a0dfe3e] {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        box-shadow: 0 0 0 var(--form-base-input-border-width) var(--form-base-input-border-color) inset;\n}\n.bt-form-base-input .before > .addon[data-v-7a0dfe3e]:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n}\n.bt-form-base-input .after > .addon[data-v-7a0dfe3e]:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n}\n/**\n     * Floating extras\n     */\n.bt-form-base-input .floating-extras[data-v-7a0dfe3e] {\n        position: relative;\n        padding-right: 0.75em;\n        display: flex;\n        align-items: center;\n        gap: 0.4em;\n        pointer-events: none;\n}\n.bt-form-base-input .floating-extras > *[data-v-7a0dfe3e] {\n            pointer-events: auto;\n}\n.bt-form-base-input .floating-extras[data-v-7a0dfe3e]:empty {\n            display: none;\n}\n/**\n     * Working\n     */\n.bt-form-base-input[data-v-7a0dfe3e] .bt-progress-circular {\n        --bt-progress-circular-size: 1em;\n        --bt-progress-circular-fill: none;\n        --bt-progress-circular-stroke-color: var(--bt-color-gray-600);\n}\n/**\n     * Disabled\n     */\n.bt-form-base-input[data-is-disabled][data-has-floating-label] > label[data-v-7a0dfe3e] {\n            background-color: var(--form-base-input-background-disabled-color);\n}\n.bt-form-base-input[data-is-disabled] > .input-group > .input[data-v-7a0dfe3e] {\n            opacity: var(--form-base-input-disabled-opacity);\n            border-color: var(--form-base-input-border-disabled-color);\n            background-color: var(--form-base-input-background-disabled-color);\n            cursor: not-allowed;\n}\n/**\n     * Error\n     */\n.bt-form-base-input[data-has-error] > .input-group > .input[data-v-7a0dfe3e] {\n            box-shadow:\n                var(--form-base-input-border-error-width) 0 0 0 var(--form-base-input-border-error-color) inset,\n                var(--form-base-input-border-error-width) 0 0 0 var(--form-base-input-border-error-color),\n                0 var(--form-base-input-border-error-width) 0 0 var(--form-base-input-border-error-color) inset,\n                0 calc(var(--form-base-input-border-error-width) * -1) 0 0 var(--form-base-input-border-error-color) inset;\n            z-index: 1;\n}\n.bt-form-base-input[data-has-error] > label[data-v-7a0dfe3e] {\n            color: var(--form-base-input-border-error-color);\n}\n.bt-form-base-input[data-has-error] > .extras > .error[data-v-7a0dfe3e] {\n            color: var(--form-base-input-error-text-color);\n            font-size: var(--form-base-input-error-font-size);\n}\n.bt-form-base-input[data-has-error]:not([data-has-after-addon]) > .input-group > .input[data-v-7a0dfe3e] {\n            box-shadow: 0 0 0 var(--form-base-input-border-error-width) var(--form-base-input-border-error-color) inset;\n}\n.bt-form-base-input .error-icon[data-v-7a0dfe3e] svg {\n        fill: var(--form-base-input-error-text-color);\n}\n.bt-form-base-input-errors-popover {\n        --bt-popover-background-color: var(--bt-color-red);\n        --bt-popover-border-color: var(--bt-color-red);\n        --bt-popover-text-color: var(--bt-color-red-contrast);\n}\n/**\n     * Help\n     */\n.bt-form-base-input .help-icon[data-v-7a0dfe3e] svg {\n        fill: var(--form-base-input-help-color);\n}\n.bt-form-base-input .help[data-v-7a0dfe3e] {\n        color: var(--form-base-input-help-color);\n        font-size: var(--form-base-input-help-font-size);\n}\n\n/**\n * Sub base inputs (as addon).\n */\n.bt-form-base-input .after .bt-form-base-input > .input-group > .input {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = ".bt-dialog[data-v-61e6a683] {\n    --dialog-header-font-family: var(--bt-dialog-header-font-family, var(--bt-font-family-base));\n    --dialog-header-font-size: var(--bt-dialog-header-font-size, var(--bt-font-size-lg));\n    --dialog-header-font-weight: var(--bt-dialog-header-font-weight, var(--bt-font-weight-semibold));\n    --dialog-header-text-color: var(--bt-dialog-header-text-color, var(--bt-text-color-base));\n\n    --dialog-background: var(--bt-dialog-background, var(--bt-color-white));\n    --dialog-border-radius: var(--bt-dialog-border-radius, var(--bt-border-radius-base));\n    --dialog-shadow: var(--bt-dialog-shadow, var(--bt-shadow-dialog));\n\n    --dialog-border-color: var(--bt-dialog-border-color, var(--bt-color-gray-50));\n    --dialog-border-style: var(--bt-dialog-border-style, var(--bt-border-style-base));\n    --dialog-border-width: var(--bt-dialog-border-width, var(--bt-border-width-base));\n\n    --dialog-min-width: var(--bt-dialog-min-width, 30%);\n    --dialog-min-height: var(--bt-dialog-min-height, none);\n    --dialog-max-width: var(--bt-dialog-max-width, 80%);\n    --dialog-max-height: var(--bt-dialog-max-height, 50vh);\n}\n.bt-dialog[data-v-61e6a683] {\n    pointer-events: none;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay {\n        pointer-events: none;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay:not([data-is-disabled]) {\n            pointer-events: all;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner {\n            min-width: var(--dialog-min-width);\n            max-width: var(--dialog-max-width);\n            pointer-events: none;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner {\n                display: flex;\n                flex-direction: column;\n                background: var(--dialog-background);\n                border-radius: var(--dialog-border-radius);\n                min-height: var(--dialog-min-height);\n                max-height: var(--dialog-max-height);\n                box-shadow: var(--dialog-shadow);\n                border-width: var(--dialog-border-width);\n                border-style: var(--dialog-border-style);\n                border-color: var(--dialog-border-color);\n                pointer-events: all;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .header, .bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .footer {\n                    display: flex;\n                    align-items: center;\n                    padding: 1em;\n                    color: var(--dialog-header-text-color);\n                    font-family: var(--dialog-header-font-family);\n                    font-size: var(--dialog-header-font-size);\n                    font-weight: var(--dialog-header-font-weight);\n                    flex-shrink: 0;\n                    flex-grow: 0;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .header {\n                    position: relative;\n                    justify-content: space-between;\n                    border-bottom: 1px solid var(--dialog-border-color);\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .header > .close-icon {\n                        position: absolute;\n                        display: flex;\n                        align-items: center;\n                        right: 1em;\n                        top: 0;\n                        bottom: 0;\n                        width: 1em;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .header > .close-icon svg {\n                            cursor: pointer;\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .header > .close-icon svg path {\n                                fill: var(--bt-color-gray-500);\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .footer {\n                    justify-content: flex-end;\n                    gap: 0.5em;\n                    border-top: 1px solid var(--dialog-border-color);\n}\n.bt-dialog[data-v-61e6a683] .bt-overlay > .inner .bt-dialog-inner > .body {\n                    padding: 20px;\n                    flex-grow: 1;\n                    overflow: auto;\n}\n.bt-dialog[data-is-draggable][data-v-61e6a683] .bt-overlay .inner .bt-dialog-inner .header {\n        cursor: move;\n}\n.bt-dialog[data-is-dragging][data-v-61e6a683] {\n        user-select: none;\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;
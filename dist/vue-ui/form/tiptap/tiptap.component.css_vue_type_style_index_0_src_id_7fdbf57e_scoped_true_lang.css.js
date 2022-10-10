/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import styleInject from 'style-inject';

var css_248z = ".bt-form-tiptap[data-v-7fdbf57e] {\n    --form-tiptap-toolbar-button-text-color: var(--bt-form-tiptap-toolbar-button-text-color, var(--bt-text-color-light));\n    --form-tiptap-toolbar-button-text-active-color: var(--bt-form-tiptap-toolbar-button-text-active-color, var(--bt-text-color-base));\n    --form-tiptap-toolbar-button-text-disabled-color: var(--bt-form-tiptap-toolbar-button-text-disabled-color, var(--bt-text-color-lighter));\n    --form-tiptap-toolbar-button-background-color: var(--bt-form-tiptap-toolbar-button-background-color, none);\n    --form-tiptap-toolbar-button-background-hover-color: var(--bt-form-tiptap-toolbar-button-hover-background-color, var(--bt-color-gray-50));\n    --form-tiptap-toolbar-button-background-focus-color: var(--bt-form-tiptap-toolbar-button-background-focus-color, var(--bt-color-gray-50));\n    --form-tiptap-toolbar-button-background-active-color: var(--bt-form-tiptap-toolbar-button-background-active-color, var(--bt-color-gray-50));\n    --form-tiptap-toolbar-button-background-disabled-color: var(--bt-form-tiptap-toolbar-button-background-disabled-color, none);\n\n    --form-tiptap-done-icon-color: var(--bt-form-tiptap-done-icon-color, var(--bt-color-green-500));\n\n    --form-tiptap-padding-x: var(--bt-form-tiptap-padding-x, 1em);\n    --form-tiptap-padding-y: var(--bt-form-tiptap-padding-y, 0.8em);\n}\n.bt-form-tiptap[data-v-7fdbf57e] .bt-form-base-input {\n    --bt-form-base-input-text-color: var(--bt-form-tiptap-text-color);\n    --bt-form-base-input-label-color: var(--bt-form-tiptap-label-color);\n    --bt-form-base-input-help-color: var(--bt-form-tiptap-help-color);\n    --bt-form-base-input-help-font-size: var(--bt-form-tiptap-help-font-size);\n    --bt-form-base-input-error-text-color: var(--bt-form-tiptap-error-text-color);\n    --bt-form-base-input-error-font-size: var(--bt-form-tiptap-error-font-size);\n    --bt-form-base-input-text-addon-color: var(--bt-form-tiptap-text-addon-color);\n\n    --bt-form-base-input-font-family: var(--bt-form-tiptap-font-family);\n    --bt-form-base-input-font-size: var(--bt-form-tiptap-font-size);\n    --bt-form-base-input-font-weight: var(--bt-form-tiptap-font-weight);\n\n    --bt-form-base-input-border-color: var(--bt-form-tiptap-border-color);\n    --bt-form-base-input-border-focus-color: var(--bt-form-tiptap-border-focus-color);\n    --bt-form-base-input-border-error-color: var(--bt-form-tiptap-border-error-color);\n    --bt-form-base-input-border-disabled-color: var(--bt-form-tiptap-border-disabled-color);\n\n    --bt-form-base-input-background-color: var(--bt-form-tiptap-background-color);\n    --bt-form-base-input-background-disabled-color: var(--bt-form-tiptap-background-disabled-color);\n    --bt-form-base-input-addon-background-color: var(--bt-form-tiptap-addon-background-color);\n\n    --bt-form-base-input-border-radius: var(--bt-form-tiptap-border-radius);\n    --bt-form-base-input-border-width: var(--bt-form-tiptap-border-width);\n    --bt-form-base-input-border-style: var(--bt-form-tiptap-border-style);\n}\n.bt-form-tiptap .inner-wrapper[data-v-7fdbf57e] {\n        width: 100%;\n        position: relative;\n}\n.bt-form-tiptap .toolbars .toolbar[data-v-7fdbf57e] {\n            display: flex;\n            flex-wrap: wrap;\n}\n.bt-form-tiptap .toolbars .toolbar .item-wrapper[data-v-7fdbf57e] {\n                border-bottom: 1px solid var(--bt-color-gray-100);\n                height: 3em;\n                flex-grow: 1;\n                display: flex;\n                align-items: stretch;\n                padding: 0.4em 0 0.4em 0.4em;\n}\n.bt-form-tiptap .toolbars .toolbar[data-v-7fdbf57e]::after{\n                content: \" \";\n                flex: 100;\n                border-bottom: 1px solid var(--bt-color-gray-100);\n}\n.bt-form-tiptap .toolbars .toolbar[data-v-7fdbf57e] .bt-button.toolbar-button {\n                --button-border-width: 0;\n                --button-text-color: var(--form-tiptap-toolbar-button-text-color);\n                --button-text-disabled-color: var(--form-tiptap-toolbar-button-text-disabled-color);\n                --button-background-color: var(--form-tiptap-toolbar-button-background-color);\n                --button-background-hover-color: var(--form-tiptap-toolbar-button-background-hover-color);\n                --button-background-focus-color: var(--form-tiptap-toolbar-button-background-focus-color);\n                --button-background-active-color: var(--form-tiptap-toolbar-button-background-active-color);\n                --button-background-disabled-color: var(--form-tiptap-toolbar-button-background-disabled-color);\n                --button-font-size: 1em;\n                --button-padding-x: 0.9em;\n                --button-padding-y: 0.75em;\n}\n.bt-form-tiptap .toolbars .toolbar[data-v-7fdbf57e] .bt-button.toolbar-button[data-active] {\n                    --button-text-color: var(--form-tiptap-toolbar-button-text-active-color);\n                    --button-background-color: var(--form-tiptap-toolbar-button-background-active-color);\n}\n.bt-form-tiptap .editor-content[data-v-7fdbf57e] {\n        width: 100%;\n}\n.bt-form-tiptap .editor-content[data-v-7fdbf57e] >  [contenteditable] {\n            outline: none;\n            padding: var(--form-tiptap-padding-x) var(--form-tiptap-padding-y);\n}\n";
styleInject(css_248z);

export { css_248z as default };

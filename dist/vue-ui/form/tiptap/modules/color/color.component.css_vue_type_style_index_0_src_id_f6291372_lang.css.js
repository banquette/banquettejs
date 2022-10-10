/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import styleInject from 'style-inject';

var css_248z = ".bt-form-tiptap-color-dropdown {\n    --form-tiptap-color-border-radius: var(--bt-form-tiptap-color-border-radius, var(--bt-border-radius-base));\n}\n.bt-form-tiptap-color-dropdown .wrapper {\n        padding: 0.3em 1em;\n        display: flex;\n        gap: 1em;\n}\n.bt-form-tiptap-color-dropdown .column {\n        display: flex;\n        flex-direction: column;\n        gap: 0.4em;\n}\n.bt-form-tiptap-color-dropdown .column + .column {\n            border-left: 1px solid var(--bt-color-gray-100);\n            padding-left: 1em;\n}\n.bt-form-tiptap-color-dropdown .palette {\n        display: flex;\n        gap: 0.4em;\n}\n.bt-form-tiptap-color-dropdown .color {\n        width: 16px;\n        height: 16px;\n        display: inline-block;\n        border-radius: var(--form-tiptap-color-border-radius);\n}\n.bt-form-tiptap-color-dropdown .color:hover {\n            cursor: pointer;\n            transform: scale(1.1);\n}\n.bt-form-tiptap-color-dropdown .color[data-active] {\n            border: 2px solid #fff;\n            outline: 1px solid #000;\n}\n";
styleInject(css_248z);

export { css_248z as default };

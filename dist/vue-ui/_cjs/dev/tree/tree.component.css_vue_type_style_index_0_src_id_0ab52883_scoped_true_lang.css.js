/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = "\n.bt-tree[data-v-0ab52883] {\n    --tree-item-text-color: var(--bt-tree-item-text-color, var(--bt-text-color-base));\n    --tree-item-text-hover-color: var(--bt-tree-item-text-hover-color, var(--tag-text-color));\n\n    --tree-item-font-family: var(--bt-tree-item-font-family, var(--bt-font-family-base));\n    --tree-item-font-size: var(--bt-tree-item-font-size, var(--bt-font-size-sm));\n    --tree-item-font-weight: var(--bt-tree-item-font-weight, var(--bt-font-weight-normal));\n\n    --tree-item-background-color: var(--bt-tree-item-background-color, transparent);\n    --tree-item-background-hover-color: var(--bt-tree-item-background-hover-color, var(--bt-color-gray-50));\n\n    --tree-item-icon-color: var(--bt-tree-item-background-color, var(--bt-text-color-light));\n\n    --tree-item-disabled-opacity: var(--bt-tree-item-disabled-opacity, 0.5);\n}\n.bt-tree[data-v-0ab52883] {\n    width: 100%;\n}\n.bt-tree .bt-tree-item > .title[data-v-0ab52883] {\n            display: flex;\n            align-items: center;\n            color: var(--tree-item-text-color);\n            background: var(--tree-item-background-color);\n            gap: 0.4em;\n            padding: 0.1em;\n            border-radius: 4px;\n            cursor: pointer;\n\n            --bt-progress-circular-size: 1em;\n}\n.bt-tree .bt-tree-item > .title[data-v-0ab52883]:hover {\n                background: var(--tree-item-background-hover-color);\n}\n.bt-tree .bt-tree-item > .title > .addon[data-v-0ab52883] {\n                width: 24px;\n                height: 24px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n}\n.bt-tree .bt-tree-item > .title > .addon svg[data-v-0ab52883] {\n                    fill: var(--tree-item-icon-color);\n                    transform: rotateZ(-90deg);\n                    transform-origin: center;\n}\n.bt-tree .bt-tree-item .items-wrapper[data-v-0ab52883] {\n            transition: height 200ms ease-in-out, width 3s ease-out;\n}\n.bt-tree .bt-tree-item .unknown-text[data-v-0ab52883] {\n            color: var(--tree-item-icon-color);\n}\n.bt-tree .bt-tree-item[data-is-expanded] > .title > .addon svg[data-v-0ab52883] {\n                transform: rotateZ(0);\n}\n.bt-tree .bt-tree-item[data-is-expanded] > .items-wrapper[data-v-0ab52883] {\n                display: block;\n}\n.bt-tree .bt-tree-item[data-is-empty] > .title > .addon svg[data-v-0ab52883] {\n                opacity: 0;\n}\n.bt-tree .bt-tree-item[data-is-disabled][data-v-0ab52883] {\n            opacity: var(--tree-item-disabled-opacity);\n}\n.bt-tree .bt-tree-item[data-is-disabled] > .title[data-v-0ab52883] {\n                cursor: not-allowed;\n}\n.bt-tree > .bt-tree-item[data-v-0ab52883] {\n        margin: 0;\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

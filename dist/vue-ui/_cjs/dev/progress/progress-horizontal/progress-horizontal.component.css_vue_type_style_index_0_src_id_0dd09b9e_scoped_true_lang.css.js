/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = ".bt-progress-horizontal[data-v-0dd09b9e] {\n    --progress-horizontal-background-color: var(--bt-progress-horizontal-background-color, var(--bt-color-gray-50));\n    --progress-horizontal-value-background-color: var(--bt-progress-horizontal-value-background-color, var(--bt-color-primary));\n    --progress-horizontal-value-text-color: var(--bt-progress-horizontal-value-text-color, var(--bt-color-primary-contrast));\n    --progress-horizontal-height: var(--bt-progress-horizontal-height, 8px);\n    --progress-horizontal-border-radius: var(--bt-progress-horizontal-border-radius, var(--bt-border-radius-sm));\n\n    --progress-horizontal-indeterminate-animation-duration: var(--bt-progress-horizontal-indeterminate-animation-duration, 1s);\n    --progress-horizontal-determinate-animation-duration: var(--bt-progress-horizontal-determinate-animation-duration, 0.3s);\n}\n.bt-progress-horizontal[data-v-0dd09b9e] {\n    width: 100%;\n    height: var(--progress-horizontal-height);\n    background: var(--progress-horizontal-background-color);\n    border-radius: var(--progress-horizontal-border-radius);\n    position: relative;\n}\n.bt-progress-horizontal > .value[data-v-0dd09b9e] {\n        height: 100%;\n        background: var(--progress-horizontal-value-background-color);\n        border-radius: var(--progress-horizontal-border-radius);\n        text-align: right;\n}\n.bt-progress-horizontal > .value > .text[data-v-0dd09b9e] {\n            transform: translate(0, var(--progress-horizontal-height));\n            color: var(--progress-horizontal-value-background-color);\n            font-weight: bold;\n            display: inline-block;\n            font-size: 0.8em;\n}\n.bt-progress-horizontal[data-indeterminate][data-v-0dd09b9e] {\n        overflow: hidden;\n}\n.bt-progress-horizontal[data-indeterminate] > .value[data-v-0dd09b9e] {\n            width: 100%;\n            animation: indeterminate-0dd09b9e var(--progress-horizontal-indeterminate-animation-duration) infinite linear;\n            transform-origin: 0 50%;\n}\n.bt-progress-horizontal:not([data-indeterminate]) > .value[data-v-0dd09b9e] {\n        transition: width var(--progress-horizontal-determinate-animation-duration) ease-out;\n}\n@keyframes indeterminate-0dd09b9e {\n0% {\n        transform:  translateX(0) scaleX(0);\n}\n40% {\n        transform:  translateX(0) scaleX(0.4);\n}\n100% {\n        transform:  translateX(100%) scaleX(0.5);\n}\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

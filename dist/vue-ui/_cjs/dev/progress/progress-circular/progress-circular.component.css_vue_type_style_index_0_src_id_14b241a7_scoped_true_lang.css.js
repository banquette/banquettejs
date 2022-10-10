/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = "\n.bt-progress-circular[data-v-14b241a7] {\n    --progress-circular-font-family: var(--bt-progress-circular-font-size, var(--bt-font-family-base));\n    --progress-circular-font-size: var(--bt-progress-circular-font-size, 0.25em);\n    --progress-circular-font-weight: var(--bt-progress-circular-font-size, var(--bt-font-weight-normal));\n    --progress-circular-text-color: var(--bt-progress-circular-text-color, inherit);\n\n    --progress-circular-size: var(--bt-progress-circular-size, 1em);\n    --progress-circular-fill: var(--bt-progress-circular-fill, none);\n    --progress-circular-stroke-color: var(--bt-progress-circular-stroke-color, var(--bt-color-primary));\n}\n.bt-progress-circular[data-v-14b241a7] {\n    line-height: 0;\n}\n.bt-progress-circular .inner[data-v-14b241a7] {\n        position: relative;\n        display: inline-block;\n}\n.bt-progress-circular .inner .progress[data-v-14b241a7] {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font-family: var(--progress-circular-font-family);\n            font-size: var(--progress-circular-font-size);\n            font-weight: var(--progress-circular-font-weight);\n            color: var(--progress-circular-text-color);\n}\n.bt-progress-circular :not(.indeterminate) .path[data-v-14b241a7] {\n        transition: stroke-dasharray 0.3s ease-out;\n}\n.bt-progress-circular .indeterminate[data-v-14b241a7] {\n        animation: 1.4s linear 0s infinite normal none running rotate-14b241a7;\n}\n.bt-progress-circular .indeterminate .path[data-v-14b241a7] {\n            animation: dasharray-14b241a7 1.4s ease-in-out infinite;\n}\n.bt-progress-circular svg[data-v-14b241a7] {\n        width: var(--progress-circular-size);\n        height: var(--progress-circular-size);\n}\n.bt-progress-circular svg .path[data-v-14b241a7] {\n            fill: var(--progress-circular-fill, none);\n            stroke: var(--progress-circular-stroke-color);\n}\n@keyframes rotate-14b241a7 {\n0% {\n        transform:rotate(0deg);\n}\n100% {\n        transform:rotate(360deg);\n}\n}\n@keyframes dasharray-14b241a7 {\n0% {\n        stroke-dasharray: 1, 100;\n        stroke-dashoffset: 0;\n}\n50% {\n        stroke-dasharray: 100, 100;\n        stroke-dashoffset: -20px;\n}\n100% {\n        stroke-dasharray: 100, 100;\n        stroke-dashoffset: -100px;\n}\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

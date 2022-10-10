/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = ".bt-overlay[data-v-0d79bd36] {\n    --overlay-background-color: var(--bt-overlay-background-color, rgba(0, 0, 0, 0.5));\n    --overlay-z-index: var(--bt-overlay, var(--bt-z-index-overlay));\n}\n.bt-overlay[data-v-0d79bd36] {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    overflow: auto;\n    z-index: var(--overlay-z-index);\n    background-color: var(--overlay-background-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.bt-overlay[data-is-disabled][data-v-0d79bd36] {\n        pointer-events: none;\n        background: none;\n}\n.bt-overlay[data-is-disabled] > .inner[data-v-0d79bd36] {\n            pointer-events: initial;\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

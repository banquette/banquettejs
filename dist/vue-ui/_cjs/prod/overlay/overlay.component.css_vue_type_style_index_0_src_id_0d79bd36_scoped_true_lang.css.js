/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var e=".bt-overlay[data-v-0d79bd36] {\n    --overlay-background-color: var(--bt-overlay-background-color, rgba(0, 0, 0, 0.5));\n    --overlay-z-index: var(--bt-overlay, var(--bt-z-index-overlay));\n}\n.bt-overlay[data-v-0d79bd36] {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    overflow: auto;\n    z-index: var(--overlay-z-index);\n    background-color: var(--overlay-background-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.bt-overlay[data-is-disabled][data-v-0d79bd36] {\n        pointer-events: none;\n        background: none;\n}\n.bt-overlay[data-is-disabled] > .inner[data-v-0d79bd36] {\n            pointer-events: initial;\n}\n";_interopDefaultLegacy(require('style-inject')).default(e),module.exports=e;

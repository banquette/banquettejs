/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = ".bt-table[data-v-d4d148be] {\n    /* body */\n    --spacing: var(--bqt-spacing, 1.25rem);\n    --spacing-s: var(--bqt-spacing-s, .3rem);\n\n    /* headings */\n    --spacing-head: var(--bqt-spacing-head, 1.25rem);\n    --spacing-head-s: var(--bqt-spacing-head-s, 1rem);\n\n    /* global */\n    --bg: var(--bqt-list-bg, #fff);\n    --radius: var(--bqt-list-radius, .75rem);\n    --border-color: var(--bqt-list-border-color, hsla(168, 2%, 50%, .15));\n    --shadow: var(--bqt-list-shadow, 0 1rem 2rem rgb(0 0 0 / 2%));\n    --th-size: var(--bqt-list-th-size, .825rem);\n    --th-color: var(--bqt-list-th-color, hsla(168, 2%, 50%, .75));\n    --th-align: var(--bqt-list-th-align, initial);\n    --th-weight: var(--bqt-list-th-weight, 500);\n    --th-tracking: var(--bqt-list-th-tracking, .075rem);\n    --th-text-transform: var(--bqt-list-th-text-transform, uppercase);\n\n    width: 100%;\n}\n.bt-table table[data-v-d4d148be] {\n        width: 100%;\n        background: var(--bg);\n        border-radius: var(--radius);\n}\n.bt-table:not(.shadow-none) table[data-v-d4d148be] {\n        box-shadow: var(--shadow);\n}\n.bt-table td[data-v-d4d148be],\n    .bt-table th[data-v-d4d148be]:not(:empty) {\n        padding: var(--spacing-head-s) var(--spacing-head);\n}\n.bt-table th[data-v-d4d148be] {\n        color: var(--th-color);\n        text-transform: var(--th-text-transform);\n        font-size: var(--th-size);\n        text-align: var(--th-align);\n        font-weight: var(--th-weight);\n        letter-spacing: var(--th-tracking);\n}\n.bt-table th .ordering[data-v-d4d148be] {\n            font-weight: bold;\n            display: flex;\n            align-items: center;\n}\n.bt-table th .ordering > * + *[data-v-d4d148be] {\n                margin-left: var(--th-size);\n}\n.bt-table th .ordering[data-v-d4d148be]:hover {\n                opacity: .8;\n}\n.bt-table tbody tr[data-v-d4d148be]:not(.details),\n    .bt-table thead tr[data-v-d4d148be]:not([data-pagination]),\n    .bt-table tfoot[data-v-d4d148be] {\n        border-top: 1px solid var(--border-color);\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

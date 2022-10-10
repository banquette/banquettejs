/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";function _interopDefaultLegacy(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var a='.bt-table-pagination[data-v-75e8917c] {\n    --size: var(--bqt-pagination-size, 1.575rem);\n    --spacing: var(--bqt-pagination-spacing, .5rem);\n    --radius: var(--bqt-pagination-radius, .5rem);\n    --bg: var(--bqt-pagination-bg, hsla(168, 2%, 50%, .15));\n    --bg-hover: var(--bqt-pagination-bg-hover, hsla(168, 2%, 50%, .25));\n    --font-size: var(--bqt-pagination-font-size, .75rem);\n    --font-style: var(--bqt-pagination-font-style, bold);\n    --color: var(--bqt-pagination-color, hsla(168, 2%, 50%, 1));\n    --form-spacing: var(--bqt-pagination-form-spacing, .25rem);\n    --form-spacing-s: var(--bqt-pagination-form-spacing-s, 0);\n    --control-spacing: var(--bqt-pagination-control-spacing, .25rem);\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.bt-table-pagination .summary[data-v-75e8917c] {\n        font-size: calc(var(--font-size) * 1.15);\n        color: var(--color);\n}\n.bt-table-pagination .actions[data-v-75e8917c],\n    .bt-table-pagination .actions ul[data-v-75e8917c],\n    .bt-table-pagination .actions li[data-v-75e8917c],\n    .bt-table-pagination .actions li a[data-v-75e8917c] {\n        display: flex;\n        align-items: center;\n}\n.bt-table-pagination .actions[data-v-75e8917c] {\n        gap: 1.5rem;\n        margin-left: auto;\n}\n.bt-table-pagination .actions ul[data-v-75e8917c] {\n        gap: var(--spacing);\n}\n.bt-table-pagination li[data-v-75e8917c] {\n        min-width: var(--size);\n}\n.bt-table-pagination li:not(.page-item) a[data-v-75e8917c] {\n            padding-inline: var(--spacing);\n}\n.bt-table-pagination li:not(.page-item) a[data-current][data-v-75e8917c] {\n                background: #fff;\n                border-color: #5e5e5e;\n}\n.bt-table-pagination li[data-v-75e8917c]:not(.first-last) {\n        font-size: var(--font-size);\n        height: var(--size);\n        background-color: var(--bg);\n        border-radius: var(--radius);\n        font-weight: var(--font-style);\n}\n.bt-table-pagination li:not(.first-last) a[data-v-75e8917c] {\n            width: 100%;\n            height: 100%;\n            justify-content: center;\n}\n.bt-table-pagination li[data-v-75e8917c]:not(.first-last):hover {\n            --bg: var(--bg-hover);\n}\n.bt-table-pagination .first-last[data-v-75e8917c] {\n        transition: all .1s ease-in;\n}\n.bt-table-pagination .first-last svg[data-v-75e8917c] {\n            width: var(--size);\n            color: var(--color);\n            fill: currentColor;\n}\n.bt-table-pagination .first-last[data-v-75e8917c]:hover {\n            transform: translateX(-2px);\n}\n.bt-table-pagination .first-last.last[data-v-75e8917c]:hover {\n                transform: translateX(2px);\n}\n.bt-table-pagination .first-last.last svg[data-v-75e8917c] {\n                transform: scaleX(-1);\n}\n.bt-table-pagination [data-clickable="false"][data-v-75e8917c] {\n        opacity: .5;\n        pointer-events: none;\n}\n';_interopDefaultLegacy(require('style-inject')).default(a),module.exports=a;

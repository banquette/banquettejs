/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var styleInject = require('style-inject');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styleInject__default = /*#__PURE__*/_interopDefaultLegacy(styleInject);

var css_248z = "/**\n * Unscoped styles so override sub components (input, select).\n */\n.bt-table-pagination {\n    --bqt-spacing-s: var(--form-spacing-s);\n    --bqt-spacing: var(--form-spacing);\n    --bqt-control-spacing: var(--control-spacing);\n    --bqt-control-size: var(--size);\n    --bqt-radius: var(--radius);\n    --bqt-dropdown-align: center;\n    --bqt-dropdown-size: 3rem;\n}\n.bt-table-pagination .bt-form-text {\n        height: 100%;\n        width: 100%;\n        --x73pwbop: 0 !important;\n}\n.bt-table-pagination .bt-form-text .control-wrapper,\n        .bt-table-pagination .bt-form-text .input-wrapper {\n            height: 100%;\n}\n.bt-table-pagination .bt-form-text .control-wrapper {\n            width: calc(var(--length, 3ch) + 1em);\n}\n.bt-table-pagination .bt-form-text [data-control] {\n            width: var(--length, 3ch);\n            min-width: 3ch;\n            height: 100%;\n            text-align: center;\n            padding: .5em;\n            font-weight: var(--font-style);\n}\n.bt-table-pagination .bt-form-select {\n        --font-size: 87.5%;\n        width: auto;\n}\n.bt-table-pagination .bt-form-select .control-wrapper {\n            --x73pwbop: .3rem .2rem .3rem .5rem;\n            --yvwfinhn: .95em;\n}\n";
styleInject__default["default"](css_248z);

module.exports = css_248z;

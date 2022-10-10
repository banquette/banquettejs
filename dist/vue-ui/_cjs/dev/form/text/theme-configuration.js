/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var themeConfiguration = require('../base-input/theme-configuration.js');

var ThemeConfiguration = {
    css: {
        vars: _tslib.__assign(_tslib.__assign({}, themeConfiguration.BaseVars), {
            paddingX: '@-padding-x',
            paddingY: '@-padding-y',
            height: '@-height',
            lineHeight: '@-line-height',
            clearIconColor: '@-clear-icon-color'
        }),
        selectors: {
            root: '&',
            label: '&:deep(.bt-form-text > .bt-form-base-input > label)',
            help: '&:deep(.bt-form-text > .bt-form-base-input > .extras > .help)',
            inputGroup: '&:deep(.bt-form-text > .bt-form-base-input > .input-group)',
            before: '&:deep(.bt-form-text > .bt-form-base-input > .input-group > .before > .addon)',
            after: '&:deep(.bt-form-text > .bt-form-base-input > .input-group > .after > .addon)',
            floatingExtras: '&:deep(.bt-form-text > .bt-form-base-input > .input-group > .input > .floating-extras)',
            input: '&:deep(.bt-form-text > .bt-form-base-input > .input-group > .input)'
        }
    }
};

exports.ThemeConfiguration = ThemeConfiguration;

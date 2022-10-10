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
            size: '@-size',
            borderRadius: '@-border-radius',
            backgroundColor: '@-background-color',
            backgroundCheckedColor: '@-background-checked-color',
            outlineColor: '@-outline-color',
            outlineHoverColor: '@-outline-hover-color',
            outlineFocusedColor: '@-outline-focused-color',
            outlineCheckedColor: '@-outline-checked-color',
            outlineWidth: '@-outline-width',
            outlineHoverWidth: '@-outline-hover-width',
            outlineFocusedWidth: '@-outline-focused-width',
            outlineCheckedWidth: '@-outline-checked-width',
            iconColor: '@-icon-color',
            errorColor: '@-error-color'
        }),
        selectors: {
            root: '&',
            label: '&:deep(.bt-form-checkbox > .bt-form-base-input > label)',
            help: '&:deep(.bt-form-checkbox > .bt-form-base-input > .extras > .help)',
            inputGroup: '&:deep(.bt-form-checkbox > .bt-form-base-input > .input-group)',
            input: '&:deep(.bt-form-checkbox > .bt-form-base-input > .input-group > .input)'
        }
    }
};

exports.ThemeConfiguration = ThemeConfiguration;

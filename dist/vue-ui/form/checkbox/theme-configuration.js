/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from '../../_virtual/_tslib.js';
import { BaseVars } from '../base-input/theme-configuration.js';

var ThemeConfiguration = {
    css: {
        vars: __assign(__assign({}, BaseVars), {
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

export { ThemeConfiguration };

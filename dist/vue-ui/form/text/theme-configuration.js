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

export { ThemeConfiguration };

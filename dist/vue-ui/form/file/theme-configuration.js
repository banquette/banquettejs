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
            browseBorderColor: '@-browse-border-color',
            doneIconColor: '@-done-icon-color',
            // File item
            itemBorderWidth: '@-item-border-width',
            itemBorderStyle: '@-item-border-style',
            itemBorderColor: '@-item-border-color',
            itemSizeTextColor: '@-item-size-text-color',
            itemSizeFontSize: '@-item-size-font-size',
            // Action button
            itemActionButtonTextColor: '@-item-action-button-text-color',
            itemActionButtonBackground: '@-item-action-button-background',
            itemActionButtonHoverBackground: '@-item-action-button-hover-background',
            itemActionButtonFocusBackground: '@-item-action-button-focus-background',
            itemActionButtonActiveBackground: '@-item-action-button-active-background',
        }),
        selectors: {
            root: '&',
            label: '&:deep(.bt-form-file > .bt-form-base-input > label)',
            help: '&:deep(.bt-form-file > .bt-form-base-input > .extras > .help)',
            inputGroup: '&:deep(.bt-form-file > .bt-form-base-input > .input-group)',
            input: '&:deep(.bt-form-file > .bt-form-base-input > .input-group > .input)',
            fileItem: '&:deep(.bt-form-file .file-item)',
            fileName: '&:deep(.bt-form-file .file-item  .file-name)',
            fileSize: '&:deep(.bt-form-file .file-item .file-size)',
            fileIcon: '&:deep(.bt-form-file .file-item .file-details svg)',
            fileButtons: '&:deep(.bt-form-file .file-item > .buttons)',
        }
    }
};

export { ThemeConfiguration };

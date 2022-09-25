import { BaseVars } from "../../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            inputMinWidth: '@-input-min-width',

            // Choice
            choiceTextColor: '@-choice-text-color',
            choiceCheckIconColor: '@-choice-check-icon-color',
            choiceTrashIconColor: '@-choice-trash-icon-color',
            choiceBackgroundFocusColor: '@-choice-background-focus-color',

            // Group
            groupPaddingX: '@-group-padding-x',
            groupPaddingY: '@-group-padding-y',
            groupLabelTextColor: '@-group-label-text-color',
            groupLabelFontWeight: '@-group-label-font-weight',
            groupLabelFontSize: '@-group-label-font-size',
            groupSeparatorColor: '@-group-separator-color',

            // Tags
            tagTextColor: '@-tag-text-color',
            tagBorderColor: '@-tag-border-color',
            tagBackgroundColor: '@-tag-background-color',
            tagMaxWidth: '@-tag-max-width',
            tagCloseFillColor: '@-tag-close-fill-color',
            tagCloseFillHoverColor: '@-tag-close-fill-hover-color',
            tagCloseBackgroundHoverColor: '@-tag-close-background-hover-color',

            // Addons
            clearIconColor: '@-clear-icon-color'
        }},
        selectors: {
            root: '&',
            label: '&:deep(.bt-form-select > .bt-form-base-input > label)',
            help: '&:deep(.bt-form-select > .bt-form-base-input > .extras > .help)',
            inputGroup: '&:deep(.bt-form-select > .bt-form-base-input > .input-group)',
            before: '&:deep(.bt-form-select > .bt-form-base-input > .input-group > .before > .addon)',
            after: '&:deep(.bt-form-select > .bt-form-base-input > .input-group > .after > .addon)',
            floatingExtras: '&:deep(.bt-form-select > .bt-form-base-input > .input-group > .input > .floating-extras)',
            input: '&:deep(.bt-form-select > .bt-form-base-input > .input-group > .input)'
        }
    }
};

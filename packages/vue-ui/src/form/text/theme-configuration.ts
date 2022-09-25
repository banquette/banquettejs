import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            paddingX        : '@-padding-x',
            paddingY        : '@-padding-y',
            height          : '@-height',
            lineHeight      : '@-line-height',
            clearIconColor  : '@-clear-icon-color'
        }},
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

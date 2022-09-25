import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            paddingX: '@-padding-x',
            paddingY: '@-padding-y'
        }},
        selectors: {
            root: '&',
            label: '&:deep(.bt-form-tree > .bt-form-base-input > label)',
            help: '&:deep(.bt-form-tree > .bt-form-base-input > .extras > .help)',
            inputGroup: '&:deep(.bt-form-tree > .bt-form-base-input > .input-group)',
            input: '&:deep(.bt-form-tree > .bt-form-base-input > .input-group > .input)',
            item: ':deep(.bt-tree .bt-tree-item)',
            'item((?:\\:|\\[)[\\w\[\\]-]+)': ':deep(.bt-tree .bt-tree-item$1)',
            'item[expanded]': ':deep(.bt-tree .bt-tree-item[data-is-expanded])',
            'item[empty]': ':deep(.bt-tree .bt-tree-item[data-is-empty])',
            'item[disabled]': ':deep(.bt-tree .bt-tree-item[data-is-disabled])',
            itemsWrapper: ':deep(.bt-tree .items-wrapper)',
            itemTitle: ':deep(.bt-tree .title)',
            itemAddon: ':deep(.bt-tree .addon)'
        }
    }
};

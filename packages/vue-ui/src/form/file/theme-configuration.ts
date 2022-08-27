import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
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
        }},
        selectors: {
            root: {
                base: '&',
                hover: '&:hover',
                active: '&:active',
                focus: '&:focus',
            },
            svg: ':deep(svg)'
        }
    }
};

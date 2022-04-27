import { BaseVars } from "../../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            paddingX: '@-padding-x',
            paddingY: '@-padding-y',
            inputMinWidth: '@-input-min-width',

            // Tags
            tagTextColor: '@-tag-text-color',
            tagBorderColor: '@-tag-border-color',
            tagBackgroundColor: '@-tag-background-color',
            tagMaxWidth: '@-tag-max-width',
            tagCloseFillColor: '@-tag-close-fill-hover-color',
            tagCloseBackgroundHoverColor: '@-tag-close-background-hover-color',

            // Addons
            clearIconColor: '@-clear-icon-color'
        }},
        selectors: {}
    }
};

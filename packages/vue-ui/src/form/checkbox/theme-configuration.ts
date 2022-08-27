import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
                size:                   '@-size',
                borderRadius:           '@-border-radius',
                backgroundColor:        '@-background-color',
                backgroundCheckedColor: '@-background-checked-color',
                outlineColor:           '@-outline-color',
                outlineHoverColor:      '@-outline-hover-color',
                outlineFocusedColor:    '@-outline-focused-color',
                outlineCheckedColor:    '@-outline-checked-color',
                outlineWidth:           '@-outline-width',
                outlineHoverWidth:      '@-outline-hover-width',
                outlineFocusedWidth:    '@-outline-focused-width',
                outlineCheckedWidth:    '@-outline-checked-width',
                iconColor:              '@-icon-color',
                errorColor:             '@-error-color'
            }},
        selectors: {}
    }
};

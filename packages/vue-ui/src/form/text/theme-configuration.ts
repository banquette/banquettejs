import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            paddingX    : '@-padding-x',
            paddingY    : '@-padding-y',
            height      : '@-height',
            lineHeight  : '@-line-height',
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

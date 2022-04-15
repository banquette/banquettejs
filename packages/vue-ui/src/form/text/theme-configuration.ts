import { BaseVars } from "../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            // No specific vars
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

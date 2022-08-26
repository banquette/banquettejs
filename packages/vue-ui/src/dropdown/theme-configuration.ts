
export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily              : '@-font-family',
            fontSize                : '@-font-size',
            fontWeight              : '@-font-weight',
            textColor               : '@-text-color',
            textHoverColor          : '@-text-hover-color',
            backgroundColor         : '@-background-color',
            backgroundHoverColor    : '@-background-hover-color',
            borderColor             : '@-border-color',
            borderRadius            : '@-border-radius',
            dividerColor            : '@-divider-color',
            shadow                  : '@-shadow',
            zIndex                  : '@-z-index',
            minWidth                : '@-min-width',
            maxHeight               : '@-max-height',
            animationDuration       : '@-animation-duration'
        },
        selectors: {
            root: {
                base: '.inner',
                hover: '.inner:hover'
            },
            svg: ':deep(svg)',
            divider: ':deep(.bt-dropdown-divider)',
            item: ':deep(.bt-dropdown-item)'
        }
    }
};


export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily      : '@-font-family',
            fontSize        : '@-font-size',
            fontWeight      : '@-font-weight',
            textColor       : '@-text-color',
            backgroundColor : '@-background-color',
            borderColor     : '@-border-color',
            borderRadius    : '@-border-radius',
            borderWidth     : '@-border-width',
            borderStyle     : '@-border-style',
            zIndex          : '@-z-index',
            shadow          : '@-shadow'
        },
        selectors: {
            root: '& > .inner-wrapper > .content',
            arrow: '& > .inner-wrapper > .arrow::before'
        }
    }
};

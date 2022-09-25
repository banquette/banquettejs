export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily                  : '@-font-family',
            fontSize                    : '@-font-size',
            fontWeight                  : '@-font-weight',
            textColor                   : '@-text-color',
            borderColor                 : '@-border-color',
            borderRadius                : '@-border-radius',
            borderWidth                 : '@-border-width',
            borderStyle                 : '@-border-style',
            backgroundColor             : '@-background-color',
            closeFillColor              : '@-close-fill-color',
            closeFillHoverColor         : '@-close-fill-hover-color',
            closeBackgroundHoverColor   : '@-close-background-hover-color'
        },
        selectors: {
            root: '&',
            'root((?:\\:|\\[)[\\w\[\\]-]+)': '&$1',
            body: '.body',
            closeIcon: '.close-icon',
            icon: '& > svg'
        }
    }
};

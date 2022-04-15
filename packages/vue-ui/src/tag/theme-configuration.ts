
export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily                  : '@-font-family',
            fontSize                    : '@-font-size',
            fontWeight                  : '@-font-weight',
            textColor                   : '@-text-color',
            textHoverColor              : '@-text-hover-color',
            backgroundColor             : '@-background-color',
            backgroundHoverColor        : '@-background-hover-color',
            borderColor                 : '@-border-color',
            borderHoverColor            : '@-border-hover-color',
            borderRadius                : '@-border-radius',
            borderWidth                 : '@-border-width',
            borderStyle                 : '@-border-style',
            closeFillColor              : '@-close-fill-color',
            closeFillHoverColor         : '@-close-fill-hover-color',
            closeBackgroundHoverColor   : '@-close-background-hover-color'
        },
        selectors: {
            root: '&.bt-tag',
            close: '&.bt-tag .close-icon',
        }
    }
};

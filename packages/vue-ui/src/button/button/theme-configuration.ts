
export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily              : '@-font-family',
            fontSize                : '@-font-size',
            fontWeight              : '@-font-weight',
            borderRadius            : '@-border-radius',
            borderWidth             : '@-border-width',
            borderStyle             : '@-border-style',

            textColor               : '@-text-color',
            textHoverColor          : '@-text-hover-color',
            textFocusColor          : '@-text-focus-color',
            textActiveColor         : '@-text-active-color',
            textDisabledColor       : '@-text-disabled-color',

            backgroundColor         : '@-background-color',
            backgroundHoverColor    : '@-background-hover-color',
            backgroundFocusColor    : '@-background-focus-color',
            backgroundActiveColor   : '@-background-active-color',
            backgroundDisabledColor : '@-background-disabled-color',

            borderColor             : '@-border-color',
            borderHoverColor        : '@-border-hover-color',
            borderFocusColor        : '@-border-focus-color',
            borderActiveColor       : '@-border-active-color',
            borderDisabledColor     : '@-border-disabled-color',

            animation: {
                appearanceDuration  : '@-animation-appearance-duration',
                clickDuration       : '@-animation-click-duration'
            }
        },
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

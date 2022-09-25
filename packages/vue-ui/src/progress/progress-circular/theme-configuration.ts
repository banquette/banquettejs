
export const ThemeConfiguration = {
    css: {
        vars: {
            fontFamily  : '@-font-family',
            fontSize    : '@-font-size',
            fontWeight  : '@-font-weight',
            textColor   : '@-text-color',
            fill        : '@-fill',
            strokeColor : '@-stroke-color',
            size        : '@-size'
        },
        selectors: {
            root: '&',
            text: '.inner > .progress',
            circle: 'svg .path'
        }
    }
};

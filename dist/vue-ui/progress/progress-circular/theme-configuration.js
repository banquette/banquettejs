/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var ThemeConfiguration = {
    css: {
        vars: {
            fontFamily: '@-font-family',
            fontSize: '@-font-size',
            fontWeight: '@-font-weight',
            textColor: '@-text-color',
            fill: '@-fill',
            strokeColor: '@-stroke-color',
            size: '@-size'
        },
        selectors: {
            root: '&',
            text: '.inner > .progress',
            circle: 'svg .path'
        }
    }
};

export { ThemeConfiguration };

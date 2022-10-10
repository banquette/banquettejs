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
            backgroundColor: '@-background-color',
            borderColor: '@-border-color',
            borderRadius: '@-border-radius',
            borderWidth: '@-border-width',
            borderStyle: '@-border-style',
            zIndex: '@-z-index',
            shadow: '@-shadow'
        },
        selectors: {
            root: '& > .inner-wrapper > .content',
            arrow: '& > .inner-wrapper > .arrow::before'
        }
    }
};

export { ThemeConfiguration };

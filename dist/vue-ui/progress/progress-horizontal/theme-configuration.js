/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var ThemeConfiguration = {
    css: {
        vars: {
            backgroundColor: '@-background-color',
            valueBackgroundColor: '@-value-background-color',
            valueTextColor: '@-value-text-color',
            height: '@-height',
            borderRadius: '@-border-radius',
            indeterminateAnimationDuration: '@-indeterminate-animation-duration',
            determinateAnimationDuration: '@-determinate-animation-duration'
        },
        selectors: {
            root: '&',
            progressBar: '& > .value',
            progressText: '& > .value > .text'
        }
    }
};

export { ThemeConfiguration };

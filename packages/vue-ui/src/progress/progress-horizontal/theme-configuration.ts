
export const ThemeConfiguration = {
    css: {
        vars: {
            backgroundColor                 : '@-background-color',
            valueBackgroundColor            : '@-value-background-color',
            valueTextColor                  : '@-value-text-color',
            height                          : '@-height',
            borderRadius                    : '@-border-radius',
            indeterminateAnimationDuration  : '@-indeterminate-animation-duration',
            determinateAnimationDuration    : '@-determinate-animation-duration'
        },
        selectors: {
            root: '&.bt-progress-horizontal',
            progressBar: '& > .value',
            progressText: '& > .value > .text'
        }
    }
};

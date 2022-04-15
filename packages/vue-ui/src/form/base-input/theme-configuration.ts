
export const BaseVars = {
    fontFamily              : '@-font-family',
    fontSize                : '@-font-size',
    fontWeight              : '@-font-weight',
    textColor               : '@-text-color',
    backgroundColor         : '@-background-color',
    backgroundDisabledColor : '@-background-disabled-color',
    borderColor             : '@-border-color',
    borderRadius            : '@-border-radius',
    borderWidth             : '@-border-width',
    borderStyle             : '@-border-style',
    borderFocusColor        : '@-border-focus-color',
    borderErrorColor        : '@-border-error-color',
    placeholderX            : '@-placeholder-x',
    placeholderY            : '@-placeholder-y',

    // Label
    labelTextColor          : '@-label-color',
    labelTransitionDuration : '@-label-transition-duration',

    // Help
    helpTextColor           : '@-help-color',
    helpFontSize            : '@-help-font-size',

    // Error
    errorTextColor          : '@-error-text-color',
    errorFontSize           : '@-error-font-size',

    // Disabled
    disabledColor           : '@-border-disabled-color',

    // Addons
    addonBorderColor        : '@-addon-background-color',
    addonTextColor          : '@-text-addon-color'
};

export const ThemeConfiguration = {
    css: {
        vars: BaseVars,
        selectors: {
            root: {
                base: '&',
                focus: '&[data-has-focus]',
            },
            inputGroup: '.input-group',
            input: '.input-group .input',
            before: '.input-group .before',
            after: '.input-group .after',
            help: '.help'
        }
    }
};

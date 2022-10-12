/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ThemeConfiguration = {
    css: {
        vars: {
            fontFamily: '@-font-family',
            fontSize: '@-font-size',
            fontWeight: '@-font-weight',
            borderRadius: '@-border-radius',
            borderWidth: '@-border-width',
            borderStyle: '@-border-style',
            textColor: '@-text-color',
            textHoverColor: '@-text-hover-color',
            textFocusColor: '@-text-focus-color',
            textActiveColor: '@-text-active-color',
            textDisabledColor: '@-text-disabled-color',
            backgroundColor: '@-background-color',
            backgroundHoverColor: '@-background-hover-color',
            backgroundFocusColor: '@-background-focus-color',
            backgroundActiveColor: '@-background-active-color',
            backgroundDisabledColor: '@-background-disabled-color',
            borderColor: '@-border-color',
            borderHoverColor: '@-border-hover-color',
            borderFocusColor: '@-border-focus-color',
            borderActiveColor: '@-border-active-color',
            borderDisabledColor: '@-border-disabled-color',
            disabledOpacity: '@-disabled-opacity',
            paddingX: '@-padding-x',
            paddingY: '@-padding-y',
            animation: {
                appearanceDuration: '@-animation-appearance-duration',
                clickDuration: '@-animation-click-duration'
            }
        },
        selectors: {
            root: '.inner',
            'root((?:\\:|\\[)[\\w\[\\]-]+)': '&$1 .inner',
            'root[disabled]': '&[data-is-disabled] .inner',
            icon: ':deep(svg)'
        }
    }
};

exports.ThemeConfiguration = ThemeConfiguration;
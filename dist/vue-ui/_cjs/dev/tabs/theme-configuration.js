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
            // Toggles
            togglesFontFamily: '@-toggles-font-family',
            togglesFontSize: '@-toggles-font-size',
            togglesFontWeight: '@-toggles-font-weight',
            togglesTextColor: '@-toggles-text-color',
            togglesTextFocusColor: '@-toggles-text-focus-color',
            togglesTextHoverColor: '@-toggles-text-hover-color',
            togglesBackgroundColor: '@-toggles-background-color',
            togglesBorderWidth: '@-toggles-border-width',
            togglesBorderStyle: '@-toggles-border-style',
            togglesBorderColor: '@-toggles-border-color',
            togglesPadding: '@-toggles-padding',
            // Focus indicator
            focusIndicatorColor: '@-focus-indicator-color',
            focusTransitionDuration: '@-focus-transition-duration',
            // Content
            contentBackground: '@-content-background',
            contentPadding: '@-content-padding'
        },
        selectors: {
            root: '&',
            togglesWrapper: '& > .toggles-wrapper',
            togglesWrapperLeft: '&[data-direction="left"] > .toggles-wrapper',
            togglesWrapperRight: '&[data-direction="right"] > .toggles-wrapper',
            toggles: '& > .toggles-wrapper > .toggles',
            toggle: ':deep(.bt-tab-toggle)',
            toggleFocused: ':deep(.bt-tab-toggle.focused)',
            'toggle((?:\\:|\\[)[\\w\[\\]-]+)': ':deep(.bt-tab-toggle)$1',
            toggleIcon: ':deep(.bt-tab-toggle) svg',
            content: '& > .content',
            focusIndicator: '& > .toggles-wrapper > .focus-indicator'
        }
    }
};

exports.ThemeConfiguration = ThemeConfiguration;

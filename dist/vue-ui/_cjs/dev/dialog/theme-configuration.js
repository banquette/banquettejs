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
            // Global
            background: '@-background',
            borderRadius: '@-border-radius',
            shadow: '@-shadow',
            borderColor: '@-border-color',
            borderStyle: '@-border-style',
            borderWidth: '@-border-width',
            // Header,
            headerFontFamily: '@-header-font-family',
            headerFontSize: '@-header-font-size',
            headerFontWeight: '@-header-font-weight',
            headerTextColor: '@-header-text-color',
            // Size
            minWidth: '@-min-width',
            minHeight: '@-min-height',
            maxWidth: '@-max-width',
            maxHeight: '@-max-height'
        },
        selectors: {
            root: '.bt-dialog-inner',
            header: '.bt-dialog-inner > .header',
            body: '.bt-dialog-inner > .body',
            footer: '.bt-dialog-inner > .footer',
            closeIcon: '.bt-dialog-inner > .header > .close-icon svg',
        }
    }
};

exports.ThemeConfiguration = ThemeConfiguration;
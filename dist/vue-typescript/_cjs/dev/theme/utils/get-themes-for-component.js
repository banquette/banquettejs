/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var converters = require('../../utils/converters.js');
var getComponentName = require('../../utils/get-component-name.js');
var constant = require('../constant.js');
var vueThemes = require('../vue-themes.js');

/**
 * Get the list of themes applicable to a component instance.
 */
function getThemesForComponent(componentInstance) {
    var themes = [vueThemes.VueThemes.Get(constant.ThemeWildcard)];
    var parentComponent = componentInstance.$parent;
    while (parentComponent) {
        parentComponent = converters.maybeResolveTsInst(parentComponent);
        if (getComponentName.getComponentName(parentComponent) === 'bt-theme') {
            var btThemeName = parentComponent.name;
            if (btThemeName) {
                themes.push(vueThemes.VueThemes.Get(btThemeName));
                break;
            }
        }
        parentComponent = parentComponent.$parent;
    }
    // No custom theme? Use the one defined globally, if there is one.
    if (themes.length === 1) {
        var globalTheme = vueThemes.VueThemes.GetCurrent();
        if (globalTheme !== null) {
            themes.push(globalTheme);
        }
    }
    return themes;
}

exports.getThemesForComponent = getThemesForComponent;

/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { maybeResolveTsInst } from '../../utils/converters.js';
import { getComponentName } from '../../utils/get-component-name.js';
import { ThemeWildcard } from '../constant.js';
import { VueThemes } from '../vue-themes.js';

/**
 * Get the list of themes applicable to a component instance.
 */
function getThemesForComponent(componentInstance) {
    var themes = [VueThemes.Get(ThemeWildcard)];
    var parentComponent = componentInstance.$parent;
    while (parentComponent) {
        parentComponent = maybeResolveTsInst(parentComponent);
        if (getComponentName(parentComponent) === 'bt-theme') {
            var btThemeName = parentComponent.name;
            if (btThemeName) {
                themes.push(VueThemes.Get(btThemeName));
                break;
            }
        }
        parentComponent = parentComponent.$parent;
    }
    // No custom theme? Use the one defined globally, if there is one.
    if (themes.length === 1) {
        var globalTheme = VueThemes.GetCurrent();
        if (globalTheme !== null) {
            themes.push(globalTheme);
        }
    }
    return themes;
}

export { getThemesForComponent };

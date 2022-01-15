import { Vue } from "../../vue";
import { ThemeWildcard, ThemeComponentSymbol } from "../constant";
import { VueTheme } from "../vue-theme";
import { VueThemes } from "../vue-themes";

/**
 * Get the list of themes applicable to a component instance.
 */
export function getThemesForComponent(componentInstance: Vue): VueTheme[] {
    let themes: VueTheme[] = [VueThemes.Get(ThemeWildcard)];
    let parentComponent: any = componentInstance.$parent;
    while (parentComponent) {
        if (parentComponent.s === ThemeComponentSymbol && VueThemes.Has(parentComponent.name)) {
            themes.push(VueThemes.Get(parentComponent.name));
            break ;
        }
        parentComponent = parentComponent.$parent;
    }
    // No custom theme? Use the one defined globally, if there is one.
    if (themes.length === 1) {
        const globalTheme = VueThemes.GetCurrent();
        if (globalTheme !== null) {
            themes.push(globalTheme);
        }
    }
    return themes;
}

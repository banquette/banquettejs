import { maybeResolveTsInst } from "../../utils/converters";
import { getComponentName } from "../../utils/get-component-name";
import { Vue } from "../../vue";
import { ThemeWildcard } from "../constant";
import ThemeComponent from "../theme.component";
import { VueTheme } from "../vue-theme";
import { VueThemes } from "../vue-themes";

/**
 * Get the list of themes applicable to a component instance.
 */
export function getThemesForComponent(componentInstance: Vue): VueTheme[] {
    let themes: VueTheme[] = [VueThemes.Get(ThemeWildcard)];
    let parentComponent = componentInstance.$parent;
    while (parentComponent) {
        parentComponent = maybeResolveTsInst(parentComponent);
        if (getComponentName(parentComponent) === 'bt-theme') {
            themes.push(VueThemes.Get((parentComponent as ThemeComponent).name));
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

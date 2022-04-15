import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { UsageException } from "@banquette/exception/usage.exception";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { getActiveComponentsCount } from "../utils/components-count";
import { ThemeWildcard, ThemesEvents } from "./constant";
import { ThemeEvent } from "./event/theme.event";
import { ThemeDefinitionInterface } from "./theme-definition.interface";
import { VariantDefinitionInterface } from "./variant-definition.interface";
import { VueTheme } from "./vue-theme";
import { VueThemeVariant } from "./vue-theme-variant";

export class VueThemes {
    /**
     * A map of themes, indexed by name.
     *
     * The name `[ThemeWildcard]` is reserved and serves as a wildcard.
     * All components always have (at least) this theme applied.
     */
    private static Themes: Record<string, VueTheme> = {};

    /**
     * Name of the current theme.
     * This theme merges with the wildcard, and have full priority over it.
     */
    private static CurrentThemeName: string|null = null;

    /**
     * Instance of the current theme.
     */
    private static CurrentTheme: VueTheme|null = null;

    /**
     * Event dispatcher used to get a notification when a change is made.
     */
    private static EventDispatcher = new EventDispatcher();

    /**
     * Set the name of the current theme.
     */
    public static SetCurrent(name: string): void {
        VueThemes.CurrentThemeName = name;
        if (VueThemes.CurrentTheme !== null) {
            document.documentElement.classList.remove(VueThemes.CurrentTheme.id);
            VueThemes.CurrentTheme = null;
        }
        if (VueThemes.Has(name)) {
            const theme = VueThemes.Get(name);
            VueThemes.CurrentTheme = theme;
            document.documentElement.classList.add(theme.id);
        }
    }

    /**
     * Get the current global theme.
     */
    public static GetCurrent(): VueTheme|null {
        return VueThemes.CurrentTheme;
    }

    /**
     * Get or create a theme.
     */
    public static Get(name: string): VueTheme {
        if (isUndefined(VueThemes.Themes[name])) {
            const theme = new VueTheme(name, VueThemes.EventDispatcher);
            VueThemes.Themes[name] = theme;

            if (VueThemes.CurrentThemeName === name) {
                VueThemes.SetCurrent(name);
            }
            if (name === ThemeWildcard) {
                document.documentElement.classList.add(VueThemes.Themes[ThemeWildcard].id);
            }
            // Do not dispatch synchronously to give time to the caller to finish its setup.
            if (getActiveComponentsCount() > 0) {
                window.setTimeout(() => {
                    VueThemes.EventDispatcher.dispatch(ThemesEvents.ThemeCreated, new ThemeEvent(theme));
                    theme.injectInDOM();
                });
            }
        }
        return VueThemes.Themes[name];
    }

    /**
     * Check if a theme is defined.
     */
    public static Has(name: string): boolean {
        if (name === ThemeWildcard) {
            return true;
        }
        return !isUndefined(VueThemes.Themes[name]);
    }

    /**
     * Subscribe to an event that will trigger each time a new theme is added.
     */
    public static OnCreated(cb: (event: ThemeEvent) => void): UnsubscribeFunction {
        return VueThemes.EventDispatcher.subscribe(ThemesEvents.ThemeCreated, cb);
    }

    /**
     * Shorthand to define multiple variants at once, as an object.
     */
    public static Define(componentName: string, configuration: ThemeDefinitionInterface|VariantDefinitionInterface|VariantDefinitionInterface[]): void {
        const themeConfiguration = isArray(configuration) || VueThemes.IsVariantDefinitionInterface(configuration) ?
                {[ThemeWildcard]: ensureArray(configuration)} as ThemeDefinitionInterface :
                configuration;
        for (const rawThemeName of Object.keys(themeConfiguration)) {
            const themesNames = rawThemeName.split(',').map((i) => trim(i));
            for (const themeName of themesNames) {
                let theme: VueTheme = VueThemes.Get(themeName);
                for (const variantConf of themeConfiguration[rawThemeName]) {
                    const variant: VueThemeVariant = theme.getVariant(variantConf.match, componentName);
                    for (const method of getObjectKeys(variantConf)) {
                        if (method !== 'match') {
                            (variant as any)[method](variantConf[method]);
                        }
                    }
                }
            }
        }
    }

    /**
     * Remove a theme.
     */
    public static Remove(name: string): void {
        if (name === ThemeWildcard) {
            throw new UsageException('You cannot remove the wildcard theme. But you can clear it by calling `clear()` on it if you want.');
        }
        if (isUndefined(VueThemes.Themes[name])) {
            delete VueThemes.Themes[name];
        }
    }

    /**
     * Test if the input is a VariantDefinitionInterface.
     */
    private static IsVariantDefinitionInterface(input: any): input is VariantDefinitionInterface {
        return isObject(input) && 'match' in input && ('apply' in input || 'props' in input || 'cssVars' in input || 'cssSelectors' in input || 'cssCode' in input);
    }
}

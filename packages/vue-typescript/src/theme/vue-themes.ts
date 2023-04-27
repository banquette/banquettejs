import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object";
import { trim } from "@banquette/utils-string";
import { ensureArray, isArray, isObject, isUndefined } from "@banquette/utils-type";
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
    public static SetCurrent(name: string|null): void {
        if (name === ThemeWildcard) {
            name = null;
        }
        if (name === VueThemes.CurrentThemeName) {
            return ;
        }
        if (VueThemes.CurrentTheme !== null) {
            const theme = VueThemes.CurrentTheme;
            // Put the static variable to null before the call to free()
            // because it emits an events that rely on the static variable.
            VueThemes.CurrentTheme = null;
            theme.free();
        }
        if (name) {
            VueThemes.CurrentTheme = VueThemes.Get(name);
            VueThemes.CurrentTheme.use();
        }
        VueThemes.CurrentThemeName = name;
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
        // If it's the first call ever, create the wildcard theme and mark it as used.
        if (isUndefined(VueThemes.Themes[ThemeWildcard])) {
            VueThemes.Themes[ThemeWildcard] = new VueTheme(ThemeWildcard, VueThemes.EventDispatcher);
            VueThemes.Themes[ThemeWildcard].use();
        }
        if (isUndefined(VueThemes.Themes[name])) {
            VueThemes.Themes[name] = new VueTheme(name, VueThemes.EventDispatcher);
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
     * Subscribe to an event that will trigger each time the current theme changes.
     */
    public static OnChanged(cb: (event: ThemeEvent) => void): UnsubscribeFunction {
        return VueThemes.EventDispatcher.subscribe(ThemesEvents.ThemeChanged, cb);
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

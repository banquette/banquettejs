import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { trim } from "@banquette/utils-string/format/trim";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ThemeWildcard, ThemesEvents } from "./constant";
import { ThemeCreatedEventArg } from "./event/theme-created.event-arg";
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
        VueThemes.ValidateName(name);
        if (isUndefined(VueThemes.Themes[name])) {
            const inst = new VueTheme(name, VueThemes.EventDispatcher);
            VueThemes.Themes[name] = inst;

            if (VueThemes.CurrentTheme === null && VueThemes.CurrentThemeName === name) {
                VueThemes.SetCurrent(name);
            }
            // Do not dispatch synchronously to give time to the caller to finish its setup.
            window.setTimeout(() => {
                VueThemes.EventDispatcher.dispatch(ThemesEvents.ThemeCreated, new ThemeCreatedEventArg(name, inst));
            });
        }
        return VueThemes.Themes[name];
    }

    /**
     * Get the wildcard theme.
     *
     * Values defined in this theme will apply to all components no matter their active theme.
     * If another theme define the same value as the wildcard, the custom theme will always win.
     */
    public static GetWildcard(): VueTheme {
        if (isUndefined(VueThemes.Themes[ThemeWildcard])) {
            VueThemes.Themes[ThemeWildcard] = new VueTheme(ThemeWildcard, VueThemes.EventDispatcher);
            document.documentElement.classList.add(VueThemes.Themes[ThemeWildcard].id);
        }
        return VueThemes.Themes[ThemeWildcard];
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
    public static OnCreated(cb: (event: ThemeCreatedEventArg) => void): UnsubscribeFunction {
        return VueThemes.EventDispatcher.subscribe(ThemesEvents.ThemeCreated, cb);
    }

    /**
     * Shorthand to define multiple variants at once, as an object.
     */
    public static Define(componentName: string, configuration: ThemeDefinitionInterface|VariantDefinitionInterface): void {
        const themeConfiguration = VueThemes.IsVariantDefinitionInterface(configuration) ?
                {[ThemeWildcard]: configuration} as ThemeDefinitionInterface :
                configuration;
        for (const rawThemeName of Object.keys(themeConfiguration)) {
            const themesNames = rawThemeName.split(',').map((i) => trim(i));
            for (const themeName of themesNames) {
                let theme: VueTheme = themeName === ThemeWildcard ? VueThemes.GetWildcard() : VueThemes.Get(themeName);
                for (const variantName of Object.keys(themeConfiguration[rawThemeName])) {
                    const variant: VueThemeVariant = theme.getVariant(variantName, componentName);
                    for (const method of getObjectKeys(themeConfiguration[rawThemeName][variantName])) {
                        (variant as any)[method](themeConfiguration[rawThemeName][variantName][method]);
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
     * Ensure themes' names are valid or throw an error.
     */
    private static ValidateName(name: string): void {
        if (name === ThemeWildcard) {
            throw new UsageException(`The name "${ThemeWildcard}" is reserved. Please call "VueThemes::GetWildcard()" if you want to get the wildcard theme.`);
        }
    }

    /**
     * Test if the input is a VariantDefinitionInterface.
     */
    private static IsVariantDefinitionInterface(input: any): input is VariantDefinitionInterface {
        return isObject(input) && ('props' in input || 'vars' in input || 'css' in input);
    }
}

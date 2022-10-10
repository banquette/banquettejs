import { UnsubscribeFunction } from "@banquette/event/type";
import { ThemeEvent } from "./event/theme.event";
import { ThemeDefinitionInterface } from "./theme-definition.interface";
import { VariantDefinitionInterface } from "./variant-definition.interface";
import { VueTheme } from "./vue-theme";
export declare class VueThemes {
    /**
     * A map of themes, indexed by name.
     *
     * The name `[ThemeWildcard]` is reserved and serves as a wildcard.
     * All components always have (at least) this theme applied.
     */
    private static Themes;
    /**
     * Name of the current theme.
     * This theme merges with the wildcard, and have full priority over it.
     */
    private static CurrentThemeName;
    /**
     * Instance of the current theme.
     */
    private static CurrentTheme;
    /**
     * Event dispatcher used to get a notification when a change is made.
     */
    private static EventDispatcher;
    /**
     * Set the name of the current theme.
     */
    static SetCurrent(name: string | null): void;
    /**
     * Get the current global theme.
     */
    static GetCurrent(): VueTheme | null;
    /**
     * Get or create a theme.
     */
    static Get(name: string): VueTheme;
    /**
     * Check if a theme is defined.
     */
    static Has(name: string): boolean;
    /**
     * Subscribe to an event that will trigger each time a new theme is added.
     */
    static OnCreated(cb: (event: ThemeEvent) => void): UnsubscribeFunction;
    /**
     * Subscribe to an event that will trigger each time the current theme changes.
     */
    static OnChanged(cb: (event: ThemeEvent) => void): UnsubscribeFunction;
    /**
     * Shorthand to define multiple variants at once, as an object.
     */
    static Define(componentName: string, configuration: ThemeDefinitionInterface | VariantDefinitionInterface | VariantDefinitionInterface[]): void;
    /**
     * Remove a theme.
     */
    static Remove(name: string): void;
    /**
     * Test if the input is a VariantDefinitionInterface.
     */
    private static IsVariantDefinitionInterface;
}

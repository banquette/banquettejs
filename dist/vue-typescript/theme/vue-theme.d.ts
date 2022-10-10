import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { VoidCallback } from "@banquette/utils-type/types";
import { VariantSelector } from "./constant";
import { ThemeVariantEvent } from "./event/theme-variant.event";
import { VueThemeVariant } from "./vue-theme-variant";
export declare class VueTheme {
    readonly name: string;
    private eventDispatcher;
    private static ActiveWildcardStyleElements;
    /**
     * Unique identifier that will be used to inject styles.
     */
    readonly id: string;
    /**
     * An object holding all the variants of a theme, indexed by component name.
     */
    private variants;
    /**
     * Incremented each time injectInDOM() is called.
     * Decremented each time clearDOM() is called.
     *
     * The clear only really happen when the usage count reaches 0.
     */
    private usageCount;
    constructor(name: string, eventDispatcher: EventDispatcher);
    /**
     * Get all variants of a component.
     */
    getVariants(componentName: string): VueThemeVariant[];
    /**
     * Get or create a theme variant.
     */
    getVariant(selector: VariantSelector | VariantSelector[], componentName: string): VueThemeVariant;
    /**
     * Remove a variant.
     */
    removeVariant(selector: VariantSelector | VariantSelector[], componentName: string): void;
    /**
     * Remove all variants of one or multiple components.
     * If `componentName` is `null`, all variants of all components are removed.
     */
    clear(componentName?: string | string[] | null): void;
    /**
     * Mark the theme as used, injecting its styles into the DOM.
     */
    use(): void;
    /**
     * Mark the theme as unused.
     */
    free(): void;
    /**
     * Inject the <style> element containing all the active styles of the theme.
     */
    private injectInDOM;
    /**
     * Remove the injected styles from the dom.
     */
    private clearDOM;
    /**
     * Notify the theme that a component has changed, so it can dispatch the info to other components
     * that may depend on it indirectly.
     */
    notifyComponentChange(name: string): void;
    /**
     * Subscribe to an event that will trigger each time a variant is modified.
     */
    onUpdated(cb: (event: ThemeVariantEvent) => void): UnsubscribeFunction;
    /**
     * Subscribe to an event that will trigger when any component of the `componentNames` list notify the theme of a change.
     */
    onComponentsChange(componentsNames: string[], cb: VoidCallback): UnsubscribeFunction;
}

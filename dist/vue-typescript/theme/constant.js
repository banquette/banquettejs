/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var ThemesEvents = {
    /**
     * Triggered when a new theme is created.
     */
    ThemeCreated: Symbol('theme-created'),
    /**
     * Triggered when the current theme changes.
     */
    ThemeChanged: Symbol('theme-changed'),
    /**
     * Triggered when a component that uses the current theme has changed.
     */
    ThemeComponentChanged: Symbol('theme-component-changed'),
    /**
     * Triggered when any value of an existing theme variant is modified.
     */
    VariantUpdated: Symbol('variant-updated'),
    /**
     * Triggered when a value is marked as used by a component.
     */
    VariantUsed: Symbol('variant-used'),
    /**
     * Triggered when the priority of a variant has been explicitly set,
     * so the theme can update its variants ordering.
     */
    VariantPriorityChanged: Symbol('variant-priority-changed')
};
/**
 * Wildcard theme always assigned to all components.
 *
 * If a component has a custom theme, its variants are merged with those of the wildcard.
 * The custom theme always win against the wildcard if they both define the same prop/var.
 */
var ThemeWildcard = '*';
/**
 * Same as `ThemeWildcard` but for variants.
 * Values defined in a wildcard variant will always apply if the parent theme is active.
 */
var VariantWildcard = '*';

export { ThemeWildcard, ThemesEvents, VariantWildcard };

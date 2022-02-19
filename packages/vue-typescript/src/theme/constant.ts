import { VariantSelectorInterface } from "./variant-selector.interface";

export const ThemesEvents = {
    /**
     * Triggered when a new theme is created.
     */
    ThemeCreated: Symbol('theme-created'),

    /**
     * Triggered when a
     */
    ThemeComponentChanged: Symbol('theme-component-changed'),

    /**
     * Triggered when any value of an existing theme variant is modified.
     */
    VariantUpdated: Symbol('variant-updated'),

    /**
     * Triggered when a value is marked as used by a component.
     */
    VariantUsed: Symbol('variant-used')
}

/**
 * Wildcard theme always assigned to all components.
 *
 * If a component has a custom theme, its variants are merged with those of the wildcard.
 * The custom theme always win against the wildcard if they both define the same prop/var.
 */
export const ThemeWildcard = '*';


/**
 * Same as `ThemeWildcard` but for variants.
 * Values defined in a wildcard variant will always apply if the parent theme is active.
 */
export const VariantWildcard = '*';

/**
 * Used to match a variant.
 */
export type VariantSelector = string|VariantSelectorInterface;

/**
 * Used to match a parent component.
 */
export type ParentSelector = string| (VariantSelectorInterface & {name: string});

/**
 * Custom callback type to check if a prop value matches the selector.
 */
export type PropCallback = (value: any) => boolean;

/**
 * Custom callback type to check if an attr value matches the selector.
 */
export type AttrCallback = (value: any) => boolean;

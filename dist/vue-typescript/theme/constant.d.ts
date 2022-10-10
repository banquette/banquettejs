import { VariantSelectorInterface } from "./variant-selector.interface";
export declare const ThemesEvents: {
    /**
     * Triggered when a new theme is created.
     */
    ThemeCreated: symbol;
    /**
     * Triggered when the current theme changes.
     */
    ThemeChanged: symbol;
    /**
     * Triggered when a component that uses the current theme has changed.
     */
    ThemeComponentChanged: symbol;
    /**
     * Triggered when any value of an existing theme variant is modified.
     */
    VariantUpdated: symbol;
    /**
     * Triggered when a value is marked as used by a component.
     */
    VariantUsed: symbol;
    /**
     * Triggered when the priority of a variant has been explicitly set,
     * so the theme can update its variants ordering.
     */
    VariantPriorityChanged: symbol;
};
/**
 * Wildcard theme always assigned to all components.
 *
 * If a component has a custom theme, its variants are merged with those of the wildcard.
 * The custom theme always win against the wildcard if they both define the same prop/var.
 */
export declare const ThemeWildcard = "*";
/**
 * Same as `ThemeWildcard` but for variants.
 * Values defined in a wildcard variant will always apply if the parent theme is active.
 */
export declare const VariantWildcard = "*";
/**
 * Used to match a variant.
 */
export declare type VariantSelector = string | VariantSelectorInterface;
/**
 * Used to match a parent component.
 */
export declare type ParentSelector = string | (VariantSelectorInterface & {
    name: string;
});
/**
 * Custom callback type to check if a prop value matches the selector.
 */
export declare type PropCallback = (value: any) => boolean;
/**
 * Custom callback type to check if an attr value matches the selector.
 */
export declare type AttrCallback = (value: any) => boolean;

import { Primitive } from "@banquette/utils-type/types";
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
 * A symbol used by the "theme" component so the setup method can detect it
 * in the hierarchy of parents of a component.
 *
 * This is a workaround a circular dependency:
 * component.decorator.ts -> generate-vccopts.ts -> build-setup-method.ts -> theme.component.ts -> component.decorator.ts
 *
 * This way both the setup method and the theme component refer to the constants instead to one another.
 *
 * This const is not exported outside of `vue-typescript` so no other component can use it.
 */
export const ThemeComponentSymbol = Symbol('theme-component');

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

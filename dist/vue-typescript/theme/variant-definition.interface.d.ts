import { VarsMapInterface } from "../decorator/themeable.decorator";
import { VariantSelector, PropCallback } from "./constant";
export interface VariantDefinitionInterface {
    /**
     * Public id of the variant, used to target the variant when using `apply`.
     */
    id?: string;
    /**
     * Criteria to match so the variant is applied.
     */
    match: VariantSelector | VariantSelector[];
    /**
     * Ids of other variants to apply when the variant matches.
     * Can only target variants of the same component and theme.
     */
    apply?: string | string[];
    /**
     * Props overrides.
     */
    props?: Record<string, any | PropCallback>;
    /**
     * Css vars overrides.
     */
    cssVars?: VarsMapInterface;
    /**
     * Css selectors and their set of rules.
     */
    cssSelectors?: VarsMapInterface;
    /**
     * Raw css override.
     */
    cssCode?: string;
    /**
     * Define the priority of the variant relative to the other variants of the theme.
     * The higher the priority, the latest the variant will be processed, thus overriding variants with lower priority.
     */
    priority?: number;
}

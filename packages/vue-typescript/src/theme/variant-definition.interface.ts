import { Primitive } from "@banquette/utils-type/types";
import { VarsMapInterface } from "../decorator/themeable.decorator";
import { VariantSelector } from "./constant";

export interface VariantDefinitionInterface {
    /**
     * Public id of the variant, used to target the variant when using `apply`.
     */
    id?: string;

    /**
     * Criteria to match so the variant is applied.
     */
    match: VariantSelector|VariantSelector[];

    /**
     * Ids of other variants to apply when the variant matches.
     * Can only target variants of the same component and theme.
     */
    apply?: string|string[];

    /**
     * Css vars overrides.
     */
    vars?: VarsMapInterface;

    /**
     * Props overrides.
     */
    props?: Record<string, Primitive>;

    /**
     * Raw css override.
     */
    css?: string;
}

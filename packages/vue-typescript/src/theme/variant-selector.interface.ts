import { Primitive } from "@banquette/utils-type";
import { ParentSelector, PropCallback, AttrCallback } from "./constant";

/**
 * Represent a variant selector as written by the end-user.
 */
export interface VariantSelectorInterface {
    /**
     * Variants to match, separated by spaces.
     */
    variant?: string;

    /**
     * Props to match.
     */
    props?: Record<string, Primitive|PropCallback>;

    /**
     * Html attrs to match.
     */
    attrs?: Record<string, Primitive|AttrCallback>;

    /**
     * Parent component to match.
     */
    parent?: ParentSelector|ParentSelector[];
}

import { Primitive } from "@banquette/utils-type/types";
import { ParentSelector, PropCallback } from "./constant";

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
     * Parent component to match.
     */
    parent?: ParentSelector|ParentSelector[];
}

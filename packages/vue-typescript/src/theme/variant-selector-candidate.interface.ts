import { Primitive } from "@banquette/utils-type/types";
import { PropCallback } from "./constant";

export interface VariantSelectorCandidateInterface {
    variants: string[];
    props: Record<string, Primitive|PropCallback>;
    parents: Array<{name: string} & VariantSelectorCandidateInterface>;
}

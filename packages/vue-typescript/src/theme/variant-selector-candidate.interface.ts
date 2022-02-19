import { Primitive } from "@banquette/utils-type/types";
import { PropCallback, AttrCallback } from "./constant";

export interface VariantSelectorCandidateInterface {
    variants: string[];
    props: Record<string, Primitive|PropCallback>;
    attrs: Record<string, Primitive|AttrCallback>;
    parents: Array<{name: string} & VariantSelectorCandidateInterface>;
}

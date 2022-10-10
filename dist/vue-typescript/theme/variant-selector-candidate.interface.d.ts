import { Primitive } from "@banquette/utils-type/types";
import { PropCallback, AttrCallback } from "./constant";
export interface VariantSelectorCandidateInterface {
    variants: string[];
    props: Record<string, Primitive | PropCallback> | null;
    attrs: Record<string, Primitive | AttrCallback> | null;
    parents: Array<{
        name: string;
    } & VariantSelectorCandidateInterface>;
}

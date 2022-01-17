import { Primitive } from "@banquette/utils-type/types";

export interface VariantSelectorCandidateInterface {
    variants: string[];
    props: Record<string, Primitive>;
    parents: Array<{name: string} & VariantSelectorCandidateInterface>;
}

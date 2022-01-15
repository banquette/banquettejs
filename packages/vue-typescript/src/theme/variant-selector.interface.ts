import { Primitive } from "@banquette/utils-type/types";

export interface VariantSelectorInterface {
    identifier: string;
    candidates: Array<{
        variants: string[];
        props: Record<string, Primitive>
    }>;
}

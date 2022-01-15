import { Primitive } from "@banquette/utils-type/types";

export interface VariantSelectorInterface {
    identifier: string;
    variants: string[];
    props: Record<string, Primitive>;
}

import { Primitive } from "@banquette/utils-type/types";

export interface VariantDefinitionInterface {
    // Name of the variant.
    [key: string]: {
        vars?: Record<string, string>,
        props?: Record<string, Primitive>;
        css?: string;
    }
}

import { Primitive } from "@banquette/utils-type/types";
import { VarsMapInterface } from "../decorator/themeable.decorator";

export interface VariantDefinitionInterface {
    match: string|string[];
    vars?: VarsMapInterface,
    props?: Record<string, Primitive>;
    css?: string;
}

import { Primitive } from "@banquette/utils-type/types";
import { VarsMapInterface } from "../decorator/themeable.decorator";
import { VariantSelector } from "./constant";

export interface VariantDefinitionInterface {
    match: VariantSelector|VariantSelector[];
    vars?: VarsMapInterface,
    props?: Record<string, Primitive>;
    css?: string;
}

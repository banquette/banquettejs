import { Primitive } from "@banquette/utils-type/types";

export interface PresetDefinitionInterface {
    // Name of the preset.
    [key: string]: {
        cssVars?: Record<string, string>,
        props?: Record<string, Primitive>;
        css?: string;
    }
}

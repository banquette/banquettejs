import { VariantDefinitionInterface } from "./variant-definition.interface";

export interface ThemeDefinitionInterface {
    [key: string]: VariantDefinitionInterface;
}

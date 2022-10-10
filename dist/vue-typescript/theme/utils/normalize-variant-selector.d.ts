import { VariantSelector } from "../constant";
import { NormalizedVariantSelectorInterface } from "../normalized-variant-selector.interface";
/**
 * Convert a variant selector into a string identifier.
 */
export declare function normalizeVariantSelector(selectors: VariantSelector | VariantSelector[]): NormalizedVariantSelectorInterface;

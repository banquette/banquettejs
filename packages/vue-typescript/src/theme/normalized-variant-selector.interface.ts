import { VariantSelectorCandidateInterface } from "./variant-selector-candidate.interface";

export interface NormalizedVariantSelectorInterface {
    identifier: string;
    candidates: VariantSelectorCandidateInterface[];
}

import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VariantSelector, ParentSelector } from "../constant";
import { NormalizedVariantSelectorInterface } from "../normalized-variant-selector.interface";
import { VariantSelectorCandidateInterface } from "../variant-selector-candidate.interface";

/**
 * Convert a variant selector into a string identifier.
 */
export function normalizeVariantSelector(selectors: VariantSelector|VariantSelector[]): NormalizedVariantSelectorInterface {
    const output: NormalizedVariantSelectorInterface = {identifier: '', candidates: []};

    selectors = ensureArray<VariantSelector>(selectors);
    for (let selector of selectors) {
        output.identifier += (output.identifier !== '' ? '|' : '');
        if (isString(selector)) {
            selector = {variant: selector};
        }
        const normalizedSelector: VariantSelectorCandidateInterface = {variants: [], props: {}, parents: []};

        // Variant
        if (!isUndefined(selector.variant)) {
            normalizedSelector.variants = selector.variant.split(' ').map((i) => trim(i)).filter((i) => i.length > 0).sort();
            if (normalizedSelector.variants.length > 0) {
                output.identifier += '#variant:string:' + normalizedSelector.variants.join(' ');
            }
        }

        // Props
        if (!isUndefined(selector.props)) {
            const keys = Object.keys(selector.props).sort();
            for (const key of keys) {
                let value = trim(String(selector.props[key]));
                if (key === 'variant') {
                    value = value.split(' ').map((i) => trim(i)).sort().join(' ');
                }
                normalizedSelector.props[key] = selector.props[key];
                output.identifier += '#' + key + ':' + typeof(selector.props[key]) + ':' + value;
            }
        }

        // Parent
        if (!isUndefined(selector.parent)) {
            const parents = ensureArray<ParentSelector>(selector.parent);
            for (let parent of parents) {
                if (isString(parent)) {
                    parent = {name: parent};
                }
                const normalizedParent: any = normalizeVariantSelector(parent);
                const candidateSelector = normalizedParent.candidates[0];
                candidateSelector.name = parent.name;
                normalizedSelector.parents.push(candidateSelector);
                output.identifier += '#parent:' + candidateSelector.name + ':' + normalizedParent.identifier;
            }
        }
        output.candidates.push(normalizedSelector);
    }
    return output;
}

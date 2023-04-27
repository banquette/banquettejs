import { trim } from "@banquette/utils-string";
import { ensureArray, isString, isUndefined } from "@banquette/utils-type";
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
        const normalizedSelector: VariantSelectorCandidateInterface = {variants: [], props: null, attrs: null, parents: []};

        // Variant
        if (!isUndefined(selector.variant)) {
            normalizedSelector.variants = selector.variant.split(' ').map((i) => trim(i)).filter((i) => i.length > 0).sort();
            if (normalizedSelector.variants.length > 0) {
                output.identifier += '#_v:s:' + normalizedSelector.variants.join(' ');
            }
        }

        // Props
        if (!isUndefined(selector.props)) {
            const keys = Object.keys(selector.props).sort();

            if (normalizedSelector.props === null) {
                normalizedSelector.props = {};
            }
            for (const key of keys) {
                let value = trim(String(selector.props[key]));
                if (key === 'variant') {
                    value = value.split(' ').map((i) => trim(i)).sort().join(' ');
                }
                normalizedSelector.props[key] = selector.props[key];
                output.identifier += '#' + key + ':' + String(typeof(selector.props[key]))[0] + ':' + value;
            }
        }

        // Attrs
        if (!isUndefined(selector.attrs)) {
            const keys = Object.keys(selector.attrs).sort();
            if (normalizedSelector.attrs === null) {
                normalizedSelector.attrs = {};
            }
            for (const key of keys) {
                let value = trim(String(selector.attrs[key]));
                normalizedSelector.attrs[key] = selector.attrs[key];
                output.identifier += '#_a:' + key + ':' + String(typeof(selector.attrs[key])) + ':' + value;
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
                output.identifier += '#_p:' + candidateSelector.name + ':' + normalizedParent.identifier;
            }
        }
        output.candidates.push(normalizedSelector);
    }
    return output;
}

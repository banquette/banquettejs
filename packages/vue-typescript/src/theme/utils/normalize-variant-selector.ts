import { trim } from "@banquette/utils-string/format/trim";
import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { VariantSelector } from "../constant";
import { VariantSelectorInterface } from "../variant-selector.interface";

/**
 * Convert a variant selector into a string identifier.
 */
export function normalizeVariantSelector(selectors: VariantSelector|VariantSelector[]): VariantSelectorInterface {
    const output: VariantSelectorInterface = {identifier: '', candidates: []};
    if (!isArray(selectors)) {
        selectors = [selectors];
    }
    for (let selector of selectors) {
        if (isString(selector)) {
            selector = {variant: selector};
        }
        const normalizedSelector: any = {variants: [], props: {}};
        const keys = Object.keys(selector).sort();
        output.identifier += (output.identifier !== '' ? '|' : '');
        for (const key of keys) {
            let value = trim(String(selector[key]));
            if (key === 'variant') {
                normalizedSelector.variants = value.split(' ').map((i) => trim(i)).sort();
                value = normalizedSelector.variants.join(' ');
            } else {
                normalizedSelector.props[key] = selector[key];
            }
            output.identifier += (output.identifier !== '' ? '#' : '') + key + ':' + typeof (selector[key]) + ':' + value;
        }
        output.candidates.push(normalizedSelector);
    }
    return output;
}

import { trim } from "@banquette/utils-string/format/trim";
import { isString } from "@banquette/utils-type/is-string";
import { VariantSelector } from "../constant";
import { VariantSelectorInterface } from "../variant-selector.interface";

/**
 * Convert a variant selector into a string identifier.
 */
export function normalizeVariantSelector(selector: VariantSelector): VariantSelectorInterface {
    const output: VariantSelectorInterface = {identifier: '', variants: [], props: {}};
    if (isString(selector)) {
        selector = {variant: selector};
    }
    const keys = Object.keys(selector).sort();
    for (const key of keys) {
        let value = trim(String(selector[key]));
        if (key === 'variant') {
            output.variants = value.split(' ').map((i) => trim(i)).sort();
            value = output.variants.join(' ');
        } else {
            output.props[key] = selector[key];
        }
        output.identifier += (output.identifier !== '' ? '#' : '') + key + ':' + typeof(selector[key]) + ':' + value;
    }
    return output;
}

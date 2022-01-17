import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { trim } from "@banquette/utils-string/format/trim";
import { DecoratorsDataInterface } from "../../decorator/decorators-data.interface";
import { getDecoratorsData } from "../../utils/get-decorators-data";
import { isDecorated } from "../../utils/is-decorated";
import { VariantWildcard } from "../constant";
import { VueTheme } from "../vue-theme";
import { VueThemeVariant } from "../vue-theme-variant";

function matchVariants(variants: VueThemeVariant[], expectedVariants: string[], inst: any): VueThemeVariant[] {
    let selected: VueThemeVariant[] = [];
    for (const variant of variants) {
        ext:
        for (const selectorCandidate of variant.selector.candidates) {
            const candidateVariants = selectorCandidate.variants.filter((i) => i !== VariantWildcard);

            // Variant
            if (candidateVariants.length > 0) {
                if (arrayIntersect(candidateVariants, expectedVariants).length !== candidateVariants.length) {
                    continue ;
                }
            }

            // Props
            for (const key of Object.keys(selectorCandidate.props)) {
                if (selectorCandidate.props[key] !== inst[key]) {
                    continue ext;
                }
            }

            // Parent
            if (selectorCandidate.parents.length > 0) {
                ext2:
                for (const parentSelectorCandidate of selectorCandidate.parents) {
                    let $parentInst = inst.$parent;
                    while ($parentInst) {
                        if (isDecorated($parentInst.constructor.prototype)) {
                            const decoratorsData: DecoratorsDataInterface = getDecoratorsData($parentInst.constructor.prototype);
                            if (parentSelectorCandidate.name !== decoratorsData.component.name) {
                                continue ;
                            }
                            continue ext2;
                        }
                        $parentInst = $parentInst.$parent;
                    }
                    continue ext;
                }
            }
            selected.push(variant);
            if (variant.applyIds.length > 0) {
                selected = selected.concat(variants.filter((v) => {
                    return v.publicId !== null && variant.applyIds.indexOf(v.publicId) > -1 && selected.indexOf(v) < 0;
                }));
            }
            break ;
        }
    }
    return selected;
}

/**
 * Gets the full list of variants to apply to a component.
 */
export function useThemeVariants(themes: VueTheme[], componentName: string, props: any, variantPropName: string): VueThemeVariant[] {
    let output: VueThemeVariant[] = [];
    let expectedVariants: string[] = (props[variantPropName] || '').split(' ').reduce((acc: string[], item: string) => {
        item = trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, []).sort() as string[];

    for (const theme of themes) {
        const variantsCandidates = theme.getVariants(componentName);
        output = ([] as VueThemeVariant[]).concat(matchVariants(variantsCandidates, expectedVariants, props));
    }
    return output;
}

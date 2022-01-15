import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { trim } from "@banquette/utils-string/format/trim";
import { VariantWildcard } from "../constant";
import { VueTheme } from "../vue-theme";
import { VueThemeVariant } from "../vue-theme-variant";

/**
 * Gets the full list of variants to apply to a component.
 */
export function useThemeVariants(themes: VueTheme[], componentName: string, props: any, variantPropName: string): VueThemeVariant[] {
    const output: VueThemeVariant[] = [];
    let expectedVariants: string[]|null = null;

    for (const theme of themes) {
        const variantsCandidates = theme.getVariants(componentName);
        for (const variantsCandidate of variantsCandidates) {
            let i;
            ext:
            for (i = 0; i < variantsCandidate.selector.candidates.length; ++i) {
                const selectorCandidate = variantsCandidate.selector.candidates[i];
                const candidateVariants = selectorCandidate.variants.filter((i) => i !== VariantWildcard);
                if (candidateVariants.length > 0) {
                    if (expectedVariants === null) {
                        expectedVariants = (props[variantPropName] || '').split(' ').reduce((acc: string[], item: string) => {
                            item = trim(item);
                            if (item.length) {
                                acc.push(item);
                            }
                            return acc;
                        }, []).sort() as string[];
                    }
                    if (arrayIntersect(candidateVariants, expectedVariants).length !== candidateVariants.length) {
                        continue ;
                    }
                }
                for (const key of Object.keys(selectorCandidate.props)) {
                    if (selectorCandidate.props[key] !== props[key]) {
                        continue ext;
                    }
                }
                break ;
            }
            if (i < variantsCandidate.selector.candidates.length) {
                output.push(variantsCandidate);
            }
        }
    }
    return output;
}

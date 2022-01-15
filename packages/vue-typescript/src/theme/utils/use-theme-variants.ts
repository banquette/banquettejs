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
        const candidates = theme.getVariants(componentName);
        ext:
        for (const candidate of candidates) {
            const candidateVariants = candidate.selector.variants.filter((i) => i !== VariantWildcard);
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
            for (const key of Object.keys(candidate.selector.props)) {
                if (candidate.selector.props[key] !== props[key]) {
                    continue ext;
                }
            }
            output.push(candidate);
        }
    }
    return output;
}

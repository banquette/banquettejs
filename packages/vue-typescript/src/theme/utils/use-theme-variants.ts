import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { trim } from "@banquette/utils-string/format/trim";
import { VueTheme } from "../vue-theme";
import { VueThemeVariant } from "../vue-theme-variant";

/**
 * Gets the full list of variants to apply to a component.
 */
export function useThemeVariants(themes: VueTheme[], componentName: string, variantsStr?: string): VueThemeVariant[] {
    const output: VueThemeVariant[] = [];
    const normalizedVariants = (variantsStr || '').split(' ').reduce((acc: string[], item: string) => {
        item = trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, []).sort();

    for (const theme of themes) {
        const candidates = theme.getVariants(componentName);
        for (const candidate of candidates) {
            if (arrayIntersect(candidate.matches, normalizedVariants).length === candidate.matches.length) {
                output.push(candidate);
            }
        }
    }
    return output;
}

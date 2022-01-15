import { UsageException } from "@banquette/exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { VariantWildcard } from "../constant";

/**
 * Convert a list of matches into a string that can be used to uniquely identify a variant.
 */
export function resolveVariantName(matches: string|string[]): string {
    matches = ensureArray(matches);
    for (const item of matches) {
        if (item !== VariantWildcard && !item.match(/^(\w|\-)+$/)) {
            throw new UsageException('The name of a variant must be alphanumeric without spaces.');
        }
    }
    if (!matches.length) {
        throw new UsageException('You must define at least one variant to match.');
    }
    matches.sort();
    return matches.join('#');
}

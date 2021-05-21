import { ensureArray } from "@banquette/utils";

/**
 * Ensure we always have an array of masks and each of its entries are relative to the root context.
 */
export function normalizeMasks(mask: string|string[], path: string): string[] {
    const output: string[] = [];
    const masks = ensureArray(mask);
    for (let mask of masks) {
        if (!mask.length) {
            continue ;
        }
        // The mask is relative to the current context, so make it absolute.
        if (mask[0] !== '/' && mask[0] !== ':') {
            mask = path + (path[path.length - 1] !== '/' ? '/' : '') + mask;
        }
        output.push(mask);
    }
    return output;
}

/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from '@banquette/utils-type/ensure-array';

/**
 * Ensure we always have an array of masks and each of its entries are relative to the root context.
 */
function normalizeMasks(mask, path) {
    var output = [];
    var masks = ensureArray(mask);
    for (var _i = 0, masks_1 = masks; _i < masks_1.length; _i++) {
        var mask_1 = masks_1[_i];
        if (!mask_1.length) {
            continue;
        }
        // The mask is relative to the current context, so make it absolute.
        if (mask_1[0] !== '/' && mask_1[0] !== ':') {
            mask_1 = path + (path[path.length - 1] !== '/' ? '/' : '') + mask_1;
        }
        output.push(mask_1);
    }
    return output;
}

export { normalizeMasks };

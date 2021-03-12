import { isArray } from "./is-array";
import { isNullOrUndefined } from "./is-null-or-undefined";

/**
 * Ensure the input is always a valid array.
 */
export function ensureArray(input: any): any[] {
    if (isNullOrUndefined(input)) {
        return [];
    }
    if (!isArray(input)) {
        return [input];
    }
    return input;
}

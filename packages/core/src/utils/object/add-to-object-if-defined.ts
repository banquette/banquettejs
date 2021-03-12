import { isUndefined } from "../types/is-undefined";

/**
 * Add a value to an object if it's not undefined.
 */
export function addToObjectIfDefined(obj: Record<string, any>, key: string, value: any): void {
    if (!isUndefined(value)) {
        obj[key] = value;
    }
}

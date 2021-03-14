import { isObject } from "./is-object";

/**
 * Ensure the input is converted to an object.
 */
export function ensureObject(input: any, defaultValue: any = {}): any {
    return isObject(input) ? input : defaultValue;
}

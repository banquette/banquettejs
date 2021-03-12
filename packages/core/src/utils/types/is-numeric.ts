import { isObject } from "./is-object";

/**
 * Test if a variable represent number or not.
 */
export function isNumeric(value: any): boolean {
    return !isObject(value) && !isNaN(parseFloat(value)) && isFinite(value);
}

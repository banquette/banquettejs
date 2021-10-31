import { isArray } from "./is-array";
import { isObjectLiteral } from "./is-object";

/**
 * Determines if the input is a composite of primitive values.
 */
export function isCompound(value: any): value is any[]|object {
    return isArray(value) || isObjectLiteral(value);
}

import { isBoolean } from "./is-boolean";
import { isNullOrUndefined } from "./is-null-or-undefined";
import { isNumber } from "./is-number";
import { isString } from "./is-string";

/**
 * Test if the input is a scalar type.
 */
export function isScalar(value: any): boolean {
    return isString(value) ||
        isNumber(value) ||
        isBoolean(value) ||
        isNullOrUndefined(value);
}

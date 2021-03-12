import { isFunction } from "./is-function";
import { isObject } from "./is-object";
import { isUndefined } from "./is-undefined";

/**
 * Test if the input is a valid momentjs date.
 */
export function isValidMomentDate(value: any): boolean {
    return isObject(value) &&
        (!isUndefined(value.isMoment) || !isUndefined(value._isAMomentObject)) &&
        ((isFunction(value.isValid) && value.isValid()) || value._isValid === true);
}

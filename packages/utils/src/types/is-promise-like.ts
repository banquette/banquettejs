import { isFunction } from "./is-function";
import { isObject } from "./is-object";

/**
 * Test if the input looks like a promise.
 */
export function isPromiseLike(value: any): boolean {
    return isObject(value) && isFunction(value.then);
}

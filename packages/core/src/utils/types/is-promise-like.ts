import { isFunction } from "./is-function";

/**
 * Test if the input looks like a promise.
 */
export function isPromiseLike(value: any): boolean {
    return value && isFunction(value.then);
}

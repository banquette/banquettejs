import { isNullOrUndefined } from "./is-null-or-undefined";

/**
 * Determines if a value is iterable.
 */
export function isIterable(value: any): boolean {
    return !isNullOrUndefined(value) && typeof value[Symbol.iterator] === 'function';
}

import { isArray } from "./is-array";

/**
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 */
export function isObject(value: any, strict: boolean = false): boolean {
    // http://jsperf.com/isobject4
    return value !== null && (typeof value === "object" && (!strict || !isArray(value)));
}

import { isObject } from "./is-object";

/**
 * Determines if a reference is a DOM element (or wrapped jQuery element).
 */
export function isElement(value: any): boolean {
    return !!(isObject(value) &&
        (value.nodeName  // We are a direct element.
            || (value.prop && value.attr && value.find)));  // We have an on and find method part of jQuery API.
}

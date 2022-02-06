import { Constructor } from "./types";

/**
 * Test if the input value is an object constructor.
 */
export function isConstructor(value: any): value is Constructor {
    return typeof(value) === 'function' && !!value.prototype && value.prototype.constructor === value;
}

import { Constructor } from "./types";
import { ensureArray } from "./ensure-array";
import { isObject } from "./is-object";

/**
 * Test if a value correspond to a constructor function.
 */
export function isInstanceOf(value: any, type: Constructor<any>|Array<Constructor<any>>): boolean {
    if (!isObject(value)) {
        return false;
    }
    const types: Array<Constructor<any>> = ensureArray(type);
    for (const type of types) {
        if (type.name && isObject(value.prototype) && value.prototype.name === type.name) {
            return true;
        }
    }
    return false;
}

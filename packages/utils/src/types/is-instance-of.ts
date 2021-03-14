import { ConstructorFunction } from "./constructor-function.type";
import { ensureArray } from "./ensure-array";
import { isObject } from "./is-object";

/**
 * Test if a value correspond to a constructor function.
 */
export function isInstanceOf(value: any, type: ConstructorFunction<any>|Array<ConstructorFunction<any>>): boolean {
    if (!isObject(value)) {
        return false;
    }
    const types: Array<ConstructorFunction<any>> = ensureArray(type);
    for (const type of types) {
        if (type.name && isObject(value.prototype) && value.prototype.name === type.name) {
            return true;
        }
    }
    return false;
}

import { isArray } from "./is-array";
import { isScalar } from "./is-scalar";

/**
 * Test if the input is a plain old javascript object.
 *
 * @param {any}     input
 * @param {boolean} deep  (optional, default: true) if true, the check will be done recursively on all properties of the object.
 *
 * @return {boolean}
 */
export function isPojo(input: any, deep: boolean = true): boolean {
    if (input === null || typeof input !== "object") {
        return false;
    }
    if (Object.getPrototypeOf(input) !== Object.prototype) {
        return false;
    }
    if (!deep) {
        return true;
    }

    const testObjValue = (value: any): boolean => {
        if (isArray(value)) {
            for (const item of value) {
                if (!testObjValue(item)) {
                    return false;
                }
            }
            return true;
        }
        return isScalar(value) || isPojo(value, true);
    };
    for (const key of Object.keys(input)) {
        if (!testObjValue(input[key])) {
            return false;
        }
    }
    return true;
}

import { isObject } from "@banquette/utils-type/is-object";

/**
 * Test if an object contains a nested set of properties.
 *
 * @param {object}    obj
 * @param {...string} keys any number of keys the check.
 *                         Checks are nested, meaning the second property will have to be in an object
 *                         pointed by the first one, and so on.
 *
 * @returns {boolean}
 */
export function hasPropertyNested(obj: any, ...keys: string[]): boolean {
    if (!isObject(obj)) {
        return false;
    }
    for (const key of keys) {
        if (!obj.hasOwnProperty(key)) {
            return false;
        }
        obj = obj[key];
    }
    return true;
}

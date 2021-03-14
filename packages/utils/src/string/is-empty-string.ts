import { isNullOrUndefined } from "../types/is-null-or-undefined";
import { isString } from "../types/is-string";
import { trim } from "./trim";

/**
 * Test if the input is an empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 *
 * @param {string} input
 *
 * @returns {boolean}
 */
export function isEmptyString(input: any): boolean {
    if (isNullOrUndefined(input) || !isString(input)) {
        return true;
    }
    return trim(("" + input)).length === 0;
}

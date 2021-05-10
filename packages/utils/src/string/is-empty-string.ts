import { isNumber } from "../types/is-number";
import { isString } from "../types/is-string";
import { trim } from "./trim";

/**
 * Test if the input is an empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
export function isEmptyString(input: any): boolean {
    return (isString(input) || isNumber(input)) && !trim("" + input).length;
}

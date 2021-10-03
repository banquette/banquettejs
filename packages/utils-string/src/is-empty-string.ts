import { isNumber, isString } from "@banquette/utils-type";
import { trim } from "./format/trim";

/**
 * Test if the input is an empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
export function isEmptyString(input: any): boolean {
    return (isString(input) || isNumber(input)) && !trim("" + input).length;
}

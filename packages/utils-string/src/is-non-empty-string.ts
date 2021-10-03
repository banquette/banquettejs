import { isNumber, isString } from "@banquette/utils-type";
import { trim } from "./format/trim";

/**
 * Test if the input is a non empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
export function isNonEmptyString(input: any): boolean {
    return (isString(input) || isNumber(input)) &&  trim('' + input).length > 0;
}

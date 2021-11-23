import { isNumber } from "@banquette/utils-type/is-number";
import { isString } from "@banquette/utils-type/is-string";
import { trim } from "./format/trim";

/**
 * Test if the input is an empty string.
 * This function makes a basic cast to string so you can give it numbers for example.
 */
export function isEmptyString(input: any): input is string {
    return (isString(input) || isNumber(input)) && !trim("" + input).length;
}

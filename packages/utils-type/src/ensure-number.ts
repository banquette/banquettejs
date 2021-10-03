import { isString } from "./is-string";
import { isValidNumber } from "./is-valid-number";

/**
 * Ensure the input is converted to a valid number.
 */
export function ensureNumber(input: any, defaultValue: number = 0): number {
    if (isString(input)) {
        if (input.indexOf(".") < 0) {
            input = parseInt(input as string, 10);
        } else {
            input = parseFloat(input as string);
        }
    }
    return isValidNumber(input) ? input : defaultValue;
}

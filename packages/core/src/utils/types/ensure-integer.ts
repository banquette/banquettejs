import { isString } from "./is-string";
import { isValidNumber } from "./is-valid-number";

/**
 * Ensure the input is converted to a valid number.
 */
export function ensureInteger(input: any, defaultValue: number = 0): number {
    if (isString(input)) {
        input = parseInt(input as string, 10);
    }
    return isValidNumber(input) ? input : defaultValue;
}

import { isValidNumber } from "./is-valid-number";

/**
 * Test if the input is an integer.
 * Notice: "1" will return false because it's a string.
 */
export function isInteger(value: any): value is number {
    return isValidNumber(value) && value % 1 === 0;
}


/**
 * Test if the input is a number.
 * This function not only checks the type like the angular one, it aso check if it is an invalid number.
 */
export function isValidNumber(value: any): value is number {
    return typeof value === "number" && !isNaN(value);
}

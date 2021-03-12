
/**
 * Determines if a reference is a number.
 */
export function isNumber(value: any): value is number {
    return typeof value === "number";
}

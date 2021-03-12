/**
 * Test if the input is a boolean.
 */
export function isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}

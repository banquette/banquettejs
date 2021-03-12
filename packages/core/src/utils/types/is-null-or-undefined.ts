/**
 * Determines if a reference is null or undefined.
 */
export function isNullOrUndefined(value: any): value is undefined|null {
    return value === null || typeof value === "undefined";
}

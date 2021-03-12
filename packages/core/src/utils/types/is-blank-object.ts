
/**
 * Determine if a value is an object with a null prototype
 */
export function isBlankObject(value: any): boolean {
    return value !== null && typeof value === "object" && !Object.getPrototypeOf(value);
}

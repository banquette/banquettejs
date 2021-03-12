/**
 * Determines if a value is a date.
 */
export function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === "[object Date]";
}

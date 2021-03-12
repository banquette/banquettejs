
/**
 * Test if the input is a real array.
 * Objects will return false.
 */
export function isArray(value: any): value is any[] {
    return Object.prototype.toString.call(value) === "[object Array]";
}

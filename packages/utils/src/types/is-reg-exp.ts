
/**
 * Determines if a value is a regular expression object.
 * The input must be a RegExp object in order to return true, NOT a string.
 */
export function isRegExp(value: any): value is RegExp {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}

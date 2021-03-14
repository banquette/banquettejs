
/**
 * Test if the input is a File object.
 */
export function isFile(value: any): value is File {
    return Object.prototype.toString.call(value) === "[object File]";
}

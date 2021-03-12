
/**
 * Test if the input is a blob object.
 */
export function isBlob(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Blob]";
}


/**
 * Determines if the input is a function.
 */
export function isFunction(value: any): value is Function {
    return typeof value === "function";
}

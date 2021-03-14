
/**
 * Test if the input is a primitive type.
 */
export function isPrimitive(value: any): boolean {
    const type = typeof value;
    return value === null || (type !== 'object' && type !== 'function');
}

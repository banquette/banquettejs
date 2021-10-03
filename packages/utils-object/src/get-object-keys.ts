/**
 * Call Object.keys() on a object while typing the output to the keys defined in the object type.
 * Only use this is your certain the object is not a subtype and will no contain any extra properties.
 */
export function getObjectKeys<T>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

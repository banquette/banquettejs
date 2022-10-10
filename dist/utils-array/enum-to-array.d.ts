/**
 * Convert an enum into an array containing its values.
 */
export declare function enumToArray<T extends {}>(enumeration: T): Array<T[keyof T]>;

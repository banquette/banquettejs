/**
 * Ensure the input is always part of an enumeration.
 */
export declare function ensureInEnum<T extends {}>(input: any, enumeration: T, defaultValue: T[keyof T]): T[keyof T];

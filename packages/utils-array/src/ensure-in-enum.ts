import { isNullOrUndefined } from '@banquette/utils-type';
import { enumToArray } from './enum-to-array';

/**
 * Ensure the input is always part of an enumeration.
 */
export function ensureInEnum<T extends {}>(
    input: any,
    enumeration: T,
    defaultValue: T[keyof T]
): T[keyof T] {
    if (
        !isNullOrUndefined(input) &&
        (enumToArray(enumeration) as any[]).indexOf(input) > -1
    ) {
        return input as T[keyof T];
    }
    return defaultValue;
}

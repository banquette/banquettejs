import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isNumeric } from "@banquette/utils-type/is-numeric";

/**
 * Convert an enum into an array containing its values.
 */
export function enumToArray<T extends {}>(enumeration: T): Array<T[keyof T]> {
    return getObjectKeys(enumeration)
        .filter(key => !isNumeric(key))
        .map((key) => enumeration[key])
        .filter(val => typeof val === 'number' || typeof val === 'string');
}

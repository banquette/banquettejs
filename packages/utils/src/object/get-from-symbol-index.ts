import { isUndefined } from "../types/is-undefined";

/**
 * Workaround to get a value from an object indexed by symbol.
 *
 * @see https://github.com/microsoft/TypeScript/issues/1863#issuecomment-689028589
 */
export function getFromSymbolIndex<T, K extends keyof T>(object: T, key: K, defaultValue: any = null): T[K] {
    if (isUndefined(object[key])) {
        return defaultValue;
    }
    return object[key];
}

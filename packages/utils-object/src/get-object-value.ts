import {
    ensureArray,
    ensureBoolean,
    ensureNumber,
    ensureObject,
    ensureString,
    isArray,
    isObject,
    isUndefined
} from "@banquette/utils-type";

/**
 * Extract a value from an object and ensure it is a string.
 * If the key is not found, the default value is returned.
 */
export function getObjectValueAsString(data: any, key: string, defaultValue?: string): string {
    return ensureString(getObjectValue(data, key, defaultValue));
}

/**
 * Extract a value from an object and ensure it is a valid number.
 * If the key is not found, the default value is returned.
 */
export function getObjectValueAsNumber(data: any, key: string, defaultValue?: number): number {
    return ensureNumber(getObjectValue(data, key, defaultValue));
}

/**
 * Extract a value from an object and ensure it is a boolean.
 * If the key is not found, the default value is returned.
 */
export function getObjectValueAsBoolean(data: any, key: string, defaultValue: boolean = false): boolean {
    return ensureBoolean(getObjectValue(data, key, defaultValue));
}

/**
 * Extract a value from an object and ensure it is an array.
 * If the key is not found, the default value is returned.
 */
export function getObjectValueAsArray<T>(data: any, key: string, defaultValue: any[] = []): any[] {
    return ensureArray(getObjectValue(data, key, defaultValue));
}

/**
 * Extract a value from an object and ensure it is an object.
 * If the key is not found, the default value is returned.
 */
export function getObjectValueAsObject(data: any, key: string, defaultValue: any = null): any {
    return ensureObject(getObjectValue(data, key, defaultValue));
}

/**
 * Try to get a value from an object and returns a default value if not found.
 * The "key" parameter can be an array for multi-dimensional search.
 * You can also write it as a string separated with "->".
 */
export function getObjectValue(data: any, key: string|string[], defaultValue: any = null): any {
    if (!isArray(key)) {
        key = (key as string).split("->");
    }
    let container = data;
    for (const item of key) {
        if (!isObject(container) || isUndefined(container[item])) {
            return defaultValue;
        }
        container = container[item];
    }
    return container;
}

/**
 * Try to find a value in an object.
 *
 * @deprecated Use getObjectValue instead.
 */
export function getValueInObject(data: any, search: string[], defaultValue: any = null): any {
    return getObjectValue(data, search, defaultValue);
}

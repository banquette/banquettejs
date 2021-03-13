/**
 * Generic type guard that takes a callback that will check if the value matches the generic type T.
 */
export function isType<T>(value: any, callback: (value: any) => boolean): value is T {
    return callback(value);
}


export function defineGetter<T, K extends keyof T>(obj: T, key: K, getter: () => T[K]): void {
    Object.defineProperty(obj, key, {
        get: getter,
        enumerable: false,
        configurable: true
    });
}

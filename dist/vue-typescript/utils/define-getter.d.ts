export declare function defineGetter<T, K extends keyof T>(obj: T, key: K, getter: () => T[K]): void;

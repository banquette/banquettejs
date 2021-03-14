/**
 * A generic function, taking any number of arguments and returning anything or nothing.
 */
export type GenericCallback<T = any, R = any> = (...args: T[]) => R;

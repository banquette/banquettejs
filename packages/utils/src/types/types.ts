/**
 * A generic constructor type.
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * A generic function, taking any number of arguments and returning anything or nothing.
 */
export type GenericCallback<T = any, R = any> = (...args: T[]) => R;

/**
 * Remove the readonly of a type.
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Shortcut type for primitive values.
 * "undefined" and "symbol" are technically primitive but are voluntarily omitted.
 */
export type Primitive = string | number | boolean | null;

/**
 * Generic types for POJO data structures.
 */
export type PojoValue = Primitive | Pojo | PojoArray;
export type Pojo = { [member: string]: PojoValue };
export interface PojoArray extends Array<PojoValue> {}

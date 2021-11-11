/**
 * A generic constructor type.
 */
export type Constructor<T = unknown> = new (...args: any[]) => T;

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
 * Define an abstract class (newable function with a prototype and no constructor).
 */
export type Abstract<T> = NewableFunction & { prototype: T };

/**
 * Generic types for POJO data structures.
 */
export type PojoValue = Primitive | Pojo | PojoArray;
export type Pojo = {[member: string]: PojoValue};
export interface PojoArray extends Array<PojoValue> {}

/**
 * Make all properties of a type required.
 */
export type Complete<T> = {
    [P in keyof T]-?: T[P];
}

/**
 * Modify a type by redefining some of its properties.
 */
export type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * Merge properties of two types.
 *
 * @see https://stackoverflow.com/a/47379147/1110635
 */
export type SameProperties<A, B> = {[P in keyof A & keyof B]: A[P] | B[P]};

/**
 * Intersect properties of two types that have the same type in both.
 *
 * @see https://stackoverflow.com/a/63874264/1110635
 */
export type SamePropertiesAndType<A, B> = Pick<
    A,
    {
        [K in keyof A & keyof B]: A[K] extends B[K]
        ? B[K] extends A[K]
            ? K
            : never
        : never;
    }[keyof A & keyof B]
    >;

/**
 * A generic constructor type.
 */
export declare type Constructor<T = unknown> = new (...args: any[]) => T;
/**
 * A generic abstract constructor type.
 */
export declare type AbstractConstructor<T = unknown> = abstract new (...args: any[]) => T;
/**
 * A generic function, taking any number of arguments and returning anything or nothing.
 */
export declare type GenericCallback<T = any, R = any> = (...args: T[]) => R;
/**
 * A generic function that doesn't take or return anything.
 */
export declare type VoidCallback = () => void;
/**
 * Remove the readonly of a type.
 */
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
/**
 * Shortcut type for primitive values.
 * "undefined" and "symbol" are technically primitive but are voluntarily omitted.
 */
export declare type Primitive = string | number | bigint | boolean | null;
/**
 * Define an abstract class (newable function with a prototype and no constructor).
 */
export declare type Abstract<T> = NewableFunction & {
    prototype: T;
};
/**
 * Generic types for POJO data structures.
 */
export declare type PojoValue = Primitive | Pojo | PojoArray;
export declare type Pojo = {
    [member: string]: PojoValue;
};
export interface PojoArray extends Array<PojoValue> {
}
/**
 * Make all properties of a type required.
 */
export declare type Complete<T> = {
    [P in keyof T]-?: T[P];
};
/**
 * Modify a type by redefining some of its properties.
 */
export declare type Modify<T, R> = Omit<T, keyof R> & R;
/**
 * Merge properties of two types.
 *
 * @see https://stackoverflow.com/a/47379147/1110635
 */
export declare type SameProperties<A, B> = {
    [P in keyof A & keyof B]: A[P] | B[P];
};
/**
 * Intersect properties of two types that have the same type in both.
 *
 * @see https://stackoverflow.com/a/63874264/1110635
 */
export declare type SamePropertiesAndType<A, B> = Pick<A, {
    [K in keyof A & keyof B]: A[K] extends B[K] ? B[K] extends A[K] ? K : never : never;
}[keyof A & keyof B]>;
/**
 * Represent any type of object, but excluding arrays.
 */
export interface AnyObject {
    [key: string]: any;
    [key: number]: any;
    length?: never;
}
/**
 * Gets the arguments types of a function.
 */
export declare type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
/**
 * Replace the return type of a function by another while keeping its arguments intact.
 */
export declare type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;
/**
 * Alias an enum type to allow string literal that is part of the enum.
 * All values of the enum must be strings.
 */
export declare type StringEnum<T extends string> = T | `${T}`;

/**
 * Same api as `Array.filter` but without creating a new array.
 * The array given as parameter is mutated.
 */
export declare function arrayFilterInPlace(array: any[], callback: (item: any, index: number, array: any[]) => boolean): void;

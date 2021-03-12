import { randomInt } from "./random-int";

/**
 * Return a random element from an array.
 */
export function randomInArray<T>(arr: T[]): T {
    return arr[randomInt(0, arr.length - 1)];
}

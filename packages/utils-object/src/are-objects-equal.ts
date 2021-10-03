import { compareObjects } from "./compare-objects";

/**
 * Make a deep comparison between two objects to see if they are the same.
 */
export function areObjectsEqual(a: object, b: object): boolean {
    return Object.keys(compareObjects(a, b)).length === 0;
}

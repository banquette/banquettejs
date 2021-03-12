import { areSameObjects } from "./object/are-same-objects";

/**
 * Test if two values are the same, no matter their type.
 */
export function areEqual(a: any, b: any): boolean {
    const ta: string = a !== null ? typeof(a) : 'null';
    const tb: string = b !== null ? typeof(b) : 'null';
    if (ta !== tb) {
        return false;
    }
    switch (ta) {
        case "undefined": return true;
        case "object": return areSameObjects(a, b);
        // function, boolean, number, string, symbol ...
        default: return a === b;
    }
}

/**
 * Compare two variables for equality.
 *
 * @deprecated Use areEqual() instead.
 */
export function areSame(a: any, b: any): boolean {
    return areEqual(a, b);
}

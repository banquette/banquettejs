import { isObjectLiteral, isArray } from '@banquette/utils-type';

/**
 * Test if two values are strictly equal, no matter their type.
 */
export function areEqual(a: any, b: any): boolean {
    const ta: string = a === null ? 'null' : typeof a;
    const tb: string = b === null ? 'null' : typeof b;
    if (ta !== tb) {
        return false;
    }
    if (
        ta !== 'object' ||
        (!isArray(a) && !isObjectLiteral(a)) ||
        (!isArray(b) && !isObjectLiteral(b))
    ) {
        return a === b;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    for (const key of aKeys) {
        if (!areEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

import { areObjectsEqual } from "@banquette/utils-object/are-objects-equal";
import { isArray } from "@banquette/utils-type/is-array";
import { isObjectLiteral } from "@banquette/utils-type/is-object";

/**
 * Test if two values are strictly equal, no matter their type.
 */
export function areEqual(a: any, b: any): boolean {
    const ta: string = a === null ? 'null' : typeof(a);
    const tb: string = b === null ? 'null' : typeof(b);
    if (ta !== tb) {
        return false;
    }
    if (ta === 'undefined' || ta === 'null') {
        return true;
    }
    if (ta === 'object' && (isArray(a) || isObjectLiteral(a)) && (isArray(b) || isObjectLiteral(b))) {
        return areObjectsEqual(a, b);
    }
    return a === b;
}

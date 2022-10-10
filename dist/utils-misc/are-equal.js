/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObjectLiteral } from '@banquette/utils-type/is-object';
import { isArray } from '@banquette/utils-type/is-array';

/**
 * Test if two values are strictly equal, no matter their type.
 */
function areEqual(a, b) {
    var ta = a === null ? 'null' : typeof (a);
    var tb = b === null ? 'null' : typeof (b);
    if (ta !== tb) {
        return false;
    }
    if (ta !== 'object' || (!isArray(a) && !isObjectLiteral(a)) || (!isArray(b) && !isObjectLiteral(b))) {
        return a === b;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
        var key = aKeys_1[_i];
        if (!areEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

export { areEqual };

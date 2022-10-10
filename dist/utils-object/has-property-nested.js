/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObject } from '@banquette/utils-type/is-object';

/**
 * Test if an object contains a nested set of properties.
 *
 * @param {object}    obj
 * @param {...string} keys any number of keys the check.
 *                         Checks are nested, meaning the second property will have to be in an object
 *                         pointed by the first one, and so on.
 *
 * @returns {boolean}
 */
function hasPropertyNested(obj) {
    var arguments$1 = arguments;

    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments$1[_i];
    }
    if (!isObject(obj)) {
        return false;
    }
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        if (!obj.hasOwnProperty(key)) {
            return false;
        }
        obj = obj[key];
    }
    return true;
}

export { hasPropertyNested };

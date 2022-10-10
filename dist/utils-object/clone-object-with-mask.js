/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { cloneDeep } from './clone-deep.js';

/**
 * Make a clone of an object based on mask that describes what properties to clone or to ignore.
 *
 * The mask must follow the structure of the object to clone with few exceptions.
 * For example :
 *
 * ```
 * const source = {
 *     docks: {
 *         top: {
 *             visible: false,
 *             left: {
 *                 id: 1
 *                 tabs: [
 *                     {id: 1, label: 'First tab'},
 *                     {id: 2, label: 'Second tab'}
 *                 ]
 *             },
 *             right: {
 *                 id: 2,
 *                 tabs: [
 *                     {id: 3, label: 'Third tab'},
 *                     {id: 4, label: 'Fourth tab'}
 *                 ]
 *             }
 *         },
 *         left: {
 *             [...]
 *         }
 *     }
 * };
 *
 * const mask = {
 *     docks: {
 *         '*': {
 *             visible: true,
 *             left: {
 *                 tabs: {
 *                     '*': {
 *                         id: true
 *                     }
 *                 }
 *             },
 *             right: {
 *                 tabs: true
 *             }
 *         }
 *     }
 * };
 * ```
 *
 * For each level, you can define which property to copy by adding a key with their name.
 * Or you can put '*' to tell to iterate the object or array to copy all the keys.
 * Set "true" as value in the mask simply ask to copy everything from there.
 *
 * In the example above, the resulting clone will be:
 *
 * ```
 * {
 *     docks: {
 *         top: {
 *             visible: false,
 *             left: {
 *                 tabs: [
 *                     {id: 1},
 *                     {id: 2}
 *                 ]
 *             },
 *             right: {
 *                 tabs: [
 *                     {id: 3, label: 'Third tab'},
 *                     {id: 4, label: 'Fourth tab'}
 *                 ]
 *             }
 *         },
 *         left: {
 *             [...]
 *         }
 *     }
 * }
 * ```
 */
function cloneObjectWithMask(source, mask) {
    var sourceIsArray = isArray(source);
    var clone = sourceIsArray ? [] : {};
    if (isObject(source)) {
        if (isObject(mask, true)) {
            var maskKeys = Object.keys(mask);
            if (maskKeys.length === 1 && maskKeys[0] === '*') {
                var keys = Object.keys(source);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var rawKey = keys_1[_i];
                    var res = undefined;
                    var key = sourceIsArray ? Number(rawKey) : rawKey;
                    if (isObject(source[key])) {
                        res = cloneObjectWithMask(source[key], mask['*']);
                    }
                    else if (mask !== false) {
                        res = source[key];
                    }
                    else {
                        continue;
                    }
                    if (!sourceIsArray) {
                        clone[key] = res;
                    }
                    else {
                        clone.push(res);
                    }
                }
            }
            else {
                for (var _a = 0, _b = Object.keys(mask); _a < _b.length; _a++) {
                    var key = _b[_a];
                    if (isObject(source[key])) {
                        clone[key] = cloneObjectWithMask(source[key], mask[key]);
                    }
                    else if (mask !== false && !isUndefined(source[key])) {
                        clone[key] = source[key];
                    }
                }
            }
        }
        else if (mask === true) {
            return cloneDeep(source);
        }
    }
    else {
        return source;
    }
    return clone;
}

export { cloneObjectWithMask };

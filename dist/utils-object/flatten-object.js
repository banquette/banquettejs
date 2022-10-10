/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from './_virtual/_tslib.js';
import { isObject } from '@banquette/utils-type/is-object';

function doFlatten(obj, concatenator, maxDepth, currentDepth) {
    return Object.keys(obj).reduce(function (acc, key) {
        var _a;
        if (!isObject(obj[key]) || (maxDepth !== 0 && currentDepth >= maxDepth)) {
            return __assign(__assign({}, acc), (_a = {}, _a[key] = obj[key], _a));
        }
        var flattenedChild = doFlatten(obj[key], concatenator, maxDepth, currentDepth + 1);
        return __assign(__assign({}, acc), Object.keys(flattenedChild).reduce(function (childAcc, childKey) {
            var _a;
            return (__assign(__assign({}, childAcc), (_a = {}, _a["".concat(key).concat(concatenator).concat(childKey)] = flattenedChild[childKey], _a)));
        }, {}));
    }, {});
}
/**
 * Flatten a N dimension object.
 *
 * Example:
 *
 * ```
 *  {
 *     foo: {
 *         bar: {
 *             a: 'a',
 *             b: 'b',
 *             c: 'c'
 *         },
 *         baz: 'baz'
 *     },
 *     second: 'second'
 * }
 * ```
 * Will output:
 *
 * ```
 *  {
 *     'foo.bar.a': "a",
 *     'foo.bar.b': "b",
 *     'foo.bar.c': "c",
 *     'foo.baz': "baz",
 *     'second': "second"
 *  }
 * ```
 *
 * If `maxDepth` is positive, defines the maximum number of levels to flatten from the root.
 *
 * If `maxDepth` is 0, flatten the whole object into a single dimension object.
 *
 * If `maxDepth` is negative, it defines the maximum number of levels the final object can have.
 * For example:
 *
 * `flatten(obj, '.', -1)` will produce an object with maximum 2 levels deep.
 * `flatten(obj, '.', -2)` will produce an object with maximum 3 levels deep.
 * `flatten(obj, '.', 0)` will produce an object with maximum 1 level deep (the default behavior).
 */
function flattenObject(obj, concatenator, maxDepth) {
    if (concatenator === void 0) { concatenator = '.'; }
    if (maxDepth === void 0) { maxDepth = 0; }
    var result = doFlatten(obj, concatenator, Math.max(0, maxDepth), 0);
    if (maxDepth < 0) {
        var clone = {};
        for (var _i = 0, _a = Object.keys(result); _i < _a.length; _i++) {
            var key = _a[_i];
            var parts = key.split(concatenator);
            var kept = parts.splice(0, parts.length + maxDepth);
            if (parts.length > 0) {
                var current = void 0;
                if (kept.length > 0) {
                    var newKey = kept.join(concatenator);
                    if (!isObject(clone[newKey])) {
                        clone[newKey] = {};
                    }
                    current = clone[newKey];
                }
                else {
                    current = clone;
                }
                for (var i = 0; i < parts.length - 1; ++i) {
                    if (!isObject(current[parts[i]])) {
                        current[parts[i]] = {};
                    }
                    current = current[parts[i]];
                }
                current[parts[parts.length - 1]] = result[key];
            }
            else {
                clone[key] = result[key];
            }
        }
        return clone;
    }
    return result;
}

export { flattenObject };

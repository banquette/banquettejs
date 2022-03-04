import { isObject } from "@banquette/utils-type/is-object";

function doFlatten(obj: any, concatenator: string, maxDepth: number, currentDepth: number): any {
    return Object.keys(obj).reduce(
        (acc, key) => {
            if (!isObject(obj[key]) || (maxDepth !== 0 && currentDepth >= maxDepth)) {
                return {...acc, [key]: obj[key]};
            }
            const flattenedChild = doFlatten(obj[key], concatenator, maxDepth, currentDepth + 1);
            return {
                ...acc,
                ...Object.keys(flattenedChild).reduce((childAcc, childKey) => ({
                    ...childAcc,
                    [`${key}${concatenator}${childKey}`]: flattenedChild[childKey]
                }), {}),
            };
        },
        {},
    );
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
export function flatten(obj: any, concatenator: string = '.', maxDepth: number = 0): any {
    const result = doFlatten(obj, concatenator, Math.max(0, maxDepth), 0);
    if (maxDepth < 0) {
        let clone: any = {};
        for (const key of Object.keys(result)) {
            const parts = key.split(concatenator);
            const kept = parts.splice(0, parts.length + maxDepth);
            if (parts.length > 0) {
                let current;
                if (kept.length > 0) {
                    const newKey = kept.join(concatenator);
                    if (!isObject(clone[newKey])) {
                        clone[newKey] = {};
                    }
                    current = clone[newKey];
                } else {
                    current = clone;
                }
                for (let i = 0; i < parts.length - 1; ++i) {
                    if (!isObject(current[parts[i]])) {
                        current[parts[i]] = {};
                    }
                    current = current[parts[i]];
                }
                current[parts[parts.length - 1]] = result[key];
            } else {
                clone[key] = result[key];
            }
        }
        return clone;
    }
    return result;
}

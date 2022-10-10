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
export declare function flattenObject(obj: any, concatenator?: string, maxDepth?: number): any;

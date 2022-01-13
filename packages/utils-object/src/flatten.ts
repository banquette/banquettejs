/**
 * Flatten a N dimension object into a single dimension one.
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
 *     foo.bar.a: "a"
 *     foo.bar.b: "b"
 *     foo.bar.c: "c"
 *     foo.baz: "baz"
 *     second: "second"
 *  }
 * ```
 */
export function flatten(obj: any, concatenator: string = '.'): any {
    return Object.keys(obj).reduce(
        (acc, key) => {
            if (typeof obj[key] !== 'object') {
                return {...acc, [key]: obj[key]};
            }
            const flattenedChild = flatten(obj[key], concatenator);
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

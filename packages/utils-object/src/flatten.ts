
/**
 * Flatten a N dimension object into a single dimension one.
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

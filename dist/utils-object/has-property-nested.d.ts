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
export declare function hasPropertyNested(obj: any, ...keys: string[]): boolean;

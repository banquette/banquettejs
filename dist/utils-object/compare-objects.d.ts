/**
 * Compares two objects and returns the difference between them.
 *
 * @param {object}  a
 * @param {object}  b
 * @param {boolean} keepBothValues (optional, default: false) if true, for each difference the old
 *                                 value is stored as a "before" key and the new value as a "after" key.
 *                                 if false, only the new value is returned with no additional object.
 *
 * @return {object}
 */
export declare function compareObjects(a: any, b: any, keepBothValues?: boolean): object;
